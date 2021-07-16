---
title: "View BDD Test Results in Katalon TestOps"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/bdd-test-results.html
---

Behavior-driven development (BDD) is enabled in Katalon Studio. From Katalon Studio version **7.8 onwards**, you can integrate BDD-enabled Projects with Katalon TestOps.

By doing so, you can see native BDD Test Results with their Features and Scenarios.

> Requirements:
>
> * You have a BDD Project in Katalon Studio. See: [BDD Testing Framework (Cucumber integration)](https://docs.katalon.com/katalon-studio/docs/cucumber-features-file.html).
>
> * You have enabled Katalon TestOps integration in Katalon Studio. See: [Upload Test Results to Katalon TestOps from Katalon Studio](https://docs.katalon.com/katalon-studio/docs/katalon-analytics-beta-integration.html).

## Upload and view BDD Test Results in Katalon TestOps

### Configure BDD Settings

You can configure BDD Settings in Katalon TestOps to upload BDD Test Results automatically.

Follow these steps:

1. Sign in to [Katalon TestOps](https://testops.katalon.io/login) and go to your Project.

2. Click on the *Settings* icon at the top right corner, and choose **Project Settings**.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/project-setting-button-in-kto-settings.png"  width=100% alt="project setting button">

    The **Project Settings** page appears.

3. Scroll down to the **Configurations** section, then check the **Enable BDD reports** box.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/enable-bdd-reports-box-in-project-settings-page.png"  width=100% alt="enable bdd report box in testops">

### View BDD Test Results

Once you have configured BDD Settings, Katalon TestOps recognizes and processes BDD-based Test Results.

To view BDD Test Results, follow these steps:

1. Go to your Project > **Test Management** > **Requirements**.

    The **Requirements** page appears as below.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/bdd-features-in-requirement-page.png"  width=100% alt="bdd requirements page">

2. Scroll down to the **Requirements** section.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/requirement-page-scrolldown.png"  width=100% alt="bdd requirements page scrolldown">

    You can see the Features of your BDD Tests displayed in the **Name** column (the green icon next to each Name is a *Feature* icon).

3. Click on one of the Features (e.g., **Multiply**).

    You can see the Scenario of your BDD Test (the blue icon is a *Scenario* icon).
  
    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/multiply-scenarios.png"  width=100% alt="bdd scenario icon">

    The Scenarios also appear on the **Test Runs** page (go to **Reports & Analytics** > **Test Runs**).

### View BDD Test Results in Traceability Matrix

In the **Reports** section on the **Requirements** page, select **Traceability Matrix** to view BDD Test Results and manage the relationships across BDD Features (displayed in the **Requirements** column), BDD Scenarios (displayed in the**Test Cases** column), and Defects.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-bdd-test-results/traceability-matrix-bdd-page.png"  width=100% alt="traceability matrix page">
