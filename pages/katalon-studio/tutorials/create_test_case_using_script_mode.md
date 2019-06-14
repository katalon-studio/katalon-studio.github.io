---
title: "Editing test cases using script mode"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_test_case_using_script_mode.html
description: "In addition to the Manual view, Katalon Studio allows expert users to programmatically write automation test in the Script mode of test cases."
---
In addition to the **[Manual view](/x/9YEw)**, Katalon Studio allows expert users to programmatically write automation test in the Script view of test cases. Users with Groovy/Java background can easily edit test scripts in this view.

This tutorial walks you through the steps needed to manually write a very basic automation test script using Katalon Studio. After going through this article, you will be able to understand and be able to use _import_ statements and **[built-in keywords](/x/VQAM)** to compose test scripts. It's recommended that you should have some basic scripting background, preferably using **[Groovy](http://groovy-lang.org/)**, to efficiently use the scripting capability.

Given a sample test case with the following steps:

*   _Open the browser_
*   _Navigate to a website_
*   _Click on certain control_
*   _Validate if a control exists on the page_
*   _Close the browser_

Follow these steps to automate the above test scenario in **Script view**:

1\. Select **File > New > Test Case** from the main menu to create a test case. Provide the name for the new test case, then click **OK**.

![new test case Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/1.-Katalon-new-test-case1.png)

2. Once a new test case is created, you switch to the **Script view.** Test steps specified in the Manual view are automatically translated to Groovy script in the **Script view**.

![Script mode Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/2.-Katalon-script-view.png)

The import statement in a test script allows referencing to classes to be used. Expand the 'import' section to see all default imported classes by Katalon Studio. The name after 'as' in each import statement is an alias for the class. You can change the alias for each class. These classes are necessary for composing a test script.

Katalon Studio is an automation tool that supports keyword-driven testing. All keywords are grouped into **[WebUI](http://docs.katalon.com/display/KD/Web+UI)**, **[Mobile](http://docs.katalon.com/display/KD/Mobile)** and **[WebService](http://docs.katalon.com/display/KD/Web+Service)** packages accordingly. Press 'Ctrl + Space' to view these packages and functions from the imported classes.

3. In this scenario, you will create a Web application test script, so you can make use of the **[Web UI](/x/VQAM) [built-in keywords](/x/VQAM)**. To use a built-in **WebUI** keyword, enter the following syntax into the editor.

```groovy
WebUI.

```

4. After entering the dot character (.), all built-in keywords and their description for WebUI testing appear as below:

![Content Assist Dialog Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/4.-Content-Assist.png)

5. Select the **[**Open Browser**](/display/KD/%5BWebUI%5D+Open+Browser)** keyword. This keyword opens a browser and navigates to the specified URL if provided. The detail for a selected keyword is shown in a popup screen.

![Open Browser Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/5.-Katalon-Open-Browser.png)

6\. Enter the [**Navigate To Url**](/display/KD/%5BWebUI%5D+Navigate+to+Url) keyword. This keyword navigates to a specified URL. For now, enter the URL of Katalon Studio ([katalon.com](https://www.katalon.com/)) as the value for the parameter.

![Navigate URL keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/6.-Katalon-Nagivate-to-url.png)

7\. Enter the **[Click](/display/KD/%5BWebUI%5D+Click)**. This keyword represents the click action on a given object. You need to specify an object for this action.

![Click keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/7.-Katalon-Click-keyword.png)

8\. Use the following syntax to refer to an object in **Object Repository** (alternatively, you can drag and drop the object to test case editor to generate the syntax):

```groovy
findTestObject('{Object ID}')

```

Where **Object ID** is the ID of that object in Katalon Studio.

9. You can find object's ID from its Properties dialog. For example:

![Object ID Properties](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/9.-Katalon-Test-Object.png)

10\. Enter the **[Verify Element Present](/display/KD/%5BWebUI%5D+Verify+Element+Present)**keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.

![Verify element present](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/10.-Katalon-Verify-Element.png)

11\. Add the [**Close Browser**](/display/KD/%5BWebUI%5D+Close+Browser) keyword and save your test case.

![Close Browser keyword](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/11.-Katalon-Close-browser.png)

12\. The following API docs are useful when working with scripts:

| Class | DescriptionDescription |
| --- | --- |
| **[Builtin Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/keyword/BuiltinKeywords.html)** | List of common built-in keywords |
| **[WebUI Builtin Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/keyword/WebUiBuiltInKeywords.html)** | List of Web UI built-in keywords |
| **[Web Service Builtin Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webservice/keyword/WSBuiltInKeywords.html)** | List of Web Service built-in keywords |
| **[Mobile Builtin Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/mobile/keyword/MobileBuiltInKeywords.html)** | List of Mobile built-in keywords |

13. Congratulations! You have finished your first automation script in Groovy language. Click on **Run** in the main toolbar to execute the test case.

![Run Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/13.-Katalon-Run.png)

Katalon Studio should be able to execute the script of the test case. Test execution results are shown in Log Viewer as below:

![Test execution Dialog](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/13b-Katalon-Log-viewer.png)
