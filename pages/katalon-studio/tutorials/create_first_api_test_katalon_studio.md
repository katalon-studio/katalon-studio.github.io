---
title: "Create your first API test with Katalon Studio"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create_first_api_test_katalon_studio.html
description: "API testing has become more important. This tutorial will demonstrate how to use Katalon Studio to create your first API test from scratch."
redirect_from:
    - "/katalon-studio/tutorials/create_first_api_test_katalon_studio.html"
---

Introduction
------------

**API testing** (or Web service testing in the context of a Web application) has become more important in software testing. The interest in API testing has been increasing over the last five years, according to [Google Trends](https://trends.google.com/trends/explore?date=today%205-y&q=api%20testing). This trend possibly indicates that the demand for applying API testing has become more prevalent. Testing API or web services is no longer performed solely by the original developer. This activity is now a common practice among outsourcing teams who independently verify and validate their products.

This tutorial will demonstrate how to use Katalon Studio to create your first API/Web service test from scratch with good practices.

Installing and setting up Katalon Studio
----------------------------------------

Please refer to the guide for all the basic steps, from downloading to activating the build [Installing and Setting up Katalon Studio](https://www.katalon.com/resources-center/tutorials/web/get-started/install-setup-katalon-studio/).

Creating a new project and setting up API automation test
---------------------------------------------------------

### Step 1: Create a new project

*   Go to **File** \-> **New** \-> **Project** and enter a project name and its location to start a new project.

![Create new project using Katalon Studio](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09134249/API-Testing_Tutorial-1.png)

*   Once the project is confirmed to be created, we will see a folder structure in the **Test Explorer** This folder system is responsible to keep all the test resources and is also the place where we start our first API test.

### Step 2: Create the first API test

Before creating our first API test, let's have a look at the format we use to set up a testing project.

**Object Repository**

*   Object Repository is a place which stores all the Web service endpoints along with all information of Request method, URL, Header, Content, and Authentication.
*   Web service test objects in Object Repository are integrated by a folder system for better management.

**Test Cases**

*   Test Cases stores all test scenarios and is grouped by a folder system. Each test case includes a few steps illustrating a test scenario.
*   We can execute a test case individually with a specified execution profile.

**Test Suites**

*   Test Suites is the place where all test suites are stored. A test suite is a collection of test cases verifying a specific target.
*   Test cases at the test suite level can be executed with a data-driven approach.
*   Test reports are also generated at the test suite level

**Test Suite Collection**

*   Test Suite Collection is a collection of Test Suites verifying a larger target.
*   Test Suite at Test Suite Collection level has specific Test environments specified.

![Set-up API testing project](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09134404/API-Testing-Tutorial-2.png)

### Step 3: Create a new RESTful endpoint at Object Repository

**Object Repository** -> **New** \-> **Web Service Request**

![new RESTful endpoint at Object Repository](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09134648/API-Testing-Tutorial-3.png)

Katalon Studio stores Web service endpoint for testing at **Object Repository**, which is similar to **Test Object** in UI Test. At the **Create New Web Service Request** dialog, you can either choose to create a RESTful or a SOAP request.

**Request type** is a required field. You need to specify it exactly at this step. In contrast, **URL** is not required. You can set this value later in the next step.

![web service request](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09134747/API-Testing-Tutorial-4.png)

Click **OK**, then we are ready to input more details to the first RESTful test.

![Create RESTful test Katalon Studio](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09134920/API-Testing-Tutorial-5-1024x522.png)

There are some important concepts needed to specify when testing a RESTful request:

**(1) Request method**

We can choose one of these following methods for your first request test: **GET, POST, PUT, DELETE**. The method needs to match with the URL to have a valid request. For instance, let's assume that our first test is a public API from Jira Cloud version. We should use the **GET** method to receive information on an existing ticket using its ID.

**(2) Request URL**

Along with the request method, **request URL** is used to tell the web server which API is utilized under test. Any mismatch between method and URL will lead to invalid request exception at runtime or wrong data response.

**(3) Authorization**

Authorization is an essential part of an API. It is used to get the correct data under permission (unless the data is public). Katalon Studio supports common authentication methods:

The basic method requires username and password. Don't forget to click **Update to HTTP Header** so that the authentication can be applied to **HTTP Header**.

![Update to HTTP Header](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09135433/API-Testing-Tutorial-6.png)

![HTTP Header](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09135739/API-Testing-Tutorial-7.png)

**(4) Verification**

Verification is the place where you define the assertion to ensure the response will contain the expected information.

![Verification API Testing Katalon Studio](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09135952/API-Testing-Tutorial-8.png)

The verification tab of a request is similar to the Script tab of a test case. In other words, you can write custom scripts with built-in keywords or Groovy/Java scripts to verify the response data. Besides built-in keywords, Katalon Studio also supports built-in snippets, which help you to generate assertions with a single click. It is useful for testers who might find it difficult to deal with parsing and to assert with JSON data format.

The right panel of the request is the response displayed in nice format automatically and the result of verification at Verification Log. To include verification script when sending the request, you need to choose the **Test Request and Verify** option from the execution button.

The Verification script helps you have quick feedback of the request status rather than an actual test. You can add more assertions to the test case level in the next step.

**(5) Variables**

Variables make API testing more robust and dynamic with the data-driven approach. In Katalon Studio, every part of the request can be parameterized. In other words, dynamic data can be used for: URL, Authentication, HTTP Header, and HTTP Body to maximize the capability of data-driven testing. Following setup works the same with the above example:

![Variables API Testing Katalon Studio](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09140230/API-Testing-Tutorial-9.png)

**(6) Formatter**

The response will be automatically displayed in a neat format: JSON, XML, HTML, and JavaScript. It is helpful for a quick view of the response status.

### Step 4: Create a new test case with an existing request

While the request at **Object Repository** is helpful for fast testing, we can add the request verification at the test case level for better managing and reporting.

### Step 5: Add an existing request to a test case

A request can be inserted into a test case with Web service built-in keywords. There are many keywords can be used to send the request, to verify the response, and to make the request as part of a bigger testing flow.

![Web service built-in keywords](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09140539/API-Testing-Tutorial-10.png)

Following test case illustrates how we can call the request with verification steps from a test case:

![call request verification](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09140705/API-Testing-Tutorial-11.png)

The test case can be executed as a normal test case in Katalon Studio. Each verification step can be viewed from the log.

![view test case log](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09140800/API-Testing-Tutorial-12.png)

### Step 6: Add the test case to the test suite

A test case can be added to a test suite via either the drag-and-drop feature or the **Add test case** tool. Once the test case is added to the test suite, we can execute the whole test suite with the Run button (without selecting the browser as in UI testing).

![execute test suite](https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2018/10/09141552/API-Testing-Tutorial-13.png)

### Next steps

Now we finish creating our first test. In order to create tests for a real project with a practical solution, we would need to create more tests with more techniques:

*   Parameterize your tests
*   Apply data-driven approach
*   Create custom keywords/packages
*   Call tests and reuse code
*   Include error handling
*   View test reports after test suite execution

Katalon new features
--------------------

Katalon Studio has recently had a new monthly release to [support BDD Cucumber](https://docs.katalon.com/katalon-studio/new/version-570.html) which is a testing approach in which test cases are written in natural languages to improve the communication between technical staff and business stakeholders. BDD Cucumber also helps create test scenarios for the acceptance test phase.

```gherkin
@Issue_Tests
Feature: Verify issue information

Background:
      Given The Jira System is available

  @Get_By_Id
  Scenario: Verify issue information by Id
    When I get information of an issue with Id "KD-1"
    Then I get response code "200"
    And The issue information as below:
        |project_key |issue_type |priority |summary                          |
        |KD          |Bug        |Low      |REST - Create new issue using API|

  @Get_By_Id
  Scenario Outline: Verify issue information by Id
    When I get information of an issue with Id "<issue_key>"
    Then I get response code "200"
    And The issue information as below:
        |project_key   |issue_type   |priority   |summary   |
        |<project_key> |<issue_type> |<priority> |<summary> |

  Examples:
  |issue_key|project_key |issue_type |priority |summary                          |
  |KD-1     |KD          |Bug        |Low      |REST - Create new issue using API|
  |KD-2     |KD          |Bug        |Low      |Update summary from API example  |
```

Conclusion
----------

This complete tutorial helped us go through all the steps and concepts needed for users to create the first API test. In order to achieve the best outcomes and save time and effort, we have to learn how to use API testing properly. For example, we need to have an appropriate implementation of techniques and awareness of whether an API should be tested automatically or manually. Therefore, if we make enough effort and master your Katalon Studio skills, the tool will definitely help us significantly increase the quality of any target product.