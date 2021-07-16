---
title: "[WebUI] Wait For Image Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-image-present.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Image+Present/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Image%20Present/"
    - "/x/sIgY/"
    - "/katalon-studio/docs/webui-wait-for-image-present/"
description: 
---
Description
-----------

Wait for an image to be present on page.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent an image. |
| timeOutInSeconds  | int  | Required | Maximum period of time (in seconds) that system will wait to return result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>Boolean</td><td><ul><li>true&nbsp;if the image is presented.</li><li>false&nbsp;if the image is NOT presented.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for "img_KatalonLogo" to be present on page.

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

'Open browser and navigate to a site that contains an image'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for the image to be present'
WebUI.waitForImagePresent(findTestObject('img_KatalonLogo'))

'Close browser'
WebUI.closeBrowser()

```

> The test object needs to define a source image from the local machine for Katalon Studio to use it for verification
> 
> ![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/webui-wait-for-image-present/define_image.jpg)