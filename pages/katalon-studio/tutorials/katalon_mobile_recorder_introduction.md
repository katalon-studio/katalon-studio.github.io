---
title: "An Introduction to Katalon Mobile Recorder"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon_mobile_recorder_introduction.html
description: "Katalon Studio Record Mobile feature allows users to record and run the same tests on multiple devices. This is an introduction to Katalon Mobile Recorder."
redirect_from:
    - "/katalon-studio/tutorials/katalon_mobile_recorder_introduction.html"
    - "/katalon-studio/tutorials/mobile-testing/index.html"
---
Test recording is the fastest way for users to automate applications. However, identifying objects on applications is time-consuming and tedious. Katalon Studio Record Mobile feature allows users to record and run the same tests on multiple devices with ease.

This tutorial shows you a step-by-step introduction to utilizing Katalon Mobile Recorder.

Recording your first test with Katalon Studio Mobile Recorder, an Example
-------------------------------------------------------------------------

Sending a message

1.  Launch the App under test (**ApiDemos.apk**)
2.  Tap on "OS" text
3.  Tap on "SMS Messaging" text
4.  Enter Recipient, Message Body and click on **Send**

Follow the steps below to familiarize yourself with Mobile Recorder feature from Katalon Studio.

*   Step 1: Launch Katalon Studio, go to **File > New Sample Project > Sample Mobile Testing** **Project** in order to utilize the sample project provided by the Katalon Team. You will notice that there are two sample test cases added for your reference. However, this tutorial will guide you through creating your own test case. Click on the **New Test Case** button on the main toolbar. Provide a **name** for your test case and click **OK**. An empty test case will be created.

*   Step 2: Click on **Record Mobile** from the main toolbar.

![Katalon Studio Mobile Recorder](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Katalon-Mobile-Recorder.png)

The **Record** dialog will be displayed.

*   Step 3: Select device under **Device Type** (if you wish to utilize Kobition integration or other emulators, select it [here](/display/KD/Mobile+Testing+with+Kobiton+Devices)). Browse your **Application File** and proceed.
*   Step 4: Click on the **Start** button to begin recording your test case. Wait until your app is launched.

![Mobile recorder in Katalon Studio](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-4.png)

*   Step 5: Click on the **"OS"** button on your application. Katalon Mobile Recorder will find the object among the **All Objects** list and highlight your selection in green.

![Katalon Mobile Recorder introduction](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-5.png)

*   Step 6: Once the object is selected, the actions in Record dialog box will be enabled. Click on **"Tap"** action.

![Katalon Mobile Recorder introduction](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-6.png)

*   Step 7: Once **Tap** action was performed, emulator will be rendered with elements which are visible, you will see a progress information dialog. You will see the **Tap** in the list of **Recorded Actions**.

![Katalon Mobile Recorder introduction](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-7.png)

*   Step 8: To continue, click on **"SMS Messaging"** button on the new app interface. Similarly, click on "**Tap**" action to add it in Recorded Actions.
*   Step 9: Select the "**Recipient**" object in the actions in Record Dialog box or Mobile Screen. Click on "**Set Text**" action in a new popup where user needs to enter the input ("katalon") and click on **OK**.

![Katalon Mobile Recorder introduction](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-9.png)

![Text input in Katalon Mobile Recorder](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Set-Text-in-Mobile-Recorder-in-Katalon-Studio.png)

**Set Text** action will be added in **Recorded Actions.**

![Katalon Mobile Recorder introduction](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-101.png)

*   Step 10: Select the **"Message Body"** object in the actions in Record Dialog box or Mobile Screen. Click on "**Set Text**" action to input "Mobile Automation" as text. **Set Text** action will be added in **Recorded Actions**.

Warning: The Katalon Sample App will not allow you to send the message through the Send button. Thus, our example ends here.

*   Step 11: After finishing with your desired list of actions, you can stop the recording by clicking on **Stop** button at the top or **OK** button at the bottom.

![](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Mobile-Recorder-in-Katalon-Studio-11.png)

*   Step 12: A dialog box will be displayed for storing recorded objects into the object repository.
*   Step 13: If you want to add a new folder, click on **New Folder.** A popup dialog will be displayed, enter the name of the folder and proceed.
*   Step 14: Select your newly created test case among the **Test Explorers** drop down. Recorded objects and actions are saved in the test case as shown below.

![Test Explorers in Katalon Mobile Recorder](../../images/katalon-studio/tutorials/katalon_mobile_recorder_introduction/Recording-your-first-test-with-Katalon-Studio-Mobile-Recorder-151.png)

*   Step 15: You can run this test case by clicking on the **Run** button. Because the default browser is Firefox, click on the dropdown to see other selections and choose your desired device. Katalon Studio will execute the recorded steps accordingly.

For your reference, Katalon Studio generates a test script for the recorded actions, you can view it by switching to **Script mode**.

Script mode
-----------

```groovy
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
 
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
 
 
 
'Start the Application'
 
Mobile.startApplication('.\\Data Files\\ApiDemos.apk', true)
 
 
 
'Tap on text \"OS\"'
 
Mobile.tap(findTestObject('Record Mobile Test Case/android.widget.TextView8 - OS'), 60)
 
 
 
'Tap on text \"SMS Messaging\"'
 
Mobile.tap(findTestObject('Record Mobile Test Case/android.widget.TextView4 - SMS Messaging'), 60)
 
 
 
'Enter text as \"Katalo\" in Recipient text box'
 
Mobile.setText(findTestObject('Record Mobile Test Case/android.widget.EditText0'), 'katalon', 60)
 
 
 
'Enter text as \"Mobile Automation\" in Message Body text box'
 
Mobile.setText(findTestObject('Record Mobile Test Case/android.widget.EditText1'), 'Mobile Automation', 60)
 
 
 
'Tap on Send Button'
 
Mobile.tap(findTestObject('Record Mobile Test Case/android.widget.Button0 - Send'), 60)
 
 
 
'Close the Application'
 
Mobile.closeApplication()

```

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Recording Mobile Test](/x/RwnR) guideline and join us on [Katalon Forum](http://forum.katalon.com/).