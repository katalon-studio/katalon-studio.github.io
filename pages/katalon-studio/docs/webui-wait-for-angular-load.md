---
title: "[WebUI] Wait For Angular Load" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-angular-load.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Angular+Load/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Angular%20Load/"
    - "/x/9wxO/"
    - "/katalon-studio/docs/webui-wait-for-angular-load/"
description: 
---
Description
-----------

Wait for Angular/AJAX to load within the given time in second unit.

Parameters
----------

| Param | ParamType | Mandatory | Description |
| --- | --- | --- | --- |
| seconds | int | Required |  The number of seconds to wait |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if Angular/AJAX is ready. Otherwise, **false**.

> Checking of whether Angular/AJAX is loaded or used in your current web application is based on this [approach](http://www.swtestacademy.com/selenium-wait-javascript-angular-ajax/).

Example
-------

Wait for Angular to ready on Angular site in 30 seconds.

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
 
'Open browser and navigate to AngularJS page
WebUI.openBrowser('https://angularjs.org/')

'Wait for Angular to be ready'
WebUI.waitForAngularLoad(30)

'Verify displayed text after Angular is ready'
WebUI.verifyTextPresent('Why AngularJS?', false)

'Close browser'
WebUI.closeBrowser()
```