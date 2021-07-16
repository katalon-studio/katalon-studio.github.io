---
title: "Link Test Cases to Jira Requirements" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/ka-integration-jira.html 
description: 
---

You can link Test Cases to Jira Requirements and view them in both Katalon TestOps and Jira.

> Requirements:
>
> * You have installed the [Jira App](https://marketplace.atlassian.com/apps/1217501/katalon-bdd-test-automation-for-jira).
>
> * You have configured Jira integration. See: [Jira Settings](https://docs.katalon.com/katalon-analytics/docs/kt-jira-config.html).

## Link Test Cases to Jira Requirements

Follow these steps:

1. Sign in to [Katalon TestOps](https://testops.katalon.io/login) and go to your Project.

2. Go to **Test Management** > **Test Cases**. Click on a Test Case (e.g., CuraHealth).

    The Test Case page appears (e.g., **Test Case: CuraHealth** page).

3. Enter the Jira issue in **Jira Requirements** (e.g., **KAT-104**), then click on the *Link* icon.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-ka-integration-jira/linking-test-case-step-red.png"  width=100% alt="link test case to jira requirement">

    The Jira issue now appears under the **ID/Feature** section.
    
    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-ka-integration-jira/kat104-under-idfeature-section.png"  width=100% alt="jira issue appears after linking">
    
    Click on the Jira issue to go to Jira and view the linked Test Case.

## View linked Test Cases in Jira

After linking a Test Case to Jira Requirements, you can click on the Jira issue in Katalon TestOps, and it directs you to the Jira issue in Jira.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-ka-integration-jira/kat104-link-test-case-to-jira-blurred.png"  width=100% alt="see linked test case in jira">

Click on the **Linked Test Cases** section to see the details of linked Test Cases.

## View Requirements in Katalon TestOps

1. Go to your Project > **Test Management** > **Requirements**.

2. Scroll down to the **Requirements** section on the **Requirements** page to view all Jira issues with linked Test Cases.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-ka-integration-jira/requirement-page-with-jira-kat-issues-list.png"  width=100% alt="see linked test case in jira">

See also:
* [Link Test Runs to Jira Defects](https://docs.katalon.com/katalon-analytics/docs/ka-defects.html).