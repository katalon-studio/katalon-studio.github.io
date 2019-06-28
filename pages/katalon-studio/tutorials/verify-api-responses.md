---
title: "How to verify API responses in Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verify-api-responses.html
redirect_from:
    - "katalon-studio/tutorials/verify-api-responses.html"
description: "The tutorial will show you how to verify an API responses with a simple step"
---

Verifying an API response is always a challenging task of API testing. Some testers may find it hard to understand the JSON/XML response format; while some others struggle with getting the value of a specific key to verify. It is even harder when the response is big enough with the complex data structure.

Starting from version 5.8.3, Katalon Studio has released a new feature that targets solving those issues with a simple step. In this tutorial, you will learn how to use this feature to verify API responses.

If you haven't created any API tests using Katalon Studio, please follow this link ([Create your first API test with Katalon Studio](https://docs.katalon.com/katalon-studio/tutorials/create_first_api_test_katalon_studio.html)) to get familiar with the tool.

## Verifying REST response in JSON format ##

Assume that you have run an API, which returned a response in JSON format

![rest-response-json](../../images/katalon-studio/tutorials/verify-api-responses/REST%20response%20in%20JSON.png)

The below steps will show you how to verify the response:
      
1. Hover your cursor over the property you want to verify.

2. You will see the information about JsonPath of the property you want to verify. Press the compose key **“Ctrl + K”** (on Windows) or **“Cmd + K”** (on Mac).

3. A statement will be generated to verify the selected property.

## Verifying SOAP response in XML format ##

Assume that you have run an API, which returned a response in XML format

![verify-soap-response-xml](../../images/katalon-studio/tutorials/verify-api-responses/SOAP%20response%20in%20XML.png)

The steps below will help you verify the response:

1. Hover your cursor over the element you want to verify.

2. You will see the information about XmlPath of the element you want to verify. Press the compose key **“Ctrl + K”** (on Windows) or **“Cmd + K”** (on Mac).

3. A statement will be generated to verify the selected element.

## Run tests with generated verification statements ##

To run both types of **request** with the generated verification statements, you need to choose the option **“Test Request and Verify.”**

![verification-statements](../../images/katalon-studio/tutorials/verify-api-responses/Verification%20statements.png)

1. First, select **“Test Request and Verify”** from the **Run** menu to send the request and verify the response.

2. The verification results will be displayed in the **Verification Log** tab.

Congrats! You have successfully verified the response in both JSON and XML formats without having to know how to get JsonPath or XmlPath. We hope this tutorial will help remove the difficulty of verifying API responses.
