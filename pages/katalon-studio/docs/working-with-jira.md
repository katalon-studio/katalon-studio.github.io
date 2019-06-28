---
title: "Working with JIRA"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-jira.html
redirect_from:
    - "/display/KD/Working+with+JIRA/"
    - "/display/KD/Working%20with%20JIRA/"
    - "/x/MhBO/"
    - "/katalon-studio/docs/working-with-jira/"
description:
---
This feature has been moved to [Jira integration plugin](https://store.katalon.com/product/3/Jira-Integration) for Katalon Studio.

<details><summary>Deprecated Content</summary>

Integrate Test Case
-------------------

Follow these steps to **Integrate Test** **Case** from JIRA to Katalon Studio:

1.  Prepare [JIRA JQL Script](https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html) from JIRA

    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A393A33.png)


2.  Click on JIRA icon on the Menu bar  
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A233A49.png)


3.  Import JIRA dialog will be displayed

    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A253A3.png)


4.  Enter prepared JIRA JQL. Then click on 'OK' button, Katalon Studio will sync all the test case from JIRA based on input JQL.
    _(In case of Test Cases already synced, Katalon Studio will not sync them again)_

    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A413A34.png)


5.  A list of JIRA ticket or A number of JIRA ticket to be synced will be displayed after clicking 'OK' button. Here you can specify the location for syncing JIRA test cases. There are two ways:

    1.  Users can specify manually

    2.  Katalon Studio will automatically generate default location



    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A443A41.png)

6.  Once the syncing process finished, you can go to Tests Explorer of Katalon Studio to verify that the **JIRA test cases** are downloaded as expected.

    ![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-113A573A9.png)


Test Results
------------

Katalon Studio test results will be synced to associated JIRA Issues automatically. You can review the **status** and **attachments** of Katalon Studio test cases right inside JIRA.

![](../../images/katalon-studio/docs/working-with-jira/image2017-8-2-173A563A40.png)

Submit an issue to JIRA
-----------------------

Submit options will be available in Test Reports after JIRA Integration setup is done.

1.  Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.
    ![](../../images/katalon-studio/docs/working-with-jira/image2017-2-22-103A03A4.png)


2.  Click on the bug icon to display the list of related JIRA issues for the selected Test Case.
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3-143A153A20.png)


3.  Select submit option under the **Add** command.
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3-143A163A50.png)

    Where:

    <table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Create as New</td><td>A new Issue will be submitted to JIRA.</td></tr><tr><td>Create as Sub Issue</td><td><p>A sub-task for an existing JIRA Issue will be created. You will be asked to provide the <strong>ID</strong> of an existing JIRA Issue to create sub-task within.</p><p><img src="../../images/katalon-studio/docs/working-with-jira/image2017-8-2-163A123A21.png"></p></td></tr><tr><td>Link to existing Issue</td><td><p>This option will append execution details to an existing JIRA Issue. You will be asked to provide the ID of existing JIRA Issue for this.</p><p><img src="../../images/katalon-studio/docs/working-with-jira/image2016-11-3-143A283A29.png"></p></td></tr></tbody></table>

4.  In case of creating new JIRA Issue (or Sub-task), a **JIRA native submission form** will be displayed. Following is an example of creating new JIRA Issue:
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3-143A323A53.png)


5.  Based on your preferences in [JIRA Integration settings](#WorkingwithJIRA-Configuration), the **Summary**, **Screenshots,** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.


6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.
    ![](../../images/katalon-studio/docs/working-with-jira/image2016-11-3-143A413A13.png)

</details>