---
title: "Handling Vertical Swipe in Mobile Automation"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/vertical_swipe_in_mobile_automation.html
redirect_from:
    - "katalon-studio/tutorials/vertical_swipe_in_mobile_automation.html"
description: "This tutorial illustrates Vertical Swiping from Top to Bottom action in mobile automation using Katalon Studio."
---
Swipe Vertically from Top to Bottom
-----------------------------------

This tutorial illustrates **Vertical** **Swiping from Top to Bottom** action in the mobile app.This demonstration uses **API Demos,** which you can download from [here](https://github.com/katalon-studio/katalon-mobile-automation/blob/master/Data%20Files/ApiDemos.apk). We will be using **Android O.S** for this tutorial, please make sure that your Android device **API** is greater than **18**.

### Scenario

The screenshot of the app below has a listview containing 'n' number of rows. Our goal is to swipe vertically from top to bottom of the screen.

![Vertical Swipe in Mobile Automation](../../images/katalon-studio/tutorials/vertical_swipe_in_mobile_automation/Vertical-swipe-in-Mobile-automation.png)

### Manual Mode

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input**, a new window will open. In **appFile**, select **Value Type** as **Variable**. In value, pass the variable name as **path**.

![Vertical Swipe in Mobile Automation](../../images/katalon-studio/tutorials/vertical_swipe_in_mobile_automation/Vertical-swipe-in-Mobile-automation-1.png)

*   Step 2: Add a **Wait For Element Present** item.
*   Step 3: Call **Scroll To Text** from mobile keyword and pass input as '**Views'**. **Scroll To Text** accepts String type parameter (Text of the element to scroll to)

![Vertical Swipe in Mobile Automation](../../images/katalon-studio/tutorials/vertical_swipe_in_mobile_automation/Vertical-swipe-in-Mobile-automation-3.png)

*   Step 4: Tap on **Views**.
*   Step 5: Use **Get Device Height** keyword to capture the height of the device and store it in a **device_height** variable. Select **Get Device Width** keyword to capture the width of the device and storing it in a **device_Width** variable.
*   Step 6: Add a **binary statement**, and in the 'startX' value, store the device width divided by 2. In this illustration, the X-coordinates will stay constant.
*   Step 7: Add a **binary statement**, assign 'endX' value to startX'.
*   Step 8: Add a **binary statement**, in which the 'startY' variable is the device height multiplied by 0.30.
*   Step 9: Add a **binary statement**, in which the 'endY' variable is the device height multiplied by 0.70.
*   Step 10: Call the **swipe method** and select the **Value Type** as '**Variable**'. Pass the startX, startY, endX, endY values to that method.

![Vertical Swipe in Mobile Automation](../../images/katalon-studio/tutorials/vertical_swipe_in_mobile_automation/Vertical-swipe-in-Mobile-automation-10.png)

The same thing can be achieved from the Script mode (switch to Script Mode by clicking on Script tab).

**Script Mode:**

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.model.FailureHandling as FailureHandling
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/ApiDemos.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'wait for element Present'
 
Mobile.waitForElementPresent(findTestObject('API Demos Objects/heading_API_Demos'), 45)
 
 
 
'\'Scroll to Text Views\''
 
Mobile.scrollToText('Views', FailureHandling.STOP_ON_FAILURE)
 
 
 
'\'Tap on Views\''
 
Mobile.tap(findTestObject('API Demos Objects/text_Views'), 20)
 
 
 
'Get Device Height and Store in device_height variable'
 
device_Height = Mobile.getDeviceHeight()
 
 
 
'Get Width Height and Store in device_Width variable'
 
device_Width = Mobile.getDeviceWidth()
 
 
 
'Storing the startX value by dividing device width by 2. Because x coordinates are constant for Vertical Swiping'
 
int startX = device_Width / 2
 
 
 
'Here startX and endX values are equal for vertical Swiping for that assigning startX value to endX'
 
int endX = startX
 
 
 
'Storing the startY value'
 
int startY = device_Height * 0.30
 
 
 
'Storing the endY value'
 
int endY = device_Height * 0.70
 
 
 
'Swipe Vertical from top to bottom'
 
Mobile.swipe(startX, endY, endX, startY)
 
 
 
'Swipe Vertical from bottom to top'
 
Mobile.swipe(startX, startY, endX, endY)

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Mobile Swipe](/display/KD/%5BMobile%5D+Swipe) guideline and join us on [Katalon Forum](http://forum.katalon.com/).