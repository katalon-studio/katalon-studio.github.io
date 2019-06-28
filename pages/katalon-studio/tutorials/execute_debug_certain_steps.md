---
title: "How to execute/debug certain steps of a test case"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute_debug_certain_steps.html
redirect_from:
    - "/display/KD/Execute+test+from+specific+step/"
    - "/katalon-studio/tutorials/execute_debug_certain_steps.html"
description: "To save users from the trouble of having to re-run all unnecessary steps, Katalon Studio provides two ways to execute/ debug at their preferred steps."
---
Creating automation test cases is a repetitive task that requires a lot of editing and rerunning test cases. In many automation tools, when the test case fails and users makes certain changes to the script, they usually have to execute the whole script all over again to make sure the test is executed as expected. To save users from the trouble of having to re-run all unnecessary steps, Katalon Studio provides two ways so that users can start the test at their preferred steps:

*   Execute from selected step
*   Enable/Disable steps

Execute from a selected step
----------------------------

From the Manual view of the test case, right-click on a step and select **Execute from here…**. Once this option is selected, all **_currently running and supported Chrome instances_** are displayed so that you can select to run the script from the selected step.

![Debug Execute from a selected step](../../images/katalon-studio/tutorials/execute_debug_certain_steps/Execute-from-a-selected-step.png)

Please note that **_currently running and supported Chrome instances_** refer to the running Chrome browser instances that are previously launched from Katalon Studio.

Enable/Disable steps
--------------------

Katalon Studio also allows users to enable/disable one or more test steps before executing the test case as shown in the screenshot below. Using the shortcuts  **Ctrl + D** (disable) and **Ctrl + E** (enable) on selected steps, users can skip unwanted steps when executing the test case.

![Enable/Disable steps](../../images/katalon-studio/tutorials/execute_debug_certain_steps/Enable_Disable-steps.png)

As described above, users have two methods to specify steps to be executed. The first method allows users to quickly resume the existing execution, but it only supports Chrome sessions that are launched by Katalon Studio. On the other hand, the "enable/disable steps" method does not have this restriction but users may not be able to execute on specific context as wanted.