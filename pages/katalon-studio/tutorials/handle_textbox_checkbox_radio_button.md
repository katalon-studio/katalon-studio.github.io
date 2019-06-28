---
title: "How to Handle Textbox Checkbox and Radio Button"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_textbox_checkbox_radio_button.html
redirect_from:
    - "katalon-studio/tutorials/handle_textbox_checkbox_radio_button.html"
description: "This article will help you to discover what is textbox, checkbox, radio button and how to handle them using Katalon Studio in particular scenarios."
---
This tutorial illustrates how to handle Textbox, Checkbox, Radio buttons using Katalon Studio. The reference source code is provided at the end of the tutorial.

How to Handle Textbox
---------------------

A textbox is a field that allows users to enter text as an input. Textbox and textarea are similar but the latter allows multiple lines and more characters.

Users can perform certain actions on textbox such as clear text, type text and validate the provided text using Katalon Studio.

**Scenario: Verifying the provided text in textbox**

*   Step 1: Launch Browser
*   Step 2: Navigate to URL
*   Step 3: Click on Make Appointment
*   Step 4: Enter username as "Katalon"
*   Step 5: Validate the Enter Username is correctly entered or not

**Script Mode**

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
 
'Invoking the browser'
 
WebUI.openBrowser('')
 
'Passing the URL'
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
'Click on the make Appointment Button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
'Decalre username variable and assign the value'
 
<strong>def</strong> userName = 'katalon'
 
'Enter text to username field'
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (1)/input_username'), userName)
 
'Get the attribute value of username text field'
 
input_Value = WebUI.getAttribute(findTestObject('Page_CURA Healthcare Service (1)/input_username'), 'value')
 
'verify the entered text and attribute value'
 
WebUI.verifyMatch(userName, input_Value, <strong>false</strong>)
 
WebUI.closeBrowser()

```

**Manual Mode**

![Handle textbox using Katalon Studio Manual mode](../../images/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-text-box.png)

In the script mode above, **Def** is a keyword in Groovy used for declaration of variables. Username is a variable name, here storing the value "Katalon" in the **username** variable.

How to Handle Button and Checkbox
---------------------------------

**Scenario:** To make an appointment

*   Step 1: Launch the application under test (URL: [http://demoaut.katalon.com/](http://demoaut.katalon.com/)).
*   Step 2: Click on Make Appointment (verify the button and click operation).
*   Step 3: Enter the valid username, password and click on Login button (verify the button and click operation).
*   Step 4: Make an appointment (check, uncheck the **checkbox** and verify check, uncheck status).

**Script Mode**

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
 
'Invoking Browser'
 
WebUI.openBrowser('')
 
'Launch the url'
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
'verify the element is clickable or not'
 
WebUI.verifyElementClickable(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
'Click on Make Appointment Button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
'Click on Login Button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
'Select the Hongkong CURA Healthcare Center from dropdown'
 
WebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',
 
<strong>true</strong>)
 
'check Hospital readmission check box'
 
WebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
'verify Hospital readmission check box is checked'
 
WebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'), 30)
 
'un check Hospital readmission check box'
 
WebUI.uncheck(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
'Verify uncheck Hospital readmission check box'
 
WebUI.verifyElementNotChecked(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'), 30)
 
'click on Medicadi radio button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_programs'))
 
'Click on calendar icon'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))
 
'CLick on Calendar date'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))
 
'Enter katalon text in comments box'
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')
 
'Click on Book Appointment'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))
 
'Close the Browser'
 
WebUI.closeBrowser()

```

**Manual Mode**

**![Handle Button and Checkbox using Katalon Studio Manual mode ](../../images/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-Button-and-Checkbox.png)**

In the script above, the keyword **VerifyElementClickable** is used to validate whether the **Make Appointment Button** is clickable.

The keywords **VerifyElementChecked** and **VerifyElementNotChecked** are used to validate whether an element is checked or unchecked, respectively.

How to Handle Radio Button
--------------------------

Radio Button is a toggle-button that allows you to check the operations.  
**Scenario:** To make an appointment

*   Step 1: Launch the application under test (URL: [http://demoaut.katalon.com/](http://demoaut.katalon.com/)).
*   Step 2: Click on Make Appointment (verify the button and click operation).
*   Step 3: Enter a valid username, password and click on Login button (verify the button and click operation).
*   Step 4: Make an appointment (check, uncheck the **Radio Button** and verify **radio button** check, uncheck status).

**Script Mode**

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
 
'Invoking Browser'
 
WebUI.openBrowser('')
 
'Launch the url'
 
WebUI.navigateToUrl('http://demoaut.katalon.com/')
 
'Click on Make Appointment Button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
 
'Click on Login Button'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))
 
'Select the Hongkong CURA Healthcare Center from dropdown'
 
WebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',
 
<strong>true</strong>)
 
'Check Hospital readmission check box'
 
WebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))
 
'Check on Medicadi radio button'
 
WebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'))
 
'Check the None Radio Button'
 
WebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'), 30)
 
'Check on Medicadi radio button'
 
WebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_None Radio'))
 
'Verify unchecked status of Medicaid Radio button'
 
WebUI.verifyElementNotChecked(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'), 30)
 
'Verify the checked status of the None Radio Button'
 
WebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_None Radio'), 30)
 
'Click on calendar icon'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))
 
'Click on Calendar date'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))
 
'Enter katalon text in comments box'
 
WebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')
 
'Click on Book Appointment'
 
WebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))
 
'Close the Browser'
 
WebUI.closeBrowser()

```

**Manual Mode**

![Handle Radio Button using Katalon Studio Manual Mode](../../images/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-Radio-Button.png)

The source code is available to be downloaded [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, refer to [\[WebUI\] Text](/display/KD/%5BWebUI%5D+Text) and [\[WebUI\] Checkbox](/display/KD/%5BWebUI%5D+Checkbox).

You can also refer to [Katalon Studio Tutorials](/katalon-studio/tutorials/) and [Katalon Forum](https://forum.katalon.com/) for more tutorials and discussions.