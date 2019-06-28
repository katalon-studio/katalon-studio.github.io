---
title: "Global Variables"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/global-variables.html
redirect_from:
  - "/katalon-studio/docs/global-variables/"
description:
---

A Global Variable can be accessed anywhere inside your project. Global Variables can be managed using the **Global Variables** view.

Expand the **Global Variable** view. Then click **Add**. 

![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A273A48.png)

The **New Variable** dialog is displayed. Specify details for the variable then click **OK**.

![](../../images/katalon-studio/docs/variable-types/image2017-1-24-153A413A17.png)


The variable will be added to the **Global Variable** list accordingly.
    ![](../../images/katalon-studio/docs/variable-types/image2017-6-30-203A283A43.png)


Global Variables can be utilized by any test case across a project. (e.g. input data for keywords in [Manual View](/display/KD/Manual+View) or params when [binding Data for Test Execution](/display/KD/Design+a+Test+Suite#DesignaTestSuite-VariableBinding)).

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable as GlobalVariable

WebUI.comment('Story: Login to CURA system')

WebUI.comment('Given that the user has the valid login information')

WebUI.openBrowser(GlobalVariable.G_SiteURL)

WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

WebUI.comment('When he logins to CURA system')

WebUI.click(findTestObject('Page_Login/btn_Login'))

WebUI.comment('Then he should be able to login successfully')

landingPage = WebUI.verifyElementPresent(findTestObject('Page_CuraAppointment/div_Appointment'), GlobalVariable.G_Timeout)

WebUI.closeBrowser()
```