---
title: "Katalon Studio Integration with TestRail"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-testrail-integration.html
redirect_from:
    - "/katalon-studio/tutorials/katalon-testrail-integration.html"
description: "The tutorial will show you how to integrate between Katalon Studio and TestRail—a test management software tool. Integrating these two tools can benefit users of both systems."
---

This feature has been moved to [TestRail integration plugin](https://store.katalon.com/product/13/TestRail-Integration) for Katalon Studio.

<details><summary>Deprecated Content</summary>

#### About the author:

Nikita Bogdan, QA Engineer at [Alyce Inc.](https://www.alyce.com/) – Strategic B2B gifting platform.

## Introduction

The tutorial will show you how to integrate between Katalon Studio and TestRail—a test management software tool. Integrating these two tools can benefit users of both systems. For instance, test execution results from Katalon Studio can be synchronized with test cases from TestRail, making it easier and more productive for testers to manage and report test coverage as well as test results.

To execute this integration, you should have the basic knowledge of [Katalon Studio](https://www.katalon.com/), [TestRail](https://www.gurock.com/), [Groovy](http://groovy-lang.org/), [Katalon GlobalVariables](https://docs.katalon.com/katalon-studio/docs/create-global-variables-on-the-fly.html), [Custom Keywords](https://docs.katalon.com/katalon-studio/docs/sample-custom-keywords.html), [Test Listeners](https://docs.katalon.com/katalon-studio/docs/test-listeners-test-hooks.html), and Web Requests.

## Prerequisites

**Katalon Studio**

* [Getting started](https://docs.katalon.com/katalon-studio/docs/getting-started.html)

**TestRail**

* [Enable API interaction](http://docs.gurock.com/testrail-api2/accessing)

* Navigate to TestRail > Administration > Site Settings > API menu and enable API for your project.

## Link test cases between Katalon Studio and TestRail

To submit test results from Katalon Studio to TestRail, you need to link a test case from Katalon Studio to the one in TestRail. In order to do that, you need to save the information of the test case in TestRail to Katalon Studio’s global variable.

### Setting up global variables

In the default profile of Katalon Studio, create these three variables:

* **G_run_testrail_tc_id**: a list of executed TestRail test case IDs

* **G_run_testrail_tc_status**: a list of executed TestRail test case status

* **G_testrail_run_id**: current TestRail test run ID

### Set up Katalon Studio test cases

Create a variable named  **‘testrail_tc_id’** in each test case of Katalon Studio to store related TestRail test case IDs. This variable should store numbers only. For instance, if you have a test case with ID C2510, the variable should be filled with “2510.” If any of Katalon Studio’s test cases relates to some TestRail test cases (to demonstrate an end-to-end test flow), the variable should be entirely filled with related TestRail test case IDs, separated by commas such as “2510, 2511, 2512.” Although this step is manual—meaning that it takes time—it is an essential part of the process.

### Set up TestListener to collect tests and results after executing Katalon Studio test cases

Create an AfterTestCase listener to get the testrail_tc_id and the status of the executed TestRail test case. These information are then updated to global variables for later use.

```groovy

@AfterTestCase
def afterTestCase(TestCaseContext testCaseContext) {
def tc_ids = testCaseContext.getTestCaseVariables()['testrail_tc_id']
.split(",")
for (def n : (0 .. tc_ids.length - 1)) {
	GlobalVariable.G_run_testrail_tc_id
.add(tc_ids[n])
GlobalVariable.G_run_testrail_tc_status
.add(testCaseContext.getTestCaseStatus())
}
}
```

## Create custom keywords to interact with TestRail from Katalon Studio via API

This first method makes a GET request to TestRail to receive all test case IDs from your selected TestRail run. These IDs will be used later to update the execution results from Katalon Studio to TestRail.

```groovy

@Keyword
def get_tests(String id) {
	def slurper = new JsonSlurper()
	RequestObject ro = new RequestObject('Get TestRail tests')
	ro.setRestRequestMethod('GET')
	ro.setRestUrl('https://%YOUR PROJECT%.testrail.io/index.php?/api/v2/get_tests/' + id)

	def httpheader = new ArrayList<TestObjectProperty>()
	httpheader.add(new TestObjectProperty(
'Content-Type', ConditionType.EQUALS, 'application/json'))

httpheader.add(new TestObjectProperty(
'Authorization', ConditionType.EQUALS,
'%YOUR TESTRAIL CREDENTIALS ENCODED TO BASE64%'))

ro.setHttpHeaderProperties(httpheader)
ro.setBodyContent(
new HttpTextBodyContent('', 'UTF-8', 'application/json'))

def response = WSBuiltInKeywords.sendRequest(ro)
return slurper.parseText(response.getResponseText())
}
```

Create another custom keyword to update the execution results to TestRail. This method makes a POST request to TestRail to update the selected test run with a new list of test case IDs. This is a common practice advised by TestRail itself. Please note that you can change the request body ‘include_all’ parameter to ‘true’  if you want to include all available test cases to the selected test run.

```groovy

@Keyword
def update_run(String id, String array) {
	def slurper = new JsonSlurper()
	def ro = new RequestObject('Update TestRail test run')
	ro.setRestRequestMethod('POST')
	ro.setRestUrl('https://%YOUR PROJECT%.testrail.io/index.php?/api/v2/update_run/' + id)

	def httpheader = new ArrayList<TestObjectProperty>()
	httpheader.add(new TestObjectProperty(
'Content-Type', ConditionType.EQUALS, 'application/json'))
httpheader.add(new TestObjectProperty(
'Authorization', ConditionType.EQUALS, '%YOUR TESTRAIL CREDENTIALS ENCODED TO BASE64%'))
ro.setHttpHeaderProperties(httpheader)

def body ="{'include_all': false,'case_ids': " + array + "}"
WebUI.comment('body = ' + body)
ro.setBodyContent(
new HttpTextBodyContent(body, 'UTF-8', 'application/json'))
def response = WSBuiltInKeywords.sendRequest(ro)
return slurper.parseText(response.getResponseText())
}
```

This final method is used to add test results to TestRail.

```groovy

@Keyword
def add_results(String id, String request) {
	def slurper = new JsonSlurper()
	RequestObject ro = new RequestObject('Add TestRail results')
	ro.setRestRequestMethod('POST')
	ro.setRestUrl('https://%YOUR PROJECT%.testrail.io/index.php?/api/v2/add_results_for_cases/' + id)

	def httpheader = new ArrayList<TestObjectProperty>()
	httpheader.add(new TestObjectProperty(
'Content-Type', ConditionType.EQUALS, 'application/json'))
httpheader.add(new TestObjectProperty(
'Authorization', ConditionType.EQUALS,
'%YOUR TESTRAIL CREDENTIALS ENCODED TO BASE64%'))
ro.setHttpHeaderProperties(httpheader)


WebUI.comment('body = ' + request)
ro.setBodyContent(new HttpTextBodyContent(
request, 'UTF-8', 'application/json'))


def response = WSBuiltInKeywords.sendRequest(ro)
def response_array = slurper.parseText(response.getResponseText())
return slurper.parseText(response.getResponseText())
}
```

## Create Katalon Studio test cases to handle communication between Katalon Studio and TestRail

Once all API call methods are ready, you will finally be able to start the integration. Let’s create a Katalon Studio test case with the following automation scripts:

```groovy

def response = CustomKeywords.'get_tests'(GlobalVariable.G_testrail_run_id)
WebUI.comment('response='+response.toString())
def tcs_to_add = []
for (def n:(0..response['id'].size)) {
if (response['case_id'][n].toString()!='null'){
tcs_to_add.add(response['case_id'][n].toString())
}
}
WebUI.comment(tcs_to_add.toString())
def total_tcs_to_update=[]
for (def n:(0..GlobalVariable.G_run_testrail_tc_id.size)) {
if (GlobalVariable.G_run_testrail_tc_id[n].toString()!='null') {
total_tcs_to_update.add(GlobalVariable.G_run_testrail_tc_id[n].toString())
}
}
for (def n:(0..tcs_to_add.size)) {
if (tcs_to_add[n]!='null') {
total_tcs_to_update.add(tcs_to_add[n].toString())
}
}
response = CustomKeywords.'update_run'(GlobalVariable.G_testrail_run_id, total_tcs_to_update)
WebUI.comment('response=' + response.toString())
String request = '{"results": ['
def status_id
for (def n:(0..GlobalVariable.G_run_testrail_tc_id.size)) {
if (GlobalVariable.G_run_testrail_tc_id[n]!='null') {
if (GlobalVariable.G_run_testrail_tc_status[n]=='PASSED'){
status_id='1' //passed
} else {
status_id ='4'
}//retest
request = request.concat('{"case_id":'+GlobalVariable.G_run_testrail_tc_id[n]+',"status_id":'+status_id+',"comment":"AT"},')
}
}
request = request.substring(0, request.length()-1) //removing last excessive comma from request
request = request.concat("]}")
request = request.replaceAll("null,","")
request = request.replaceAll("null","")
WebUI.comment('request=' + request.toString())
response = CustomKeywords.'add_results'(id, request)
WebUI.comment('response=' + response.toString())
```

Almost complete!

The final step is creating another listener at TestSuite to call the Katalon Studio test case you created in the previous step:

```groovy

@AfterTestSuite
Def afterTestSuite() {
'push results to testrail'
WebUI.callTestCase(findTestCase('%replace this with path to your test case, for example:_nb/sync/testrail -- update run tc results%'), [:], FailureHandling.CONTINUE_ON_FAILURE)
}
```

## Conclusion

Integrating between Katalon Studio and TestRail can help users not only reduce the complexity and cost during the testing process, but also  improve the productivity and efficiency in automation testing and test case management. To learn more about these two tools, visit Katalon Studio and TestRail websites.

</details>