---
title: "Version 4.8"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-48.html
redirect_from:
    - "/display/KD/Version+4.8/"
    - "/display/KD/Version%204.8/"
    - "/x/yRBO/"
    - "/katalon-studio/new/version-48/"
description:
---
General Improvement
-------------------

**Enhanced Katalon Help**

Introducing brand new Katalon Help page for Katalon Studio application. Users can access Katalon Studio resources all in one place such as Tutorials, FAQs, Sample Projects, or User Guides.

**![](../../images/katalon-studio/new/version-48/image2017-9-1-173A83A59.png)**

**[Support Shadow DOM](/display/KD/Working+with+Shadow+DOM+Objects)**

Katalon Studio Version 4.8 supports objects with Shadow DOM in Web Testing. Users can identify Shadow DOM objects by specifying the Shadow Root Parent in the Object settings tab.

![](../../images/katalon-studio/new/version-48/image2017-8-15-113A323A52.png)

Test Suite
----------

[**Video Capturing**](/display/KD/Video+Capturing)

> [K-Lite Codec](https://www.codecguide.com/download_kl.htm) is recommended to play Katalon Studio test execution video.

Introducing Katalon Studio **new** feature **video capturing** for Test Suite reports. Users will be able to video capture test suite execution and replay to review how each test case was executed. Description of test steps will be added as subtitle for users convenience. **Video capturing** feature can be enable in **Project Settings**.

![](../../images/katalon-studio/new/version-48/image2017-8-25-143A93A49.png)

[**Variable Binding**](/display/KD/Execute+a+test+suite#Executeatestsuite-VariableBinding)

Variable Binding has been improved to allow users to set or update **Type** and **Test Data **column of multiple rows at once.This improvement aims to save testing time and to eliminate several repetitive procedures.

![](../../images/katalon-studio/new/version-48/image2017-8-17-143A273A14.png)

JIRA Integration
----------------

[Katalon Studio add-on for JIRA:](/display/KD/Install+and+Use+Katalon%27s+JIRA+add-on) An add-on for JIRA so that business users can involve with development team. Project Manager or Business Analyst can compose requirements on JIRA under the BDD's format. These requirements will be synced with Katalon Studio so that test script can be generated and associated accordingly.

*   Basic functions and features of this JIRA add-on are as following:

    *   Katalon BDD - JIRA custom Gherkin field
    *   Sync JIRA Issues back and forth
    *   Sync Katalon Studio test execution via attachment


    ![Design test cases in Gherkin](../../images/katalon-studio/new/version-48/17c5dea4-e386-499a-95e4-d2934f75fa70.png)

    The add-on is listed at [Atlassian Marketplace](https://marketplace.atlassian.com/plugins/com.katalon.katalon-jira-plugin). Currently, we only suport JIRA server. To install the add-on, please follow [Atlassian's instruction](https://marketplace.atlassian.com/plugins/com.katalon.katalon-jira-plugin/server/installation).


Mobile Testing
--------------

[Record](/display/KD/Recording+Mobile+Test) and [Spy](/display/KD/Mobile+Object+Spy) Mobile is improved to support Kobiton devices, a cloud-based devices platform. Testing team can run test automation on hundreds of Kobiton devices.

*   Users can choose 2 options in **Device Types**:
    *   Local devices: This will list out all local devices and simulators.
    *   Kobiton device: This will list out Kobiton's devices that integrated with Katalon Studio
*   **Device Name**: display all devices name accordingly based on selected type in **Device Types**

![](../../images/katalon-studio/new/version-48/image2017-8-15-163A403A14.png)

Test Case
---------

Introducing **Recent Keywords** and **Recent Objects** features in **Manual** mode when writing a test case. This will optimize time and reduce repetitive tasks for users.

**[Recent Keywords](/display/KD/Test+Case+Manual+View#TestCaseManualView-RecentKeywords)** feature allows users to select and add any of the 10 last used **keywords** to Item list.

![](../../images/katalon-studio/new/version-48/image2017-8-18-173A193A14.png)

**[Recent objects](/display/KD/Test+Case+Manual+View#TestCaseManualView-RecentObjectsandObjectFolders)** feature in _Test Object Input_ dialog allows users to select and add any of the 10 last used **Test Objects.** Users can also quickly jump to **Recent Object Folder** that has recent used objects accordingly.

![](../../images/katalon-studio/new/version-48/image2017-8-25-173A293A39.png)

Web Services
------------

**[Support OAuth 1.0 authorization](/display/KD/RESTful)
**

Katalon Studio now supports OAuth 1.0 authorization for Web Services Testing.  OAuth (Open Standard for Authorization) is an open token-based protocol authentication and authorization that allows application to capture protected information without exposing end user credentials. Testing teams can leverage this support to test any Web Services project that required OAuth 1.0 authorization with Katalon Studio.

![](../../images/katalon-studio/new/version-48/image2017-8-23-123A93A38.png)

Project Settings
----------------

**[Email](/display/KD/Emails+Settings)**

This version of Katalon Studio improved **Email** configuration in Project setting. Users able to customize Mail Server, send to multiple recipients, editable subject field.

![](../../images/katalon-studio/new/version-48/image2017-8-15-143A523A25.png)

New **Template** under Email section allows users to customize test execution reports and add extra fields to the report.

![](../../images/katalon-studio/new/version-48/image2017-8-15-143A493A1.png)

Katalon Studio Console Mode for Linux OS
----------------------------------------

Katalon Studio for Linux is now available. Users can execute test automation in Linux environment by using command line mode. Refer to this guide for [Console Mode Execution](/display/KD/Console+Mode+Execution).

> *   Tested on Ubuntu, other OSes might have its own problem.
> *   Only Chrome, Firefox and Remote options are supported for console mode execution using Linux version.

**Linux OS:** [http://download.katalon.com/4.8.0/Katalon\_Studio\_Linux_64-4.8.tar.gz](http://download.katalon.com/4.8.0/Katalon_Studio_Linux_64-4.8.tar.gz)

Keywords
--------

New built-in keywords to help users check for broken links or images.

| Keywords | Description |
| --- | --- |
| [Get All Links On Current Page](/display/KD/%5BWebUI%5D+Get+All+Links+On+Current+Page) | Get all links on current page |
| [Verify Response Status Code](/display/KD/%5BWS%5D+Verify+Response+Status+Code) | Verify status code in the returned data from a web service call |
| [Verify Response Status Code In Range](/display/KD/%5BWS%5D+Verify+Response+Status+Code+In+Range) | Verify status code valid in a range of status codes in the returned data from a web service call |
| [Verify Links Accessible](/display/KD/%5BWebUI%5D+Verify+Links+Accessible) | Verify a list of links (URLs) are accessible |
| [Verify All Links On Current Page Accessible](/display/KD/%5BWebUI%5D+Verify+All+Links+On+Current+Page+Accessible) | Verify all links (URLs) on the current page are accessible |