---
title: "[WebUI] Wait For Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-attribute-value.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Element+Attribute+Value/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Attribute%20Value/"
    - "/x/C4sY/"
    - "/katalon-studio/docs/webui-wait-for-element-attribute-value/"
description: 
---
Description
-----------

Wait until the given web element has an attribute with specified name and value.

Parameters 
-----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| attributeName | String | Required | The name of the attribute to wait for. |
| attributeValue | String | Required | The value of the attribute to wait for. |
| timeout | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true: </strong>the element has the attribute with the specified name and value in the given timeout.</li><li><strong>false: </strong>the element doesn't have the attribute with the specified name and value in the given timeout.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait until 'Make Appointment' button has id: 'btnMakeAppointment' .

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

'Wait for \'Make Appoint\' button has id : \'btnMakeAppointment\' in 20 seconds'
WebUI.waitForElementAttributeValue(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'id', 'btnMakeAppointment', 20)

'Close browser'
WebUI.closeBrowser()
```