---
title: "[WebUI] Wait for jQuery Load" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-jquery-load.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+for+jQuery+Load/"
    - "/display/KD/%5BWebUI%5D%20Wait%20for%20jQuery%20Load/"
    - "/x/_QxO/"
    - "/katalon-studio/docs/webui-wait-for-jquery-load/"
description: 
---
Description
-----------

Wait for jQuery to load within the given time in second unit.

Parameters
----------

| Param | ParamType | Mandatory | Description |
| --- | --- | --- | --- |
| seconds | int | Required |  The number of seconds to wait |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

**true** if jQuery is ready. Otherwise, **false**.

> Approach
> 
> Checking of whether jQuery is loaded or used in your current web application is based on this [approach](http://www.swtestacademy.com/selenium-wait-javascript-angular-ajax/).

Example
-------

Verify text displayed after waiting for jQuery to load

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

'Open browser and navigate to page'
WebUI.openBrowser('http://www.jquery-steps.com/Examples#async')

'Click on Start Example button of Async Content Loading Example'
WebUI.click(findTestObject('Page_jQuery-async'))


'Wait for jQuery to be loaded in 20 seconds timeout.
WebUI.waitForJQueryLoad(20)

'Verify displayed text'
WebUI.verifyTextPresent('To test async loading again press \"Next\" and then go back to the first step.', false)

WebUI.closeBrowser()
```