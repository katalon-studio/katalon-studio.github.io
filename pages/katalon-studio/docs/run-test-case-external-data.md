---
title: "Run Test Case with an external data source"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/run-test-case-external-data.html
description: Guidelines about how to run test case with an external data in Katalon Studio
---

## Import an Excel file to Test Data

Refer to [this article]([https://docs.katalon.com/katalon-studio/docs/manage-test-data.html#create-an-excel-test-data](https://docs.katalon.com/katalon-studio/docs/manage-test-data.html#create-an-excel-test-data)) to learn how to create a new Excel Test Data in Katalon Studio.

Data from the selected Excel file will be populated into the preview section as the below example.

![](../../images/katalon-studio/docs/run-test-case-external-data/1-new-excel-test-data.png)


## Create a new Test Suite with Test Case Variables

Open a Test Suite, then select option **Add** from command toolbar. 

All test cases in Katalon Studio will be displayed in the **Test Case Browser** dialog. The selected test case will be added in the test case list like this following example.


![](../../images/katalon-studio/docs/run-test-case-external-data/2-new-test-suite.png)



## Manage Data Binding

1. Click on **Show Data Binding** to load the data details from the selected test case.

The **Data Binding Section** with **Test Data table** and **Variable Binding** will be displayed as follows:


![](../../images/katalon-studio/docs/run-test-case-external-data/3-show-data-binding.png)


2. In the expanded **Data Binding section**, select **Add**. Then select the data for your test case to continue. The selected test data will be added to the list accordingly.

![](../../images/katalon-studio/docs/run-test-case-external-data/4-display-data-binding.png)



## Bind Variables to Test Data

1. Select all data and choose **Set Type**, then set them as **Data Column**.


![](../../images/katalon-studio/docs/run-test-case-external-data/5-set-type.png)


2. Click on **Set Test Data** to decide which test data from the list to be used for execution.


![](../../images/katalon-studio/docs/run-test-case-external-data/6-set-test-data.png)


3. Click on **Value** cell to specify the data field of test data to be used.

Let’s have a look at the following example:


![](../../images/katalon-studio/docs/run-test-case-external-data/7-after-setting.png)


After finishing all these steps above, run the test case and you will see the result as following:


![](../../images/katalon-studio/docs/run-test-case-external-data/8-result.png)

