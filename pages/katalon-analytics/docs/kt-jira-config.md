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

## Configure Jira Settings

1. Go on Jira page. Click on **Apps** bar and choose **Project Settings**. Select **Katalon Settings**.

    <img src="https://raw.githubusercontent.com/katalon-studio/docs-images/master/katalon-analytics/docs/jira-ka-configure/1-jira-ka-config.jpg" width=100%>

2. Enter the email address you have registered for your Katalon account.

3. Enter an **[API Key](https://docs.katalon.com/katalon-analytics/docs/ka-api-key.html)**.

4. Click **Fetch Organization**.

5. Enter your Organization ID.

6. Click **Save**.

## Configure in Katalon TestOps

1. Go to **Configurations** and select **Jira Settings**.

    <img src="https://raw.githubusercontent.com/katalon-studio/docs-images/master/katalon-analytics/docs/jira-ka-configure/2-jira-ka-config.png" width=100%>

2. Enter Jira URL, Username, and Password.

    * Jira Cloud

        a. Jira URL must be in the form of `https://<site_name>.atlassian.net`.

        b. Enter the email registered for your Jira Cloud account in **Username**.

        c. Enter an Atlassian Cloud's API token in **Password**.

        > Notes:
        >
        > Instructions for [API tokens](https://confluence.atlassian.com/cloud/api-tokens-938839638.html).

    * Jira Server

        a. Jira URL must be in the form of `http(s)://domain` without any trailing parts. For example, `/secure`.

        b. Enter your Username in **Username**.

        c. Enter your Password.

    3. Click **Test Connection** to see if the connection is successful.

    4. Click **Save**.

    <img src="https://github.com/katalon-studio/docs-images/blob/master/katalon-analytics/docs/jira-ka-configure/2-jira-ka-config.jpg" width=100%>

## Jira Dashboard Gadgets

You can see the latest results of Test Cases in Jira Dashboard.

> Notes:
>
> For detailed instructions of how to add a Gadget to your Jira Dashboard, click [here](https://support.atlassian.com/jira-core-cloud/docs/add-and-customize-a-gadget/).

Go to **Katalon Dashboard** and click **Add gadget**.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/katalon-gadgets.png" width="" height="">

A table showing the detailed status and duration for each Test Case appears as below.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/dashboard.png" width="" height="">
