---
title: "TestRail Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/testrail-integration.html

description:
---

TestRail plugin establishes the connection between Katalon Studio project and TestRail to synchronize tests, map test cases, and update test execution results in real time.

*Note*: To get TestRail plugin, visit [Katalon Store](https://store.katalon.com).

Please make sure your TestRail is configured correctly. See [TestRail documentation](http://docs.gurock.com/testrail-userguide/start) for more information.

After the plugin has been installed from Katalon Store, go to Katalon Studio and click **Reload Plugins**. Learn more on [how to reload plugins](https://docs.katalon.com/katalon-store/docs/user/access-store-in-KS.html#reload-plugins).

## Connect to TestRail

Enter *URL* , *username* , *password* , and *ID* of an existing project in TestRail. Click *Apply* to save. To find the **project ID**, open your project in TestRail > view the TestRail Project URL.

![](../../images/katalon-studio/docs/testrail-integration/1_connect.png)

## Map test cases in Katalon to test cases in TestRail

Choose one Test case -&gt; integration tab -&gt; enter ID of test case in TestRail -&gt; Save

![](../../images/katalon-studio/docs/testrail-integration/2_mapping.png)

## Sending result to TestRail

After running a **Test Suite** in Katalon, depends on the name of Test Suite, a corresponding Test Run in TestRail will be created or updated.

Let's look at examples below:

### Test Suite is existing in both Katalon Studio and TestRail

Test Suite's name starts with R_ID (ex R1, R123, ...). The result will be sent to Test Run has that ID.

Example:
* Katalon Studio's Test Suite: R1
* Test Rail: Update Test Rail

![](../../images/katalon-studio/docs/testrail-integration/3_1_sending.png)

### Test Suite is existing in Katalon Studio but NOT in TestRail

A new Test Run will be created with Test Suite's name starts with S_ID (ex S1, S123, ...).
* Katalon Studio's Test Suite: S1
* Test Rail: NEW Test Run in Test Suite S1 is created

![](../../images/katalon-studio/docs/testrail-integration/3_2_sending.png)

### Others

Skip.

## Query TestRail in Dynamic Test Suite Querying

> Learn more about [Dynamic Querying Test Suite](https://docs.katalon.com/katalon-studio/docs/dynamic-querying-test-suite.html).

Enter Test Run ID. The result will be a list of Katalon Test Case in that Test Run.

![](../../images/katalon-studio/docs/testrail-integration/4_querying.png)
