---
title: "Handling Spinner in Mobile Automation Testing"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_spinner_mobile_automation_testing.html
redirect_from:
    - "katalon-studio/tutorials/handle_spinner_mobile_automation_testing.html"
description: "A step-by-step guide on how to handle spinner in mobile automation testing using Katalon Studio. This behavior is very common in mobile software development"
---
The source code can be downloaded [here](https://github.com/katalon-studio/katalon-mobile-automation/blob/master/Data%20Files/ApiDemos.apk). This behavior is very common in mobile software development. An example is choosing a location out of a list of US states and territories.

Scenario
--------

Scroll down in Planet Spinner list and **select** "Pluto". **Verify** selected value "Pluto".

![Handle Spinner in Mobile Automation Testing](../../images/katalon-studio/tutorials/handle_spinner_mobile_automation_testing/Handle-spinner-in-Mobile-automation-test.png)

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input.** A dialog will be displayed. In **appFile**, select **Value Type** as **Variable**. In **Value**, pass the variable name as **path**.

![Handle Spinner in Mobile Automation Testing](../../images/katalon-studio/tutorials/handle_spinner_mobile_automation_testing/Handle-spinner-in-Mobile-automation-test-1.png)

*   Step 2: Add **Wait For Element Present** item.
*   Step 3: Call **Scroll To Text** from mobile keyword, pass the input as **Views**. **Scroll To Text** accepts String type parameter (Text of the element to scroll to).

![Handle Spinner in Mobile Automation Testing](../../images/katalon-studio/tutorials/handle_spinner_mobile_automation_testing/Handle-spinner-in-Mobile-automation-test-3.png)

*   Step 4: Call Tap method and pass the object of **Views.**
*   Step 5: Call **Scroll To Text** from mobile keyword, pass the input as **Spinner.**
*   Step 6: Tap on **Spinner.**
*   Step 7: Here in this step after tapping on 'Spinner' we need to wait for Heading 'Views/Spinner' is visible on the screen.
*   Step 8: Call **Tap** method and pass the object of  'Planet Spinner' option.
*   Step 9: Call **Scroll To Text** from mobile keyword, pass the input as **Pluto.**
*   Step 10: Call **Tap** method and pass the object of **Pluto** option**.**
*   Step 11: To verify that **Pluto** option has been selected, we are capturing the text of the selected object by calling **Get Text** keyword and storing it in a variable.

![Handle Spinner in Mobile Automation Testing](../../images/katalon-studio/tutorials/handle_spinner_mobile_automation_testing/Handle-spinner-in-Mobile-automation-test-11.png)

*   Step 12: Call **'Verify Match'** keyword to validate whether the value stored a variable is matched with the expected result.

![Handle Spinner in Mobile Automation Testing](../../images/katalon-studio/tutorials/handle_spinner_mobile_automation_testing/Handle-spinner-in-Mobile-automation-test-12.png)

The step-by-step guide can also be achieved through **Script Mode**. We suggest using the Script feature in Katalon to automate the process faster.

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
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Spinner_Example/heading_API_Demos'), 45)
 
'Scroll to Views text'
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
'Tap on Views'
Mobile.tap(findTestObject('API Demos Objects/Spinner_Example/text_Views'), 20)
 
'Scroll to Spinner text'
Mobile.scrollToText('Spinner', FailureHandling.STOP_ON_FAILURE)
 
'Tap on Spinner'
Mobile.tap(findTestObject('API Demos Objects/Spinner_Example/text_Spinner'), 20)
 
'wait for Element Present of text Header Spinner'
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Spinner_Example/text_header Spinner'), 20)
 
'Verify Element Visible of text Header Spinner'
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Spinner_Example/text_header Spinner'), 30)
 
'Tap on Spinner Planet'
Mobile.tap(findTestObject('API Demos Objects/Spinner_Example/spinner_Planet'), 30)
 
'Scroll to "Pluto" text'
Mobile.scrollToText('Pluto', FailureHandling.STOP_ON_FAILURE)
 
'Tap on Pluto'
Mobile.tap(findTestObject('API Demos Objects/Spinner_Example/text_Pluto'), 20)
 
'Get Selected Dropdown Value and Stored in to "actual_SelectedValue" variable'
actual_SelectedValue = Mobile.getText(findTestObject('API Demos Objects/Spinner_Example/validation_Selected Spinner value'),
	30)
 
'Verify Actual and Expected value of Selected Dropdown'
Mobile.verifyMatch(actual_SelectedValue, 'Pluto', false)
 
Mobile.closeApplication()

```

**Note:** This scenario can be also handled by capturing the values in a list and tapping on the desired value from spinner.

_The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/)._