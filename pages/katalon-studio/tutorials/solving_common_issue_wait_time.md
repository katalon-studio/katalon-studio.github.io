---
title: "Solving Wait-time issue with Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/solving_common_issue_wait_time.html
redirect_from:
    - "katalon-studio/tutorials/solving_common_issue_wait_time.html"
description: "This article will guide users through leveraging the wait time to handle the situations: network stability, internet bandwidth, the performance of the AUT."
---
Automation execution usually does not carry out exactly as scripted due to many factors involved during execution such as network stability, internet bandwidth, the performance of the AUT, and the performance of the executing computer. This article will guide users through leveraging delayed time to handle such situations.

**What is Wait?**

Using delayed time is a common practice in test automation scripts to create a pause in-between automation steps as you wait for web elements to load or for the AUT to respond.

Here are some examples of test failure due to insufficient waiting time:

*   **False Fail:** One of the most common failures is when a script fails due to waiting on the application. It is often caused by network latency, delayed database requests, or simply because the system needs more time to process and respond to the request.
*   **Targeted element not present on the page:** This kind of failure occurs when waiting for elements to be displayed or rendered in the browser. The application may be up and running but certain elements may not be loaded, thus causing test scripts to fail.

**How to address those failures related to Wait?**

Katalon provides keywords dedicated to delay explicitly. You can use the following options to address the situation:

*   [**Wait For Page Load**](http://docs.katalon.com/display/KD/%5BWebUI%5D+Wait+For+Page+Load) **–** This logic will wait for a page to completely load before running a step in your script.

*   [**Wait For Element Present**](/display/KD/%5BWebUI%5D+Wait+For+Element+Present) **–** It happens sometimes that web elements take longer time to appear on the page. This keyword pauses execution until the targeted element appears on the page. Once the element appears, the test continues to execute the next action.
*   [**Global variable**](/display/KD/Variable+Types#VariableTypes-Globalvariables) **–** This variable has the global scope, meaning that it is visible throughout the program. Thus, you can use this variable in your test scripts according to the response time of your web application. You may consider defining 3 kinds of global variable in your test scripts, for short, medium, and long waits.

For example: The script below shows the usage of a global variable and the use of Katalon Studio built-in keyword [**Wait For Element Present**](http://docs.katalon.com/display/KD/%5BMobile%5D+Wait+For+Element+Present) to deliberately wait for a specific test element.

![](../../images/katalon-studio/tutorials/solving_common_issue_wait_time/Wait-For-Element-Present.png)

**Figure 1: Katalon Studio test script**

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint</p>
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
 
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
 
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
 
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
import com.kms.katalon.core.testcase.TestCase as TestCase
 
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
 
import com.kms.katalon.core.testdata.TestData as TestData
 
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
 
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
 
import com.kms.katalon.core.testobject.TestObject as TestObject
 
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
 
import internal.GlobalVariable as GlobalVariable
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

```

```groovy
'Open browser and navigate to Katalon site'
WebUI.openBrowser("https://katalon.com")
 
'Wait for Katalon Studio page to load with wait used as Global Variable'
WebUI.waitForPageLoad(GlobalVariable.G_Timeout_Small)
 
'Click on \'Login\'  button to navigate to Login page'
WebUI.click(findTestObject('Page_KatalonHomepage/btn_Login'))
 
'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)
 
'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)
 
'Click on \'Login\'  button to login'
WebUI.click(findTestObject('Page_KatalonHomepage/btn_Submit'))
 
'Wait for failed message to be present'
WebUI.waitForElementPresent(findTestObject('Page_KataloLogin/div_LoginMessage'), GlobalVariable.G_Timeout_Small)
 
WebUI.closeBrowser()

```

**When to use Wait Commands**

Quite often test execution get failed due to the exceptions such as '**NoSuchElementException**', '**ElementNotFoundException**', '**ElementNotVisibleException**'. In order to handle these exceptions, conditional Synchronization has to be implemented. Katalon Studio supports many built in "**Wait for….**" keywords to deal with such exceptions. For example:

| Keyword | Description |
| --- | --- |
| [Wait For Element Present](/display/KD/%5BWebUI%5D+Wait+For+Element+Present) | Wait for the given element to present (appear) within the given time in seconds. |
| [Wait For Element Visible](/display/KD/%5BWebUI%5D+Wait+For+Element+Visible) | Wait until the given web element is visible within timeout. |
| [Wait For Alert](/display/KD/%5BWebUI%5D+Wait+For+Alert) | Wait for a browser's alert to present. |
| [Wait for Element Clickable](/display/KD/%5BWebUI%5D+Wait+For+Element+Clickable) | Wait for the given element to be clickable within the given time in seconds. |