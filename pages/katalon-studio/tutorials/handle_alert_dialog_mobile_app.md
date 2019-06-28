---
title: "Handling Alert Dialog in Mobile App"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_alert_dialog_mobile_app.html
redirect_from:
    - "katalon-studio/tutorials/handle_alert_dialog_mobile_app.html"
description: "Learn how to test the alert dialog which usually appears on mobile app when there are suspicious/potentially dangerous actions using Katalon Studio."
---
An alert dialog box is used to send a message to the user. An alert box displays a dialog with a specific message and allows user to accept or reject the alert (OK/Cancel buttons).

The .apk file can be downloaded [here](https://github.com/katalon-studio/katalon-mobile-automation/blob/master/Data%20Files/ApiDemos.apk). Start the app. Select **App** \> **Alert Dialogs**.

Scenario
--------

We want to test the alert dialog which usually appears on mobile app when there are suspicious/potentially dangerous actions.

![Handling Alert Dialog in Mobile App](../../images/katalon-studio/tutorials/handle_alert_dialog_mobile_app/Handling-Alert-Dialog-in-Mobile-App.png)

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input** to open a new dialogue. In **appFile**, select '**Value Type**' as **Variable**. In **Value**, pass the variable name as '**path'**.

![Handling Alert Dialog in Mobile App](../../images/katalon-studio/tutorials/handle_alert_dialog_mobile_app/Handling-Alert-Dialog-in-Mobile-App-1.png)

*   Step 2: Add a **Wait For Element Present** item.
*   Step 3: Call **Scroll To Text** from mobile keyword, pass **App** to **Input**. **Scroll To Text** accepts **String** type **parameter** (Text of the element to scroll to).

![Handling Alert Dialog in Mobile App](../../images/katalon-studio/tutorials/handle_alert_dialog_mobile_app/Handling-Alert-Dialog-in-Mobile-App-3.png)

*   Step 4: Call **Tap** method and pass the object of **App**.
*   Step 5: Select **Scroll To Text** method and pass the **Alert Dialogs** text.

![Handling Alert Dialog in Mobile App](../../images/katalon-studio/tutorials/handle_alert_dialog_mobile_app/Handling-Alert-Dialog-in-Mobile-App-5.png)

*   Step 6: Tap on **Alert Dialogs**.
*   Step 7: Add another **Wait for Element Present** keyword for object **App**/**Alert Dialogs**.
*   Step 8: Call **Scroll To Text** from mobile keyword, pass the input as **OK Cancel dialog with traditional theme**.
*   Step 9: Call **Tap** method and pass the object of **OK Cancel dialog with traditional theme**.
*   Step 10: Verify alert using **Verify Element Visible** keyword.
*   Step 11: Capture the text of alert using **Get Text** command and store it in a variable **actual_AlertText.**
*   Step 12: Verify **Actual** and **Expected** alert texts by **Verify Match** keyword.

![Handling Alert Dialog in Mobile App](../../images/katalon-studio/tutorials/handle_alert_dialog_mobile_app/Handling-Alert-Dialog-in-Mobile-App-13.png)

*   Step 13: **Tap** on **OK** Button.

Script Mode
-----------

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for element Present of Heading API Demos'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Article_4/heading_API_Demos'), 45)
 
 
 
'Scroll to App text'
 
Mobile.scrollToText('App', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap on App'
 
Mobile.tap(findTestObject('API Demos Objects/Handle Alert/text_App'), 20)
 
 
 
'Scroll to Alert Dialogs text'
 
Mobile.scrollToText('Alert Dialogs', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap on Alert Dialogs'
 
Mobile.tap(findTestObject('API Demos Objects/Handle Alert/text_Alert Dialogs'), 30)
 
 
 
'Wait for Element Present of Header Alert'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Handle Alert/text_Header Alert'), 30)
 
 
 
'Verify Element Visible of Header Alert'
 
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Handle Alert/text_Header Alert'), 30)
 
 
 
'Scroll to "OK Cancel dialog with traditional theme"'
 
Mobile.scrollToText('OK Cancel dialog with traditional theme', FailureHandling.STOP_ON_FAILURE)
 
 
 
'Tap On Button OK Cancel dialog with traditional theme'
 
Mobile.tap(findTestObject('API Demos Objects/Handle Alert/button_OK Cancel dialog with traditional theme'), 30)
 
 
 
'Wait for Element Visible of Alert Title'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Handle Alert/text_Alert Title'), 30)
 
 
 
'Verify the Element Visible of Alert Title'
 
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Handle Alert/text_Alert Title'), 30)
 
 
 
'Get the Alert Title text and Store in to "actual_AlertText" variable'
 
actual_AlertText = Mobile.getText(findTestObject('API Demos Objects/Handle Alert/text_Alert Title'), 30)
 
 
 
'Verify the actual and Expected Alert Texts'
 
Mobile.verifyMatch(actual_AlertText, "Lorem ipsum dolor sit aie consectetur adipiscing\nPlloaso mako nuto siwuf cakso dodtos anr koop.",false)
 
 
 
'Tap on OK Button on Alert'
 
Mobile.tap(findTestObject('API Demos Objects/Handle Alert/button_OK'), 30)

```

For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/).