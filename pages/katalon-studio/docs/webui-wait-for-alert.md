---
title: "[WebUI] Wait For Alert" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-alert.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Alert/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Alert/"
    - "/x/mYgY/"
    - "/katalon-studio/docs/webui-wait-for-alert/"
description: 
---
Description
-----------

Wait for an alert to present.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | int | Required | Timeout waiting for an alert to present. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> Failure Handling is currently not supported for this keyword.

Example
-------

You want to wait for an alert to present in 20 seconds.

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

'Open browser and navigate to website which will show the alert'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for an alert to present in 20 seconds'
WebUI.waitForAlert(20)

'Close browser'
WebUI.closeBrowser()
```
