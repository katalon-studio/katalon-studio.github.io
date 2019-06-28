---
title: "Editing test cases using manual mode"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create_test_case_using_manual_mode.html
redirect_from:
    - "/display/KD/Test+Case+Manual+View/"
    - "/katalon-studio/tutorials/create_test_case_using_manual_mode.html"

description: "This tutorial will give users with less experience in programming step-by-step instruction to create an automation test case in manual mode."
---
Katalon Studio supports Keywords-Driven testing where test cases consist of keywords that represent actions of users on the AUT (Applications Under Test). This allows users with less experience in programming to easily generate automation test. The below tutorial will give you step-by-step instruction in order to create an automation test case in manual mode.

Given a sample test case with the following steps:

*   Open the browser
*   Navigate to a website
*   Click on a certain control
*   Validate if the control exists on the page
*   Close the browser

Follow these steps to automate the above test scenario in **Manual view**:

1\. Select **File > New > Test Case** from the main menu to create a test case. Provide the name for the new test case, then click **OK**.

![Katalon Studio new test case dialog](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/1.-Katalon-manual-mode.png)

2. Once a new test case is created, it is opened in **Manual view**. This view allows users to define steps for the test case easily with little programming skills required.

![Katalon Studio Manual Mode](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/2.-Katalon-manual-view.png)

3. Select **Add > Web UI Keyword** from the command toolbar.

![Web UI Keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/3.-Katalon-Web-UI-keyword.png)

4\. Select the [**Open Browser**](/display/KD/%5BWebUI%5D+Open+Browser) keyword. This keyword opens a browser and navigates to the specified URL if provided (the detail of a selected keyword is shown in the popup screen as shown below)

![Open Browser Keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/4.-Katalon-Open-Brower.png)

5\. Add the [**Navigate To Url**](/display/KD/%5BWebUI%5D+Navigate+to+Url) keyword. This keyword navigates to a specified URL. Double click on the **Input** cell to provide additional data (parameters) for the keyword.

![Provide additional data](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/5.-Katalon-nagivate-to-url.png)

6\. The **Input** dialog is displayed as below. Each row represents one parameter.

![Input dialog Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/6.-Katalon-Input-Dialog.png)

Where:

<table>
    <thead>
        <tr>
            <th>Field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>No</td>
            <td>The parameter order for the selected keyword.</td>
        </tr>
        <tr>
            <td>Param Name</td>
            <td>The name of the parameter.</td>
        </tr>
        <tr>
            <td>Param Type</td>
            <td>The data type of the parameter (e.g. String,<strong> <a href="/display/KD/Variable+Types">Variable</a></strong> or <strong><a href="/display/KD/Manage+Test+Data">Test Data Value</a></strong>…)</td>
        </tr>
        <tr>
            <td>Value Type</td>
            <td>The type of input value (e.g. String,<strong> <a href="/display/KD/Variable+Types">Variable</a></strong> or <strong><a href="/display/KD/Manage+Test+Data">Test Data Value</a></strong>…)</td>
        </tr>
        <tr>
            <td>Value</td>
            <td>&nbsp;The input value for this parameter.<br>Input value varies depending on the specified <strong>Value Type</strong>. Refer to <strong><a href="/display/KD/Value+Types">Value Types in Katalon</a></strong> for more details.</td>
        </tr>
    </tbody>
</table>

For now, enter the URL of Katalon demo AUT (http://demoaut.katalon.com) into the **Value** column then click **OK**.

7\. Add the [**Click**](/display/KD/%5BWebUI%5D+Click) keyword. This keyword represents a click action on a given object. You need to associate this keyword to an object. Double click on the **Object** cell to open the **Test Object Input** dialog.

![click keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/7.-Katalon-click-keywords.png)

8\. All captured objects in **Object Repository** are displayed in the **Test Object Input** dialog (Refer to [Spy Object](/display/KD/Spy+Object) for details regarding how to capture objects). Select your object then click **OK**.

![Test Object Input Dialog](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/8.-Katalon-Object-Repository1.png)

9\. Add the [**Verify Element Present**](/display/KD/%5BWebUI%5D+Verify+Element+Present) keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to associate this keyword with an object.

![Verify element present](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/9.-Katalon-Verify-Element.png)

10\. Add the [**Close Browser**](/display/KD/%5BWebUI%5D+Close+Browser) keyword and save your test case.

![Close Browser Keyword Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/10.-Katalon-Close-browser.png)

11\. Click on **Run** in the main toolbar to execute the test case.

![Execute test Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/11.-Katalon-Run.png)

Katalon Studio should be able to execute all of the steps specified in the test case. Test execution results are shown in Log Viewer as below:

![Log view dialog Katalon Studio](../../images/katalon-studio/tutorials/create_test_case_using_manual_mode/12.-Katalon-Log-viewer-300x113.png)
