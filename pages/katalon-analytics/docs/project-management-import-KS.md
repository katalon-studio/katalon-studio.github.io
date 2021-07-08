---
title: "Upload Test Results to Katalon TestOps from Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/project-management-import-KS.html
redirect_from:
    - "/display/KA/From+Katalon+Studio/"
    - "/display/KA/From%20Katalon%20Studio/"
    - "/x/wBxO/"
    - "/katalon-analytics/docs/project-management-import-KS/"
    - "/katalon-studio/tutorials/upload_test_execution_reports_katalon_analytics.html"
description:
---

> Notes:
>
> Katalon Studio version **7.0 onwards** supports video capture of test results when uploading them to Katalon TestOps.

From Katalon Studio, you can upload Test Results to Katalon TestOps manually or automatically.

## Upload Test Results automatically

Follow these steps:

1. Open Katalon Studio.

2. Go to **Project** > **Settings** > **Katalon TestOps**.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/enable-kto-integration-in-ks.png"  width=100% alt="ks project setting testops integration">

3. Tick on the **Enable Katalon TestOps Integration** checkbox.

    Wait for Katalon Studio to connect to Katalon TestOps.
    
    Once the connection is successful, Katalon Studio retrieves all Teams and Projects from the Organization you belong to.
    
4. Choose your Team and Project in a dropdown menu of the **Team** and **Project** sections.

    If you are the Owner or Admin, you can also click **New Project** to create a new Project instead.

5. Click **Apply and Close**.

Once you have enabled Katalon TestOps integration in Katalon Studio, your Test Results are automatically uploaded to TestOps Center every time you run Test Suites in Katalon Studio.
    
<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/automatic-upload-report-to-testops-from-ks.png"  width=100% alt="automatic upload of test reports to kto">

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/test-suit-upload-to-testops-page.png"  width=100% alt="see uploads in testops page">

### Switch Organization in Katalon Studio

You can switch to a different Organization in Katalon Studio by following these steps:

1. Open Kataln Studio and click on the *Profile* icon at the top right corner.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/profile-icon-in-ks.png" width=100% alt="switch organization in ks">

2. Select **Deactivate**.

    The **Katalon Studio Activation** box displays.
    
3. Type the email address and password, then click **Activate**.

To verify if you have overridden the authentication successfully, click on the *Profile* icon again and select **View Dashboard**.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/view-dashboard-in-ks-after-switching-org.png" width=100% alt="view dashboard button in ks">

You will be navigated to the Project's **Dashboard** in Katalon TestOps.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/to-dashboard-on-browser.png
" width=100% alt="testops dashboard page">

## Upload Test Results manually

You can also upload Test Results manually by following these steps:

1. Open Katalon Studio and go to the Project you are working on.

2. Go to **Test Suites** or **Test Suite Collection** and choose your Test Suite.

    Select the **Result** tab.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-test-uploads-to-kto-from-ks/manually-upload-test-result-to-TO-from-KS.png" width=100% alt="upload manually from ks to testops">

3. Click on the **Katalon TestOps** tab at the top right corner and select **Upload**.

4. Choose the Team and Project you want to upload Test Results to.

5. Click **Upload**.

You have uploaded Test Results manually to Katalon Testops.
