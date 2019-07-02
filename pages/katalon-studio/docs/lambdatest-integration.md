---
title: "LambdaTest Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/lambdatest-integration.html 
redirect_from:
    - "/display/KD/LambdaTest+Integration/"
    - "/display/KD/LambdaTest%20Integration/"
    - "/x/mRdO/"
    - "/katalon-studio/docs/lambdatest-integration/"
description: 
---
The LambdaTest integration will help you run your automation scripts on LambdaTest Selenium Grid from your Katalon Studio instance. To integrate with LambdaTest, you will need to execute your test scripts using the **Remote** option based on LambdaTest’s provided capabilities of your choice. 

Here is a step-by-step guide to help you trigger your first automation script on LambdaTest Selenium Grid through Katalon Studio.

**Step 1:** Login to your LambdaTest account.

**Step 2:** In the left-navigation menu inside LambdaTest web-application, go to the **Profile **tab, then enter your **Username **and **Access Key**.

These values are necessary for authentication purpose between your Katalon Studio instance & LambdaTest account. They will also help generate a secure remote connection between Katalon Studio & LambdaTest remote hub URL.

Syntax for LambdaTest remote URL: [http://username:accessKey@hub.lambdatest.com/wd/hub](http://username:accessKey@hub.lambdatest.com/wd/hub). 

![](../../images/katalon-studio/docs/lambdatest-integration/lambda-1.png)

The above image is an example of a **LambdaTest Profile** section. This would help you to realize the syntax for invoking a LambdaTest remote URL. In this case, the remote URL is: [http://harshitp:ABCD1234PQRS@hub.lambdatest.com/wd/hub](http://harshitp:ABCD1234PQRS@hub.lambdatest.com/wd/hub). 

**Step 3:** Now, you need to specify your desired capabilities to execute your test automation script. To do so, the **LambdaTest Capabilities Generator** will provide the desired capabilities the class to run scripts in LambdaTest Selenium Grid. 

LambdaTest Capabilities Generator supports various programming languages for your desired capabilities class:

*   Java
*   C#
*   PHP
*   Ruby
*   JavaScript
*   Python

For example, you want to test on macOS Mojave using the Google Chrome browser version 75 on a screen resolution of 1024x768. Then the Capability Generator will provide you with the desired capabilities class below for Java frameworks.

![](../../images/katalon-studio/docs/lambdatest-integration/lambda-2.png)


**Step 4:** Once you have your desired capabilities set, the next step is to configure the **Remote settings** in Katalon Studio. Go to **Project** > **Settings** > **Desired Capabilities** > **Remote**.

![](../../images/katalon-studio/docs/lambdatest-integration/lambda-3.png)

**Step 5:** Enter the basic parameters for your automation tests and execute it. Go to **Action** > **Run** > **Remote**.

![](../../images/katalon-studio/docs/lambdatest-integration/lambda-4.png)

_Important Note: LambdaTest recommends using Listeners to avoid timeout issues while executing Groovy scripts in LambdaTest Selenium Grid from Katalon Studio. Below is an example of a Listener._

**Step 1**: Select **Test explorer** from the left navigation menu in Katalon Studio >  Right click the **Test Listener folder** > Click **New listener**.

**Step 2**: Provide a relevant name to the new listener before pasting the code below:


```
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
 
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import internal.GlobalVariable as GlobalVariable
 
import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.AfterTestSuite
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.context.TestSuiteContext
 
import com.kms.katalon.core.configuration.RunConfiguration
 
class LambdaListener {
	/**
	 * Executes before every test case starts.
	 * @param testCaseContext related information of the executed test case.
	 */
	@BeforeTestCase
	def sampleBeforeTestCase(TestCaseContext testCaseContext) {
		//To set the test name at LambdaTest.
		RunConfiguration.setWebDriverPreferencesProperty("name", testCaseContext.getTestCaseId())
		println testCaseContext.getTestCaseId()
		println testCaseContext.getTestCaseVariables()
	}
	/**
	 * Executes after every test case ends.
	 * @param testCaseContext related information of the executed test case.
	 */
	@AfterTestCase
	def sampleAfterTestCase(TestCaseContext testCaseContext) {
		//To set the status of test at LambdaTest.
		try{
			WebUI.executeJavaScript("lambda-status="+testCaseContext.getTestCaseStatus().toLowerCase(),null)
		}catch (Exception e)
		{
			//print anything
		}
		finally {
			WebUI.closeBrowser()
		}
		println testCaseContext.getTestCaseId()
		println testCaseContext.getTestCaseStatus()
	}
 
	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@BeforeTestSuite
	def sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		//To Set the build Name at LambdaTest.
		RunConfiguration.setWebDriverPreferencesProperty("build", testSuiteContext.getTestSuiteId())
		println testSuiteContext.getTestSuiteId()
	}
 
	/**
	 * Executes after every test suite ends.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@AfterTestSuite
	def sampleAfterTestSuite(TestSuiteContext testSuiteContext) {
		println testSuiteContext.getTestSuiteId()
	}
}

```