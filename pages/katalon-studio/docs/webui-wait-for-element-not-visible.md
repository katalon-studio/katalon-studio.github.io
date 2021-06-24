---
title: "[WebUI] Wait For Element Not Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-wait-for-element-not-visible.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Visible/"
    - "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Visible/"
    - "/x/mIwY/"
    - "/katalon-studio/docs/webui-wait-for-element-not-visible/"
description: 
---
Description
-----------

Wait until the given web element is NOT visible within a timeout.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeout | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

> **Note**: 
> 
> FailureHandling is currently not supported for this keyword.

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true: </strong>the element is present and NOT visible in the given timeout.</li><li><strong>false:</strong> the element is present and visible in the given timeout.</li></ul></td></tr></tbody></table>

Example
-------

You want to wait 'Make Appointment' button NOT visible in 20 seconds

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Wait for \'Make Appoint\' button NOT visible in 20 seconds'
WebUI.waitForElementNotVisible(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 20)

'Close browser'
WebUI.closeBrowser()
```
