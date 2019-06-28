---
title: "Performing Pinch to Zoom In Action"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/pinch_zoom_action_mobile_app.html
redirect_from:
    - "katalon-studio/tutorials/pinch_zoom_action_mobile_app.html"
description: "This tutorial is to test the pinch zoom action in the mobile app with sample project using Android O.S."
---
This tutorial is to test the **Pinch To Zoom In** action in the mobile app. The app used for this demonstration can be downloaded here. We will be using Android O.S for this tutorial, so please make sure that your Android device **API** is **greater** than **18**.

Scenario
--------

In the screenshot below, we want to zoom into "Hello World" and verify the zoom-in action.

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test.png)

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input** it will open a window, where for appFile select **Value Type** as **Variable** and in **Value**, pass the variable name as **path** and click **OK.**

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test-1.png)

*   Step 2: Add a **Wait For Element Present** item for API Demos to show up.
*   Step 3: Call **Scroll To Text** from mobile keyword, pass **Views** as Input. **Scroll To Text** accepts String type parameter (Text of the element to scroll to)

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test-3.png)

*   Step 4: Call **Tap** method and pass the object of **Views.**
*   Step 5: Select **Scroll To Text** keyword and pass the **Tabs** text.

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test-10.png)

*   Step 6: Call **Tap** method and pass the object of **WebView**
*   Step 7: Add **wait commands** to wait for '**Hello world**' link to be visible.
*   Step 8: Call '**Get Element Height**' method and capture the of "**Hello World**" height to store it in a variable named '**ele_Height**'.
*   Step 9: Call '**Get Element Width**' method and capture the of "**Hello World**" element **width** to store it in '**ele_Width**'.   
*   Step 10: Add '**Pinch To Zoom In At Position**' method from mobile keyword list and pass the following values in: **ele_Height**, **ele_Width**, **Offset** value.

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test-11.png)

*   Step 11: After zooming in, we need to **verify** that element has been zoomed. Thus, we need to re-capture the element Height and Width.
*   Step 12: After zooming the element height and width **should be greater** than the existing height and width in the test. By using '**Verify Greater Than**' method, we can validate the element height and width.

![Performing Pinch to Zoom In in automation test](../../images/katalon-studio/tutorials/pinch_zoom_action_mobile_app/Performing-Pinch-to-Zoom-In-in-automation-test-12.png)

As you can see from the step-by-step guide above, there are repeated steps that will be easier to create in **Script Mode**. Thus, we suggest the users to utilize this feature where one can quickly automate the test scenario and easily manage test scripts.

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
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Zoom_IN/heading_API_Demos'), 45)
 
'Checking the Element "Heading API Demos" is in Visible '
 
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Zoom_IN/heading_API_Demos'), 30)
 
'Scroll to Views text'
 
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
'Tap on Views'
 
Mobile.tap(findTestObject('API Demos Objects/Zoom_IN/text_Views'), 20)
 
'Scroll to WebView text'
 
Mobile.scrollToText('WebView', FailureHandling.STOP_ON_FAILURE)
 
'Checking the Element "WebView" is in Visible '
 
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Zoom_IN/text_WebView'), 30)
 
'Tap on WebView'
 
Mobile.tap(findTestObject('API Demos Objects/Zoom_IN/text_WebView'), 30)
 
'Wait for Element Present "Hello World"'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Checking the Element "Hello World" is in Visible '
 
Mobile.verifyElementVisible(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Get Element Height of "Hello World" Element'
 
ele_Height = Mobile.getElementHeight(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Get Element Width of "Hello World" Element'
 
ele_Width = Mobile.getElementWidth(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Pinch to Zoom In on "Hello World" Element up to 200 Offset'
 
Mobile.pinchToZoomInAtPosition(ele_Height, ele_Width, 200)
 
'Get Element Height of  Zoom In "Hello World" Element'
 
zoom_ele_Height = Mobile.getElementHeight(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Get Element Width of Zoom In "Hello World" Element'
 
zoom_ele_Width = Mobile.getElementWidth(findTestObject('API Demos Objects/Zoom_IN/link_Hello World'), 30)
 
'Verify the Element Height of Zoom In greater than normal Element height'
 
Mobile.verifyGreaterThan(zoom_ele_Height, ele_Height)
 
'Verify the Element Width of Zoom In greater than normal Element Width'
 
Mobile.verifyGreaterThan(zoom_ele_Width, ele_Width)
 
'Close the Application.'
 
Mobile.closeApplication()

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Pinch To Zoom In At Position](/display/KD/%5BMobile%5D+Pinch+To+Zoom+In+At+Position) guide and join us on [Katalon Forum](http://forum.katalon.com/).