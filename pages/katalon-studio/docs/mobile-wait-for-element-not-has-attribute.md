---
title: "[Mobile] Wait For Element Not Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-not-has-attribute.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Wait+For+Element+Not+Has+Attribute/"
    - "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Not%20Has%20Attribute/"
    - "/x/Y5IY/"
    - "/katalon-studio/docs/mobile-wait-for-element-not-has-attribute/"
description: 
---
Description
-----------

Wait until the given mobile element does NOT have an attribute with the specified name.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| attributeName | String | Required | The name of the attribute to wait for. |
| timeout | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong> the element doesn't have the attribute with the specified name.</li><li><strong>false: </strong>the element has the attribute with the specified name.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait for 'App' button has 'class' attribute.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

'Wait until app control does NOT has class atribute'
Mobile.waitForElementNotHasAttribute(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```