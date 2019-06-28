---
title: "Headless Browsers Execution"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/headless-browsers-execution.html
redirect_from:
    - "/display/KD/Headless+Browsers+Execution/"
    - "/display/KD/Headless%20Browsers%20Execution/"
    - "/x/CQ-R/"
    - "/katalon-studio/docs/headless-browsers-execution/"
    - "/katalon-studio/tutorials/headless_browsers_execution.html"
description:
---
In essence, headless browser testing is testing a Web page’s functionality, without the presence of a GUI. One of the major advantages of using a headless browser and perform headless testing is that you can run tests more quickly in a real browser environment. Headless browsers can save project teams a tremendous amount of time and smoothly integrate into the CI/CD process.

[Katalon Studio](https://www.katalon.com/)supports headless browsers execution for both Chrome and Firefox. This tutorial will  you how to execute tests using headless browsers and additional configurations (if needed) to tweak your browsers.

Configuring headless browsers
-----------------------------

By default, executing automation tests using one of these headless browsers: [Firefox](https://developer.mozilla.org/en-US/Firefox/Headless_mode) or [Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) will add desired capabilities to the browsers. You don’t need to add any additional configurations.

In case you need to add more desired capabilities to the browsers, then:

*   Go to **Project → Settings → Execution → ****Default** → Select either [Chrome (headless)](/pages/viewpage.action?pageId=13700170) or[Firefox (headless)](/pages/viewpage.action?pageId=13700172)
*   Add your desired capabilities in these settings. For example, to make your Chrome (headless) start in smaller Window size:

![Configuring headless browsers](../../images/katalon-studio/docs/headless-browsers-execution/Configuring-headless-browsers.png)To find out more about desired capabilities, refer to this [guide](/display/KD/Introduction+to+Desired+Capabilities).

Executing automation tests
--------------------------

### Execute test case/test suite

*   Open a test case or test suite you want to execute

*   Select either Chrome (headless) or Firefox (headless) from the execution items list


![Executing automation test](../../images/katalon-studio/docs/headless-browsers-execution/Executing-automation-test.png)

*   Then, your current test case / test suite will be executed using the selected headless browser


![execute test case](../../images/katalon-studio/docs/headless-browsers-execution/execute-test-case.png)

### Execute test suite collection

*   Open a test suite collection that you want to execute

*   Add a test suite into this test suite collection

*   Select the **Run with** field

*   Select either **Chrome (headless)** or **Firefox (headless)**


![Execute Test Suite Collection](../../images/katalon-studio/docs/headless-browsers-execution/Execute-Test-Suite-Collection.png)

*   Save changes to your current test suite collection


![Test Suite Collection](../../images/katalon-studio/docs/headless-browsers-execution/Test-Suite-Collection.png)

*   Execute this test suite collection and Katalon Studio will use the selected environment to run


### Execute using console mode execution

We recommend using headless browser in console mode execution for faster and more continuous releases.

[Learn more](https://docs.katalon.com/katalon-studio/docs/jenkins-integration.html) on how to leverage Katalon Studio in CI/CD process.

*   To start, generate your console mode commands by selecting either Chrome (headless) or Firefox (headless)
*   Click the **Build CMD** button on the main toolbar.


![Execute using console mode execution](../../images/katalon-studio/docs/headless-browsers-execution/Execute-using-console-mode-execution.png)

*   Execute your tests in console mode using the *generated command script* from Katalon Studio.


![Execute using console mode execution](../../images/katalon-studio/docs/headless-browsers-execution/Execute-using-console-mode-execution-2.png)

Note: The headless browsers will NOT be displayed during this execution step.

For further instructions and help, please refer to [Katalon Studio Tutorials](https://docs.katalon.com/katalon-studio/tutorials/) and [Katalon Forum](https://forum.katalon.com/).

