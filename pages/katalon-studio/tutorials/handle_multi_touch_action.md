---
title: "How to Perform Multi-touch Actions in Mobile App"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle_multi_touch_action.html
redirect_from:
    - "katalon-studio/tutorials/handle_multi_touch_action.html"
description: "Multi-Touch action appears often in gaming applications. We will use MultiTouch Tester app to demonstrate automation testing on this common behavior."
---
Multi-touch action appears often in gaming applications. We will use **MultiTouch Tester** app to demonstrate automation testing on this common behavior. Please download the app from [here](https://play.google.com/store/apps/details?id=com.the511plus.MultiTouchTester) or the direct apk file [here](https://www.appsapk.com/multitouch-tester/).

Scenario
--------

Perform multi-touch at 4 different points at the same time on **MultiTouch Tester** display.

**![Handling Multi-touch Action in automation testing](../../images/katalon-studio/tutorials/handle_multi_touch_action/Handling-Multi-touch-Action.png)**

Manual Mode
-----------

*   Step 1**:** Select **Start Application** from mobile keyword and click on **Input.** A new dialogue will appear. In appFile select **Value Type** as **Variable** and in **Value** passing the variable name as **path**.

![Handling Multi-touch Action in automation testing](../../images/katalon-studio/tutorials/handle_multi_touch_action/Handling-Multi-touch-Action-1.png)

*   Step 2: Add **Wait For Element Present** item.
*   Step 3: Initializing Katalon Mobile Driver to Appium Driver
*   Step 4: Call '**Get Device Height**' method and capture the **height** and store it in a variable '**device_Height**'.
*   Step 5: Call '**Get Device Width**' method and capture the **width** and store it in a variable '**device_Width**'.
*   Step 6: Add **binary statement** and get X, Y Coordinates for touch action 1 (**top left** side).
*   Step 7: Repeat step 6 for touch action 2 (**top right** side), touch action 3 (**bottom left** side), and touch action 4 (**bottom right** side).
*   Step 8: Create an object of **MultiTouchAction** class.
*   Step 9: Set all four touch actions on given X, Y Coordinates of the screen.
*   Step 10: Add a **method call** statement and press** first action** with X, Y coordinates and **wait for 5 seconds** then release. Repeat for the three other actions.
*   Step 11: The final step is to add a **method call** statement and **generate** multi-touch action chain.

![Handling Multi-touch Action in automation testing](../../images/katalon-studio/tutorials/handle_multi_touch_action/Handling-Multi-touch-Action-2.png)

As you can see from the step-by-step guide above, there are repeated steps that will be easier to create in **Script Mode**. Thus, we suggest the users utilize this feature where one can quickly automate the test scenario and easily manage test scripts.

Script Mode
-----------

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory as MobileDriverFactory
 
import io.appium.java_client.AppiumDriver as AppiumDriver
 
import io.appium.java_client.MultiTouchAction as MultiTouchAction
 
import io.appium.java_client.TouchAction as TouchAction
 
 
 
'Path of the Apk File Store in path variable'
 
def path = RunConfiguration.getProjectDir() + '/Data Files/MultiTouchTester.apk'
 
 
 
'Start the application'
 
Mobile.startApplication(path, false)
 
 
 
'Wait for Element Visible "Touch Me"'
 
Mobile.waitForElementPresent(findTestObject('MultiTouchTester/text_Touch Me'), 30)
 
 
 
'Verify Element Visible "Touch Me"'
 
Mobile.verifyElementVisible(findTestObject('MultiTouchTester/text_Touch Me'), 30)
 
 
 
'Initializing Katalon Mobile Driver to Appium Driver'
 
AppiumDriver<?> driver = MobileDriverFactory.getDriver()
 
 
 
'Get Device Height and store  to "device_Height" variable'
 
device_Height = Mobile.getDeviceHeight()
 
 
 
'Get Device Width and store to "device_Width" variable'
 
device_Width = Mobile.getDeviceWidth()
 
 
 
'Get X1 coordinate of touch point 1 (Top Left Side)'
 
int X1 = device_Width * 0.20
 
 
 
'Get Y1 coordinate of touch action 1 (Top Left Side)'
 
int Y1 = device_Height * 0.20
 
 
 
'Get X2 coordinate of touch point 2 (Top Right Side)'
 
int X2 = device_Width * 0.80
 
 
 
'Get Y2 coordinate of touch point 2 (Top Right Side)'
 
int Y2 = device_Height * 0.20
 
 
 
'Get X3 coordinate of touch point 3 (Bottom Left Side)'
 
int X3 = device_Width * 0.20
 
 
 
'Get Y3 coordinate of touch point 3 (Bottom Left Side)'
 
int Y3 = device_Height * 0.80
 
 
 
'Get X4 coordinate of touch point 4 (Bottom Right Side)'
 
int X4 = device_Width * 0.80
 
 
 
'Get Y4 coordinate of touch point 4 (Bottom Right Side)'
 
int Y4 = device_Height * 0.80
 
 
 
'Create object to "MultiTouchAction" class '
 
MultiTouchAction multiTouch = new MultiTouchAction(driver)
 
 
 
'Create First action Object to "TouchAction" class'
 
TouchAction action1 = new TouchAction(driver)
 
 
 
'Create Second action Object to "TouchAction" class'
 
TouchAction action2 = new TouchAction(driver)
 
 
 
'Create Third action Object to "TouchAction" class'
 
TouchAction action3 = new TouchAction(driver)
 
 
 
'Create Fourth action Object to "TouchAction" class'
 
TouchAction action4 = new TouchAction(driver)
 
 
 
'Press First action with x y coordinates wait 5 Seconds then release'
 
action1.press(X1, Y1).waitAction(5000).release()
 
 
 
'Press Second action with x y coordinates wait 5 Seconds then release'
 
action2.press(X2, Y2).waitAction(5000).release()
 
 
 
'Press Third action with x y coordinates wait 5 Seconds then release'
 
action3.press(X3, Y3).waitAction(5000).release()
 
 
 
'Press Fourth action with x y coordinates wait 5 Seconds then release'
 
action4.press(X4, Y4).waitAction(5000).release()
 
 
 
'Multi Touch Object to add Multiple touch actions as per you need'
 
multiTouch.add(action1).add(action2).add(action3).add(action4).perform()

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/).