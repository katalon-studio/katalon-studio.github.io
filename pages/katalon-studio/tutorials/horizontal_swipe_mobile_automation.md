---
title: "Handling Horizontal Swipe in Mobile Automation"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/horizontal_swipe_mobile_automation.html
redirect_from:
    - "katalon-studio/tutorials/horizontal_swipe_mobile_automation.html"
description: "This tutorial illustrates Horizontal Swiping actions (swipe horizontally from left to right) in the mobile app with a sample project."
---
Swipe Horizontally from Left to Right
-------------------------------------

This tutorial illustrates Horizontal Swiping actions in the mobile app. This demonstration uses SwipeListView Demo, which you can download it [here](https://apkpure.com/swipelistview-demo/com.fortysevendeg.android.swipelistview). We will be using Android O.S for this tutorial, so please make sure that your Android device API is greater than 18.

### Scenario

The screenshot of the app contains a list of applications which are installed in the mobile device. We want to swipe horizontally from left to right on any application from this list.

![Handling Horizontal Swipe in Mobile Automation](../../images/katalon-studio/tutorials/horizontal_swipe_mobile_automation/Handling-Horizontal-Swipe-in-Mobile-Automation.png)

### Manual Mode

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input**, a new window will appear. In **appFile**_,_ select Value Type as **Variable**. In **Value**, pass the variable name as **path**.

**![Handling Horizontal Swipe in Mobile Automation](../../images/katalon-studio/tutorials/horizontal_swipe_mobile_automation/Handling-Horizontal-Swipe-in-Mobile-Automation-1.png)**

*   Step 2: After launching the application, call a **Wait For Element Present** method. Capture the status of an Alert presence in a variable '**alert_Status**'. It returns true when an alert is present and false when alert is not present.
*   Step 3: Adding an If statement, if '**alert_Status**' is true, tap on "Don't show this message again" and tap OK**.**

![Handling Horizontal Swipe in Mobile Automation](../../images/katalon-studio/tutorials/horizontal_swipe_mobile_automation/Handling-Horizontal-Swipe-in-Mobile-Automation-3.png)

*   Step 4: Add another **Wait For Element Present** item to verify whether the mobile element pops up.
*   Step 5: Use **Get Device Height** keyword to capture the height of the device and store it in a **device_height** variable. Select **Get Device Width** keyword to capture the width of the device and storing it in a **device_Width** variable.
*   Step 6: Add a **binary statement** with the 'startY' divided by 2. Here, the y-coordinates are constant.
*   Step 7: Add **binary statement**, here 'endY' and 'startY' values are the same for horizontal swiping, so re-assign 'startY' value to 'endY'.
*   Step 8: Add **binary statement** and multiply device width with 0.30 to store it in 'startX' variable.
*   Step 9: Add **binary statement** and multiply device width with 0.70 to store it in 'endX' variable.
*   Step 10: Call the **swipe method** and select the **Value Type** as '**Variable**'. Pass the startX, startY, endX, endY values to that method

![Handling Horizontal Swipe in Mobile Automation](../../images/katalon-studio/tutorials/horizontal_swipe_mobile_automation/Handling-Horizontal-Swipe-in-Mobile-Automation-10.png)

The step-by-step guide above can be achieved through **Script mode** (switch to Script Mode by clicking on Script tab).

_**Note:** Swiping horizontally from right to left can also be implemented similarly._

### Script Mode

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
 
 
'Path of the Swipe List View Demo APK File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/SwipeListView Demo.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for Element Present of checkbox Don't Show this message again.\\r\\nif element present return true otherwise false.'
 
alert_Status = Mobile.waitForElementPresent(findTestObject('Swipe ListView Demos/checkbox_Dont show this message again'),
 
20)
 
 
 
'checking the if statement based on element present of alert check box'
 
if (alert_Status == true) {
 
'Tap on check box'
 
Mobile.tap(findTestObject('Swipe ListView Demos/checkbox_Dont show this message again'), 30)
 
 
 
'Tap on Ok'
 
Mobile.tap(findTestObject('Swipe ListView Demos/button_Ok'), 30)
 
}
 
 
 
'Wait for element Present of Heading API Demos'
 
Mobile.waitForElementPresent(findTestObject('Swipe ListView Demos/header_text SwipeListView Demo'), 45)
 
 
 
'Get Device Height and Store in device_height variable'
 
device_Height = Mobile.getDeviceHeight()
 
 
 
'Get Device Width and Store in device_Width variable'
 
device_Width = Mobile.getDeviceWidth()
 
 
 
'Storing the startX,endX values by dividing device height by 2 Because Y coordinates are constant'
 
int startY = device_Height / 2
 
 
 
'Here endY and startY values are equal for vertical Swiping for that assigning startY value to endY'
 
int endY = startY
 
 
'Storing the startX value'
 
int startX = device_Width * 0.30
 
 
 
'Storing the endX value'
 
int endX = device_Width * 0.70
 
 
 
'Here Y constant for Swipe Vertical Left to Right'
 
Mobile.swipe(startX, startY, endX, endY)

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Mobile Swipe](/display/KD/%5BMobile%5D+Swipe) guideline and join us on [Katalon Forum](http://forum.katalon.com/).