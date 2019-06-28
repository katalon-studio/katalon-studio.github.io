---
title: "Handling Scroll to Element in Mobile Automation"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/scroll_element_mobile_automation.html
redirect_from:
    - "katalon-studio/tutorials/scroll_element_mobile_automation.html"
description: "This tutorial illustrates the Scroll Element which contains the given text in the mobile automation via a sample project in Katalon Studio."
---
Scroll To Text
--------------

This tutorial illustrates **Scroll to text** behavior in the mobile app. The demonstration uses API demos, which you can download from [here](https://github.com/katalon-studio/katalon-mobile-automation/blob/master/Data%20Files/ApiDemos.apk). The application apk file also comes with the sample project packaged with your product installation. We will be using Android O.S for this tutorial, so make sure that your Android device API is greater than 18.

### Scenario

The screenshot of the app below has a listview containing 'n' number of rows. Our goal is to scroll down to the text '**Views**', and to tap on it. When the user taps on **Views,** the app navigates to another screen.

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation.png)

We can easily automate this scenario in two ways: manual and script modes.

### Manual Mode

*   Step 1: Click on **Add** and select **Binary Statement**.

![Handling Scroll to Element in Mobile Automation ](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-1.png)

*   Step 2: Go to **Input** field. Select value type as **Variable** in _Left Expression_ and name the variable as '**path'**. This name will show up in Value.

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-2.png)

*   Step 3**:** Select **Value Type** as **Binary** in _Right Expression_. Next, click on the **Value** field. In the new window, enter Left and Right Expressions.
*   Step 4**:** Select value type as **Method call** in _Left Expression_. Click on the **Input** field, a window will pop up where user can select an Object Type as **Class,** Object as **RunConfiguration,** method as **getProjectDir()** to continue.

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-3.png)

*   Step 5: In _Right Expression_, select **String** as _Value Type_ and pass the path of the **"/folder name/apk file name with extension"**.

For example, if the apk file is stored in Data Filesfolder in File Explorer, the passed path is "**/Data Files/ApiDemos.apk"**

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-5.png)

*   Step 6**:** Select **Start Application** from mobile keyword andclick on **Input**. A new window will appear. In **appFile**, select 'Value Type' as **Variable**. In **Value**, pass the variable name as **path**.

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-6.png)

*   Step 7: Add **Wait For Element Present** item.
*   Step 8: Call **Scroll To Text** from mobile keyword to pass Input as **Views**. **Scroll To Text** accepts String type parameter (Text of the element to scroll to)

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-8.png)

*   Step 9: Call **Tap** method and pass the object of **Views** from Object Repository
*   Step 10: Select **Scroll To Tex**t method and pass input as '**Tabs'**

![Handling Scroll to Element in Mobile Automation](../../images/katalon-studio/tutorials/scroll_element_mobile_automation/Handling-Scroll-to-Element-in-Mobile-Automation-10.png)

The step-by-step guide above can be achieved through **Script mode** (switch to Script Mode by clicking on Script tab).

### Script Mode

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
Mobile.waitForElementPresent(findTestObject('API Demos Objects/heading_API_Demos'), 45)
 
'Scroll to Views text'
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
'Tap on Views'
Mobile.tap(findTestObject('API Demos Objects/text_Views'), 20)
 
'Scroll to Tabs text'
Mobile.scrollToText('Tabs', FailureHandling.STOP_ON_FAILURE)

```

**Note:** Steps 1 to 6 in Manual mode can be optimized by adding a single line in script mode; i.e.,

```groovy
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Scroll to Text](/display/KD/%5BMobile%5D+Scroll+To+Text) guideline and join us on [Katalon Forum](http://forum.katalon.com/).