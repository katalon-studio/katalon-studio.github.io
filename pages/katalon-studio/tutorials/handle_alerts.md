---
title: "How to Handle Alerts"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_alerts.html
redirect_from:
    - "katalon-studio/tutorials/handle_alerts.html"
description: "The alerts that are used to notify users on a Web page can be handled using Katalon Studio. This tutorial shows how to do so with HTML examples."
---
What is an alert?
-----------------

An alert is a Javascript function which is used to notify users on a Web page. It displays a dialog with a specified message and OK/Cancel buttons.

The alert is a modal dialog that takes the focus away from the current window and forces the user to take action before performing other actions. It also prevents the user from accessing other parts of the page until the user performs the action presented in the dialog. For example, when the user clicks on the "Delete" button, an alert would be triggered asking user 'Are you sure, you want to delete?' The user has to take action on this dialog.

Such an alert can be handled using Katalon Studio built-in keywords. This tutorial shows how to do so with HTML examples. You can get the HTML by clicking [here](https://github.com/katalon-studio/katalon-web-automation/blob/master/Html%20Files/How%20to%20Handle%20Alerts2.html).

Handle Alerts using Katalon Studio
----------------------------------

### 1\. Handle Accept Alert

This alert method is used to confirm an action performed by the user. You can handle this method either in the manual or script modes.

**Manual Mode**

*   Step 1: Launching the browser navigating to Alert present page by Open Browser method
*   Step 2: Maximize the window of the browser with Maximize window
*   Step 3: Clicking on button
*   Step 4: Call the Accept alert method

**![Handle Accept Alerts using Katalon Studio](../../images/katalon-studio/tutorials/handle_alerts/Handle-accept-alert.png)**

**Script Mode**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Launching the browser navigating to Alert present page\r\n'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\How to Handle Alerts.html')
 
'Maximize the window of the browser'
 
WebUI.maximizeWindow()
 
'Clicking on  button'
 
WebUI.click(findTestObject('Alerts/button_ClickHere'))
 
'Accepting the Alert'
 
WebUI.acceptAlert()

```

### 2\. Handle Dismiss Alert

This alert method is used to ask the user to cancel something.

**Manual Mode**

*   Step 1: Launching the browser navigating to Alert present page by Open Browser method
*   Step 2: Maximize the window of the browser with Maximize window
*   Step 3: Clicking on button
*   Step 4: Call the Dismiss alert method

**![Handle dismiss alerts using Katalon Studio](../../images/katalon-studio/tutorials/handle_alerts/Handle-dismiss-alert.png)**

**Script Mode**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Launching the browser navigating to Alert present page\r\n'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\Alerts\\How to Handle Alerts2.html')
 
'Maximize the window of the browser'
 
WebUI.maximizeWindow()
 
'Clicking on  button'
 
WebUI.click(findTestObject('Alerts/button_ClickHere'))
 
'Dismiss the Alert '
 
WebUI.dismissAlert()

```

### 3\. Send data to an alert dialog

We can pass text to an **Alert** text message by using the **sendKeys()** method.

**Manual Mode**

*   Step 1: Launching the browser navigating to Alert present page by Open Browser method
*   Step 2: Maximize the window of the browser with Maximize window
*   Step 3: Clicking on button
*   Step 4: By sendKeys method passing the Text to an Alert

![Send data to an alert dialog using Katalon Studio](../../images/katalon-studio/tutorials/handle_alerts/Send-data-to-an-alert-dialog.png)

**Script Mode**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import org.openqa.selenium.WebDriver as WebDriver
 
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
 
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
 
'Launching the browser navigating to Alert present page\r\n'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\Alerts\\How to Handle Alerts2.html')
 
'Maximize the window of the browser'
 
WebUI.maximizeWindow()
 
'Clicking on  button'
 
WebUI.click(findTestObject('Alerts/button_ClickHere'))
 
WebDriver driver = DriverFactory.getWebDriver()
 
'Passing the text in the text box in the Alert\r\n'
 
driver.switchTo().alert().sendKeys('Testing')
 
'Dismiss the Alert'
 
WebUI.dismissAlert()

```

### 4\. Capture the alert message

We can capture the message on Alert by using the getText() method.

**Manual Mode**

*   Step 1: Launching the browser navigating to Alert present page by Open Browser method
*   Step 2: Maximize the window of the browser with Maximize window
*   Step 3: Clicking on button
*   Step 4: Getting the text from the alert and storing it in Variable
*   Step 5: Verifying the Actual and Expected text from Alert

![Capture the alert message using Katalon Studio](../../images/katalon-studio/tutorials/handle_alerts/Capture-alert-message.png)

**Script Mode**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import org.openqa.selenium.WebDriver as WebDriver
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
'Launching the browser'
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\Alerts\\How to Handle Alerts2.html')
'Maximize the window of the browser'
WebUI.maximizeWindow()
'Clicking on the click here button'
WebUI.click(findTestObject('Alerts/button_ClickHere'))
WebDriver driver = DriverFactory.getWebDriver()
'Getting the text from the alert and storing it in Variable'
String AlertText = driver.switchTo().alert().getText()
'Verifying the Actual and Expected text from Alert'
WebUI.verifyEqual(AlertText, 'Please enter your name')

```

The source code is available to be downloaded [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, refer to [WebUI Alert](/display/KD/%5BWebUI%5D+Alert)  and [Solving pop-up dialog issue with Katalon Studio](/katalon-studio/tutorials/pop-up-dialog-issue/).