---
title: "[WebUI] Wait For Element Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-visible.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Element+Visible/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Visible/"
    - "/x/vocY/"
    - "/katalon-studio/docs/webui-wait-for-element-visible/"
description: 
---
Description
-----------

Wait until the given web element is visible within the timeout.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeOut  | int  | Required | Maximum period of time (in seconds) that system will wait to return the result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>Boolean</td><td><ul><li><strong>true: </strong>the element is present and visible within&nbsp;the timeout.</li><li><strong>false:</strong> the element is NOT present and visible within&nbsp;the timeout.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait for 'btn_Login' button to be visible in 10 seconds.

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

'Open browser and navigate to website that contains the element to wait for'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for btn_Login to be visible in 10s'
WebUI.waitForElementVisible(findTestObject('Page_Login/btn_Login'), 10)

'Close browser'
WebUI.closeBrowser()


```