---
title: "[WebUI] Wait For Element Not Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-not-present.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Present/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Present/"
    - "/x/cowY/"
    - "/katalon-studio/docs/webui-wait-for-element-not-present/"
description: 
---
Description
-----------

Wait for the given element to NOT present (appear) within the given time (in seconds). 

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeout | int | Required | Maximum period of time (in seconds) that system will wait to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong> the element is NOT present within given timeout.</li><li><strong>false:&nbsp;</strong>the element is present within given timeout.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait until 'Make Appointment' button is NOT present in 20 seconds.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
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

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify \'Make Appointment\' button is NOT present'
WebUI.waitForElementNotPresent(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 20)

'Close browser'
WebUI.closeBrowser()
```