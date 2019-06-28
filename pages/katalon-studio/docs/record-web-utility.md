---
title: "Record Web Utility" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/record-web-utility.html 
redirect_from:
    - "/display/KD/Record+Web+Utility/"
    - "/display/KD/Record%20Web%20Utility/"
    - "/x/RwnR/"
    - "/katalon-studio/docs/record-web-utility/"
description: 
---
Record
------

### Record a New Test Case

*   Without opening any test case, click on Web Record ![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-09.41.37.png) icon to open Web Recorder
*   Katalon Studio default browser is Chrome and the icon is displayed in the top right corner. You can change this default browser in **Preferences → Katalon → Recorder → Default browser**. You can also click on the drop-down button to select the browser you want to use:
    
    <table><thead><tr><th>Type</th><th>Description</th><th>Note</th></tr></thead><tbody><tr><td>New Browsers</td><td>Start a new browser</td><td><strong>Supported browsers:</strong><br>- Firefox<br>- Chrome<br>- Internet Explorer (only on Windows)</td></tr><tr><td>Active Browsers</td><td>Use the current browser (only Chrome)</td><td>Katalon Studio will install <a class="external-link" href="https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid" rel="nofollow">Katalon Recorder</a> as an add-on to help with recording for this type of browser<br><br><strong>Supported browsers:</strong><br>- Chrome<br>- Firefox (coming soon)</td></tr></tbody></table>
    
*   In this example, select either Chrome or Firefox from '**New Browser**' type to start recording.
    
    > *   The browser will highlight and display its correspondent Xpath when you hover the mouse on that element.
    > *   Recorded steps will generate in Recorded Actions.
    > *   When you type in a Password field, Web Recorder will automatically use '[Set Encrypted Text](/display/KD/%5BWebUI%5D+Set+Encrypted+Text)' keyword and input's value will be encrypted to increase security.
    > 
    > ![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-10.05.19.png)
    

### Record Using Existing Test Case

With the new Web Recorder, users can be more productive while modifying existing test cases. Instead of creating a brand new test case whenever there are changes to the UI, risks of overlooking how new changes might effect existing features are now minimized.

*   Open any existing test case to continue recording.
*   Click on **Record** icon to open Web Recorder.
*   All existing test steps will be imported as Recorded Actions and current [Test Case variables](/display/KD/Variable+Types#VariableTypes-Localvariables) will be imported into the Variables tab in Web Recorder. You won't need to record the same test flow again.

![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.23.30.png)

Modify Recorded Actions
-----------------------

Unlike previous Web Recorder's version, the list of available actions is the same with Katalon Studio [built-in keywords](/display/KD/Built-in+Keywords). You can add any action, call another test case, and/or use Custom Keywords.

![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.30.37.png)

Modify Recorded Objects
-----------------------

After you finish your recording, **Web Recorder** will export a list of test objects used in the test case. For more information on WebUI test objects, go [here](/x/tQTR). 

Upon satisfactorily creating your test case, click **OK** to add the recorded steps to the test case. Choose the directory you want your test objects to reside to continue. Here, Katalon Studio **automatically** **detects** similar **existing** objects in the Objects Repository and will ask you for further action. This helps users optimize object repositories. 

![](../../images/katalon-studio/docs/record-web-utility/image2018-6-26-143A183A9.png)

Variables
---------

In the new Web Recorder interface, you can manage the [variables](/x/RoIw) directly related to your recording.

Execute
-------

Execution comes with seeing execution logs and, in many cases, you only want to execute some steps. New features have been introduced to prevent _having_ to execute all steps:

*   Logs: a real-time execution raw logs when you execute test steps. 
*   Run (with three types of run):
    *   Run all steps
    *   Run selected steps
    *   Run from selected step

![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.46.04.png)

<table><thead><tr><th>Type of Run</th><th>Description</th></tr></thead><tbody><tr><td>Run all steps</td><td>Execute ALL steps that are enabled on Web Recorder.</td></tr><tr><td>Run selected steps</td><td><p>Execute only one or many selected steps.</p><blockquote class="important"><p>You can select many steps using either Ctrl or Shift key from your keyword. Selected steps will be highlighted e.g run step #2, #6, #9 and #11 are selected.</p><p><img src="../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.45.48.png"></p></blockquote></td></tr><tr><td>Run from selected step</td><td><p>Execute the current selected step and all steps after selected one, e.g run step #4 and all steps after it.</p><p><img src="../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.51.07.png"></p></td></tr></tbody></table>

Upon selecting any type of Run to execute, execution logs are displayed on Logs tab.

![](../../images/katalon-studio/docs/record-web-utility/Screen-Shot-2018-06-27-at-11.54.27.png)

> The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 
> 
> *   [Common Validation](https://www.katalon.com/tutorials/common-validation/) 
> *   [Control Statements](/display/KD/Control+Statements)
