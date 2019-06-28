---
title: "Jira Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/jira-plugin-integration.html
redirect_from:
    - "/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview.html"

description:
---

Prerequisites:
* Install [Jira Integration plugin](https://store.katalon.com/product/3/Jira-Integration) for Katalon Studio from Katalon Store.
* Install [Katalon BDD app](https://marketplace.atlassian.com/apps/1217501/katalon-bdd-test-automation-for-jira) for Jira from Atlassian Marketplace.

## Configuration

You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at **Project > Settings > Integration > JIRA**.

![](../../images/katalon-studio/docs/jira-plugin-integration/config.png)
1.  Select **Enable integration** option. The settings will be available for configuration.

  * Jira Cloud
    * *Server URL* must be in the form *https://<site_name>.atlassian.net*.
    * Use a Atlassian Cloud's API token for *Password*. See instructions [here](https://confluence.atlassian.com/cloud/api-tokens-938839638.html).

  * Jira Server
    * *Server URL* must be in the form *http(s)://domain* without any trailing parts e.g. */secure*.
    * Use username instead of email for *Username*.

2.  Specify information regarding your JIRA Server and login credential then click **Connect** button.


3.  After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here.

The fields for setting include:

| Field | Description |
| --- | --- |
| Default JIRA Project | The default JIRA project to submit tickets. |
| Default JIRA Issue Type | The default JIRA Issue type to create when submitting tickets. |
| Use Test Case name as Summary for JIRA ticket | The Katalon Test Case Name will be used as a summary for submitted tickets. |
| Attach Screenshot to JIRA ticket | Any taken screenshot during execution will be included in submitted tickets. |
| Attach Log to JIRA ticket | The execution log will be included in submitted tickets. |

![](../../images/katalon-studio/docs/jira-plugin-integration/image2016-11-3-133A533A20.png)


4.  Click **OK** button to complete the JIRA Integration setup.

## Integrate Test Case

1. Prepare [ Jira JQL Script]( https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html )
![](../../images/katalon-studio/docs/jira-plugin-integration/image2017-8-2-113A393A33.png)

2. Open **Jira Integration** > click Import Test Case from JIRA JQL
![](../../images/katalon-studio/docs/jira-plugin-integration/image2017-8-2-113A233A49.png)

3. Enter the Jira JQL. Click **OK**.
![](../../images/katalon-studio/docs/jira-plugin-integration/image2017-8-2-113A413A34.png)

4. The **Test Case Folder Selection** window will appear. Choose the destination to store the issues. Click **OK**.
![](../../images/katalon-studio/docs/jira-plugin-integration/save_test_cases.png)

5. The **Jira Issues** window will appear. Click **OK**.
![](../../images/katalon-studio/docs/jira-plugin-integration/image2016-11-3-143A413A132.png)

If your test cases have already been linked to a JIRA ticket, Katalon Studio will not sync them again.

## Import BDD Feature Files

**Jira Integration** also allows you to import Jira BDD Feature Files to Katalon Studio.

When importing test cases from Jira, please check **Link to BDD Feature File** &gt; **OK** &gt; Choose the destination to store the issues.

![](../../images/katalon-studio/docs/jira-plugin-integration/sample.png)

A new Feature File (with the same name as the test case) will be created with the content from Jira BDD. Moreover, a RunFeature step will be created in the linked test case to Jira.

![](../../images/katalon-studio/docs/jira-plugin-integration/bdd2.png)

## View Test Results on Jira

After you have successfully integrated test cases, test execution results will be automatically created in the associated Jira ticket. Review the status and attachments of Katalon Studio test cases right inside Jira.

![](../../images/katalon-studio/docs/jira-plugin-integration/image2017-8-2-173A563A40.png)

## Submit an Issue to Jira

Bug submission options will be available in Test Reports after JIRA Integration setup is successfully configured.

1. Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.
![Test-Cases-Table](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Test-Cases-Table.png)

2. Click on the bug icon to display the list of related JIRA issues associated with the selected Test Case. The issues are shown in the following screen.
![JIRA issues associated](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-issues.png)

3. Select submit option under the **Add** command.
![Create new Jira ticket](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Add-command.png)
The bug submission options include:

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Create as New</td>
            <td>A new Issue will be submitted to JIRA.</td>
        </tr>
        <tr>
            <td>Create as Sub Issue</td>
            <td>
                A sub-task for an existing JIRA issue will be created. You will be asked to provide the <b>ID</b> of the existing JIRA issue to create a sub-task within.
                <p></p>
                <p><img src="../../images/katalon-studio/docs/working-with-jira/image2017-8-2-163A123A21.png"></p>
            </td>
        </tr>
        <tr>
            <td>Link to existing Issue</td>
            <td>
                This option will append execution details to an existing JIRA issue. You will be asked to provide the ID of the existing JIRA issue for this.
                <p></p>
                <p><img src="../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Link-to-existing-Issue.png"></p>
            </td>
        </tr>
    </tbody>
</table>

4. In case of creating a new JIRA issue (or Sub-task), a **JIRA native submission form** will be displayed. The following is an example form for creating a new JIRA issue:
![JIRA native submission form](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-native-submission-form.png)

5. Based on your preferences in [JIRA Integration settings](/display/KD/JIRA+Integration#JIRAIntegration-Configuration), the **Summary**, **Screenshots**, **Logs, Reporter, and Description** of test cases will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.

6. A created **JIRA issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio. You can also edit linked JIRA issue or remove the linking of the created JIRA issue.![Linked JIRA issues](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/Linked-JIRA-issues1.png)

7. Once clicked on **ID**, you will be taken to **JIRA issues** page accordingly as shown below

![JIRA issues page](../../images/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview/JIRA-issues-page.png)