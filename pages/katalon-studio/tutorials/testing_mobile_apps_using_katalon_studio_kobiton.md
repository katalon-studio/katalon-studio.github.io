---
title: "Testing mobile apps using Katalon Studio and Kobiton’s cloud-based device farm"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/testing_mobile_apps_using_katalon_studio_kobiton.html
description: "In this tutorial, we will show you how to speed up your mobile apps testing project using Katalon Studio and Kobiton’s mobile devices on cloud."
redirect_from:
    - "/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton.html"
---
![Testing mobile apps using Katalon Studio and Kobiton's cloud-based device farm](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/QS_high-08-1024x509.png)

Scripting your first mobile automation test case can be quite confusing without a specialized tool or instruction. In this tutorial, we will show you how to speed up your automation project using Katalon Studio's mobile recording utility and run your recorded test cases on hundreds of Kobiton's mobile devices on the cloud. For this tutorial, we assume that you have already installed [Katalon Studio](https://www.katalon.com/), got familiar with its basic functions and registered a [Kobiton account](https://kobiton.com/).

Create mobile automation test cases using Katalon Studio's recording utility
----------------------------------------------------------------------------

Before starting, make sure that you have:

*   Downloaded the target app under test – [Material Login Demo](https://github.com/katalon-studio/Material-Login-App-Test/blob/master/App%20Files/MaterialLoginExample.apk). This app provides a set of simple authentication features that will be automated as demonstrated below.
*   [Configured your Katalon Studio instance for mobile testing.](/display/KD/Kobiton+Integration)

Katalon Studio provides two utilities to accelerate the automation process: Mobile Object Spy to quickly populate the project's object repository and Mobile Recorder to generate automation scripts from recorded actions. As this tutorial mainly focuses on the functionalities of the Recorder utility, for more details, please refer to the [Object Spy user guide](/display/KD/Spy+Object/) available from [Katalon Studio Documentation](/display/KD/Spy+Object/) on how to use this utility.

1\. Let's open the sample project (already included in Katalon Studio) and create a new test case. Click on the Mobile Recorder button to open its dialog as shown below

![sample project Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/1.png)

Where

| Section | Explanation |
| --- | --- |
| Device View | Device inspector view. Preview of device UI will be displayed here. Click on any elements to select. |
| Configurations | Select setting for recording session |
| All Objects | The current mobile elements hierarchy on the device. Click to select an element and view its properties in Object Properties. |
| Possible Actions | All available actions that can be performed on the device |
| Object Properties | All properties of the selected element in All Objects. |
| Recorded Actions | All recorded actions appear here |

2\. With the dialog opened, follow the following steps to configure your recording session:

*   Plug in your device or start your emulator then select it from the **_Device Name_** combo box.
*   Click **_Browse…_** to select the app file from your computer (.apk for Android, .ipa for iOS apps)
*   Click **_Start_** and wait for the app to launch on your device.

Once the configuration is completed, the app appears as shown in the screenshot above. (Note: starting the app is registered as the first recorded action.)

3\. With your app ready on your mobile device, start recording the test case.

*   Tap on **_"No account yet? Create one"_** to navigate to the **_Create Account_**
    Select the **_android.widget.TextView0_** object in the all objects tree. (Or you can tap the text on the Device view to focus on the object).
*   Then click the **_Tap_** button to record the action. This action simulates a tap on the app.

![Possible Action Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/2.png)

You will be directed to the **_Create Account_** screen.

*   Fill in the information to create an account.

Select **android.widget.EditText0** (or tap on the Name text box on the Device view to fill in name).
Then click **Set Text** to perform the set text action on the Name text.

Enter "name" for the text input as below. Click OK.

![Text input Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/3.png)

The text is set to the device, and the action is recorded in the Recorded actions table.

*   Perform the same steps with the **_Address_** field, and enter "address" for this field_._

![enter value Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/4.1-300x258.png)

*   To enter the value for the **_Email_** field, we will need to hide the on-screen keyboard to make the field visible by pressing the **_Hide Keyboard_** action button. Select the **_Email_** field to perform the set text action using "email@domain.com"**_._**
*   Follow the same steps for the **_Mobile Number_**, **_Password_** and **_Re-enter Password_** text fields.
*   Finally, click on **_Tap_** to tap on the **_Create Account._** You will be redirected to the main screen.
*   Click **Stop** on the Mobile Recorder dialog to stop the recording.

The recorded actions should look like the following:

![Recorded Action Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/5.png)

*   Click **_OK_** to complete the recording and then choose a folder to store your captured objects. Click **_OK_** again for Katalon Studio to generate test scripts.

4\. View your test case in the Manual mode or replay it to validate all recorded steps. Let's now add validation points for this test case to verify whether the recorded inputs can set to the text fields successfully.

*   Select the first **_Set Text _**from the **_Add_** toolbar or by clicking on **_Add_** from the context menu, add a Mobile Keyword step and choose the keyword **_Verify Element Attribute Value.![](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/new-test-case.png)_**
*   Select the test object representing the **_Name_** text field, which is **_widget.EditText0_**, as an object to verify.
*   Double click on the input cell for the test step and set the following values.

![Input Cell Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/6.png)

*   Perform the same procedure for other **_Set Text_** actions.

After adding the validation test steps, try to run the test case again. This time the execution takes longer for Katalon Studio to perform the validation steps, but your test case should pass successfully since the input value is identical to the validation value. You can test with different values or connect to a data source.

Run your mobile automation test case on Kobiton's cloud devices      
---------------------------------------------------------------------

1\. Upload the Material Login Demo app to Kobiton App Repository. From the Repository view, select the more actions button and select the **_Automation snippet._** Copy the app id (the one in bold, for example, **_Kobiton-store:184_** as shown below) and save it.

![Kobiton App Repository](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/7-300x196.png)2\. Navigate to the Kobiton Devices page. Choose the devices on which you want to run your test and mark those devices as a favorite by clicking on the star icon.
3\. Let's enable Kobiton integration.

*   Open Katalon Studio Preferences (**_Windows_** -\> **_Katalon Studio Preferences_**) then select **_Kobiton_**.

![Katalon Studio Preferences](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/8.png)

*   Enter your Kobiton username and password. Click **_Connect_** to test the connection and authentication. With a valid account, Katalon Studio automatically retrieves the API keys from Kobiton.
*   Click **_Apply_** or **_OK_** to save the settings.

4\. Open the test case created from the previous section, replace the input application path for the first step "**_Start Application"_** with the Kobiton app id saved in Step 1.

![](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/tests-explorer.png)

5\. A new menu option appears under the **_Execution_** toolbar as below. Click on **Kobiton Device** to open the Kobiton Favorite Device dialog.

![menu options Katalon Studio](../../images/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/9-200x300.png)

6. Select your target device for execution from the Kobiton Favorite Device list. Click OK to start execution with that device. It may take some time to initialize the connection to Kobiton prior to the execution. You should be able to login to Kobiton sessions to view the result once the test execution completed.

The combination of [Katalon Studio](https://www.katalon.com) and [Kobiton](https://kobiton.com) empowers automation engineers in validating the quality of mobile apps by allowing them to execute recorded test cases on hundreds of devices quickly. This solution does not only save them time but also maximizes test coverage. Katalon Studio is a FREE – a full-featured automation solution that can be downloaded at [www.katalon.com](https://www.katalon.com). Kobiton is a cloud-based mobile device farm that provides real devices for both manual and automation testing with an affordable price. You can register a [Kobiton account](https://kobiton.com) for free trial.

For more details, please visit Katalon Studio [Resources Center](https://katalon.com/resources-center/tutorials/).
