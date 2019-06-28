---
title: "Configure JIRA Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/configure-jira-integration.html
redirect_from:
    - "/display/KD/Configure+JIRA+Integration/"
    - "/display/KD/Configure%20JIRA%20Integration/"
    - "/x/7oEw/"
    - "/katalon-studio/docs/configure-jira-integration/"
    - "/display/KD/JIRA%20Integration/"

description:
---

This feature has been moved to [Jira integration plugin](https://store.katalon.com/product/3/Jira-Integration) for Katalon Studio.

<details><summary>Deprecated Content</summary>

Configuration
-------------

You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at **Project > Settings > Integration > JIRA**.

![](../../images/katalon-studio/docs/configure-jira-integration/image2018-3-1-173A403A26.png)

1.  Select **Enable integration** option. The settings will be available for configuration.


2.  Specify information regarding your JIRA Server and login credential then click **Connect** button.


3.  After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here. 
    ![](../../images/katalon-studio/docs/configure-jira-integration/image2016-11-3-133A533A20.png)
    Where:

    | Field | Description |
    | --- | --- |
    | Default JIRA Project | The default JIRA project to submit ticket. |
    | Default JIRA Issue Type | The default JIRA Issue type to create when submitting ticket. |
    | Use Test Case name as Summary for JIRA ticket | The Katalon Test Case Name will be used as summary for submitted ticket. |
    | Attach Screenshot to JIRA ticket | Any taken screenshot during execution will be included in submitted ticket. |
    | Attach Log to JIRA ticket | The execution log will be included in submitted ticket. |

4.  Click **OK** button to complete the JIRA Integration setup.

</details>