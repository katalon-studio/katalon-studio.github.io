---
title: "Create test case using Script Mode"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_test_case_using_script_mode.html
description: "In addition to the Manual view, Katalon Studio allows expert users to programmatically write automation test in the Script mode of test cases."
---
Besides the **[Manual view](/x/9YEw)**, you can write tests in the Script view of test cases. Users with a Groovy or Java background can easily edit test scripts in this view.

This tutorial will show you how to manually write a basic automation test script. You will be able to understand and import statements and **[built-in keywords](https://docs.katalon.com/katalon-studio/docs/webui-accept-alert.html#description)** to compose test scripts. It's recommended that you have some basic scripting background, preferably with **[Groovy](http://groovy-lang.org/)**, to efficiently use this scripting capability.

Given a sample test case with the following steps:

*   Open a browser
*   Navigate to a website
*   Click on certain control
*   Validate if a control exists on the page
*   Close the browser

Follow these steps to automate the above test scenario in Script view:

1. Select **File > New > Test Case** from the main menu. Provide the name for the new test case. Click **OK**.


![new test case Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/1.-Katalon-new-test-case1.png)


2. Once a new test case is created, switch to **Script** view in the bottom tab. The test steps specified in the **Manual** view will be automatically translated to Groovy script.


![Script mode Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/2.-Katalon-script-view.png)


The imported statements in a test script allow referencing to classes being used. Expand the **import** section to see all the default imported classes. The name after _as_ in each import statement is an alias for the class. You can change the alias for each class. These classes are necessary for composing test scripts.

Katalon Studio also supports keyword-driven testing. All keywords are grouped into **[WebUI](https://docs.katalon.com/katalon-studio/docs/webui-accept-alert.html#description)**, **[mobile](https://docs.katalon.com/katalon-studio/docs/mobile-close-application.html)** and **[Web Service](https://docs.katalon.com/katalon-studio/docs/ws-send-request.html)** packages accordingly. Press _Ctrl + Space_ to view these packages and functions from the imported classes.

3. In this scenario, you will create a Web application test script, so you can make use of the Web UI built-in keywords. Enter the following syntax into the editor.

```groovy
WebUI.

```


4. After entering the dot character (.), all built-in keywords and their description for Web UI testing will appear as below:


![Content Assist Dialog Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/4.-Content-Assist.png)


5. Select the **[**Open Browser**](/display/KD/%5BWebUI%5D+Open+Browser)** keyword. This keyword opens a browser and navigates to the specified URL if it is provided. The details for the selected keyword will be shown in a popup screen.


![Open Browser Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/5.-Katalon-Open-Browser.png)


6. Enter the [**Navigate To URL**](/display/KD/%5BWebUI%5D+Navigate+to+Url) keyword. This keyword navigates to a specified URL. For now, enter the URL of Katalon Studio ([katalon.com](https://www.katalon.com/)) as the value of the parameter.


![Navigate URL keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/6.-Katalon-Nagivate-to-url.png)


7. Enter **[Click](/display/KD/%5BWebUI%5D+Click)**. This keyword represents the click action on a given object. You need to specify an object for this action.


![Click keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/7.-Katalon-Click-keyword.png)


8. Use the following syntax to refer to an object in **Object Repository** (alternatively, you can drag and drop the object to test case editor to generate the syntax):


```groovy
findTestObject('{Object ID}')

```

**Object ID** refers to the ID of that object in Katalon Studio.


9. You can find the object ID from its **Properties** dialog. For example:


![Object ID Properties](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/9.-Katalon-Test-Object.png)


10. Enter the **[Verify Element Present](/display/KD/%5BWebUI%5D+Verify+Element+Present)** keyword. This keyword validates whether a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.


![Verify element present](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/10.-Katalon-Verify-Element.png)


11. Add the [**Close Browser**](/display/KD/%5BWebUI%5D+Close+Browser) keyword and save your test case.


![Close Browser keyword](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/11.-Katalon-Close-browser.png)


12. You may find these API docs useful while working with scripts:


| Class | DescriptionDescription |
| --- | --- |
| **[Built-in Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/keyword/BuiltinKeywords.html)** | List of common built-in keywords |
| **[Web UI Built-in Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/keyword/WebUiBuiltInKeywords.html)** | List of Web UI built-in keywords |
| **[Web Service Built-in Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webservice/keyword/WSBuiltInKeywords.html)** | List of Web Service built-in keywords |
| **[Mobile Built-in Keywords](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/mobile/keyword/MobileBuiltInKeywords.html)** | List of Mobile built-in keywords |


13. Congratulations! You have finished your first automation script in Groovy language. Click **Run** in the main toolbar to execute the test case.


![Run Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/13.-Katalon-Run.png)


The test execution results are shown in **Log Viewer** as below:


![Test execution Dialog](../../images/katalon-studio/tutorials/create_test_case_using_script_mode/13b-Katalon-Log-viewer.png)
