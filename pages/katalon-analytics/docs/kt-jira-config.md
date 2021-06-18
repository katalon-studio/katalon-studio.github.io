---
title: "Jira Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/kt-jira-config.html
redirect_from:
    - "/katalon-analytics/docs/jira-gadgets.html"
---

Katalon TestOps provides seamless Jira integration, which creates several benefits for more efficient team collaboration.

Learn more about [Jira integration](https://docs.katalon.com/katalon-analytics/docs/ka-integration-jira.html).

> Requirements:
> * You must install [Jira App](https://marketplace.atlassian.com/apps/1217501/katalon-bdd-test-automation-for-jira).
> * You must be the Owner or Admin of an Organization.

## Configure in Jira Software

You can configure Katalon Settings in your Jira page.

> Notes:
>
> Your Jira page name is under the form of `<site_name>.atlassian.net`.

Follow these steps:

1. Click on the **Projects** tab in your Jira page. Choose your Project (e.g., Katalon).

    The Project page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/jira-soft-project-screen.png" width=100%>

    Select **Project settings** at the bottom of the left bar.

2. Scroll down the left bar to find the **Katalon Settings** section.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/jira-soft-scrolldown-bar-in-project-settings.png" width=100%>

3. Select **Katalon Settings**.

    The **Katalon settings** page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/jira-soft-katalon-settings-screen.png" width=100%>

4. Enter the email address you have registered for your Katalon account.

5. Enter an **[API Key](https://docs.katalon.com/katalon-analytics/docs/ka-api-key.html)**.

6. Click on the **Fetch organizations** button.

5. Enter your Organization ID.

    > Notes:
    >
    > You can find out your Organization ID in [Organization management](https://docs.katalon.com/katalon-analytics/docs/kt-create-org.html#create-an-organization).

6. Click **Save**.

## Configure in Katalon TestOps

1. Sign in [Katalon TestOps](https://testops.katalon.io/login) and go to your Project.

    The Project's **Dashboard** page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/testops-project-dashboard.png" width=100%>

2. Click on the **Configurations** tab, then the **Integrations** tab.

    The **Integrations** page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/testops-project-integrations-scrolldown-bar-jira.png" width=100%>

3. Select **Jira** in the scrolldown menu.

    The **Jira** page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-june-jira-settings/testops-project-jira-integration-screen.png" width=100%>

4. Enter Jira URL, Username, and Password.

    * For Jira Cloud

        * Jira URL must be in the form of `https://<site_name>.atlassian.net`.

        * In the **Username** section, enter the email address you have  registered for your Jira Cloud account.

        * In the **Password** section, enter an Atlassian Cloud's API token.

        > Notes:
        >
        > See instructions for [API tokens](https://confluence.atlassian.com/cloud/api-tokens-938839638.html).

    * For Jira Server

        * Jira URL must be in the form of `http(s)://domain`, without any trailing parts. For example, `/secure`.

        * In the **Username** section, enter your Username instead of your email address.

        c. In the **Password** section, enter your Password.

5. Click **Test Connection** to see if the connection is successful, then click **Save**.

## Jira Dashboard gadgets

You can see the latest results of Katalon Test Cases in Jira Dashboard.

Click on the **Dashboards** tab in your Jira page, then click **Add gadget** on the top right corner.

**Add a gadget** box displays as below.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/katalon-gadgets.png" width="" height="">

Select **Katalon Dashboard** by clicking on the **Add gadget** button.

In **Katalon Dashboard**, a table showing the status and duration of each Test Case appears as below.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/dashboard.png" width="" height="">

> Notes:
>
> See further instructions on how to [add and customize a gadget](https://support.atlassian.com/jira-core-cloud/docs/add-and-customize-a-gadget/).
