---
title: "Jira Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/kt-jira-config.html 
---

Katalon TestOps provides seamless Jira integration, creating several benefits in team collaboration.

Learn more about [Jira integration](https://docs.katalon.com/katalon-analytics/docs/ka-integration-jira.html).

> Requirements:
> * You must install [Jira App](https://marketplace.atlassian.com/apps/1217501/katalon-bdd-test-automation-for-jira).
> * You must be the Owner or Admin of an Organization. 

## Configure Jira Settings

1. Navigate to **Katalon Settings** under Apps in Project Settings.

![](https://raw.githubusercontent.com/katalon-studio/docs-images/master/katalon-analytics/docs/jira-ka-configure/1-jira-ka-config.jpg)

2. Enter the email registered for your Katalon account. 

3. Enter an **[API Key](https://docs.katalon.com/katalon-analytics/docs/ka-api-key.html)**.

4. Click **Fetch Organization**.

5. Enter **[Organization ID](https://docs.katalon.com/katalon-analytics/docs/getting-started.html)**.

6. Click **Save**.

## Configuration in Katalon TestOps

1. Navigate to **Jira Settings** located under Configurations.

![](https://raw.githubusercontent.com/katalon-studio/docs-images/master/katalon-analytics/docs/jira-ka-configure/2-jira-ka-config.png)

2. Enter Jira URL, Username, and Password.

* Jira Cloud

    a. Jira URL must be in the form of _https://<site_name>.atlassian.net_.\
    b. Enter the email registered for your Jira Cloud account in *Username*.\
    c. Enter an Atlassian Cloud's API token in *Password*. See the instructions **[here](https://confluence.atlassian.com/cloud/api-tokens-938839638.html)**.

* Jira Server

    a. Jira URL must be in the form of _http(s)://domain_ without any trailing parts e.g., _/secure_.\
    b. Use your username instead of an email in *Username*.\
    c. Enter Password.

3. Click **Test Connection** to see if the connection is successful.

4. Click **Save**.

![](https://github.com/katalon-studio/docs-images/blob/master/katalon-analytics/docs/jira-ka-configure/2-jira-ka-config.jpg)

JIRA Dashboard Gadgets
Quick tip
This feature allows you to view the latest results of test cases in Jira Dashboard.


Please refer to [this document](https://support.atlassian.com/jira-core-cloud/docs/add-and-customize-a-gadget/) to add a gadget to your Jira dashboard.

Find **Katalon Dashboard** and click **Add gadget**.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/katalon-gadgets.png" width="" height="">

After successfully adding **Katalon Dashboard**, you will see a table showing the detailed status and duration for each test case.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/jira-gadgets/dashboard.png" width="" height="">


## Next Steps

- View testing progress in [Jira Release](https://docs.katalon.com/katalon-analytics/docs/kt-jira-release.html), [Jira Requirements](https://docs.katalon.com/katalon-analytics/docs/ka-integration-jira.html), [Jira Defects](https://docs.katalon.com/katalon-analytics/docs/ka-defects.html), [Jira Dashboard](https://docs.katalon.com/katalon-analytics/docs/jira-gadgets.html).
- [Writing BDD in Jira](https://docs.katalon.com/katalon-analytics/docs/bdd-settings.html).
- [Submit Test Results from Katalon Studio to Jira](https://docs.katalon.com/katalon-studio/docs/jira-integration.html).
