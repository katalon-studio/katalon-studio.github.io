---
title: "Execute a Test Case or a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case-or-a-test-suite.html 
redirect_from:
    - "/display/KD/Execute+a+Test+Case+or+a+Test+Suite/"
    - "/display/KD/Execute%20a%20Test%20Case%20or%20a%20Test%20Suite/"
    - "/x/GAvR/"
    - "/katalon-studio/docs/execute-a-test-case-or-a-test-suite/"
    - "/display/KD/Execute+a+test+suite/"
    - "/katalon-studio/tutorials/executing_test_case.html"
    - "/display/KD/Execute+a+test+case/"
    - "/display/KD/Execute%20a%20test%20case/"
    - "/x/ugAM/"
    - "/katalon-studio/docs/execute-a-test-case/"
    - "/katalon-studio/docs/execute-a-test-case.html"
description: 
---
Katalon Studio allows you to run the entire test suite, or an individual test case. Before executing a test case or a test suite, keep in mind the [supported execution environments](/display/KD/Supported+Environments) by Katalon Studio. 

Execute an Entire Test Case or Test Suite
-----------------------------------------

Open a test case/test suite, then select the environment to run the test case from **Run** command of the main toolbar. You can also [execute the test case using console mode](/display/KD/Console+Mode+Execution). 

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-8-2-153A203A44.png)

> If you simply click on the **Run** button, the test case will be executed using the default browser defined in [Execution Settings](/display/KD/Execution+Settings).

<table><thead><tr><th>Execution Environment</th><th>Execution Guide</th></tr></thead><tbody><tr><td><strong>Browsers</strong></td><td>Simply select to execute your test on one of the supported browsers (Chrome, Firefox, IE, Safari, Edge)</td></tr><tr><td><strong>Mobile Browsers</strong></td><td>Simply select to execute your test on one of the supported devices (Android, iOS)</td></tr><tr><td><strong>Mobile</strong></td><td><p>Before executing your test, check if you have set up the environment for mobile testing for <a href="/display/KD/Mobile+on+Windows">Windows</a> or for <a href="/display/KD/Mobile+on+macOS">macOS</a>. Select your device among those listed in Katalon Studio.</p><img src="../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-1-26-183A543A41.png"><p>&nbsp;</p><blockquote class="important"><p class="title">Troubleshooting</p><p>If there is no device listed, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device.</p><p><img src="../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2018-8-2-153A313A52.png"></p></blockquote></td></tr><tr><td><strong>Remote</strong></td><td>Make sure you have set up default configuration for the remote environment in project settings. Refer to&nbsp;<a href="/display/KD/Introduction+to+Desired+Capabilities">Introduction to Desired Capabilities</a>&nbsp;for more details.</td></tr><tr><td><strong>Custom</strong></td><td>Make sure you have set up default configuration for the remote environment in project settings. Refer to&nbsp;<a class="external-link" href="/x/cgFO#ExecutionSettings-CustomExecution" rel="nofollow">Custom Execution</a>&nbsp;for more details. When you have set up your custom environment, simply select it from the drop-down list.</td></tr></tbody></table>

Execute Parts of a Test Case
----------------------------

Creating automation test cases is a repetitive task that requires a lot of editing and re-running. In many automation tools, when the test case failed and the user makes certain changes to the script, the users usually has to execute the whole script all over again to make sure the test is executed as expected. To save users the trouble of having to run all unnecessary steps, Katalon Studio provides two ways so that users can start the test at their preferred steps.

### Execute from a Selected Step

From the [Manual view](/display/KD/Manual+View) of the test case:

1\. Start a browser in Katalon script using 'Open Browser' step. Else, you must have a current session running.

2. Ensure this browser's session is NOT terminated (**Project -> Settings -> Default -> Post-Execution -> Terminate...** options are unchecked based on your testing needs).

3\. Right click on one of the step you want to execute from, and execute the sesssion.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-8-18-113A343A23.png)

### Enable/Disable steps

Katalon Studio also allows users to disable one or more test steps before executing the test case as shown in the screenshot below. Using the shortcuts  Ctrl + D (disable) and Ctrl + E (enable) on selected steps, the users can leverage this feature to skip unwanted steps when executing test cases.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-8-18-113A363A13.png)

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case/test suite is being executed.

![](../../images/katalon-studio/docs/execute-a-test-case-or-a-test-suite/image2017-6-30-203A543A25.png)

Troubleshooting
---------------

> Troubleshooting
> 
> Some factors can affect your execution:  
> \- [Failure Handling](/display/KD/Failure+Handling)  
> \- [Test Listeners](/pages/viewpage.action?pageId=5126383)  
> \- [Setup/Teardown Test Case/Suite](/pages/viewpage.action?pageId=12419091)

You can also refer to this [guide](/display/KD/Troubleshooting+common+issues+related+to+interacting+with+an+element) to troubleshoot problems relating to test execution.