---
title: "TestLink Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/testlink-integration.html

description: Documentation for TestLink Integration plugin 
---

### TestLink Installation

* Download XAMPP from the below link.
[https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

* Upon successful installation, Tomcat will be started by default.

* Start the Apache and MySQL services from XAMPP Control Panel.

![](../../images/katalon-studio/docs/Testlink/1-XAMPP-control-panel.png)

* Download the TestLink from the below link. Currently, the latest version of TestLink is 1.9.19. You can use the latest version for the Integration.
[https://sourceforge.net/projects/testlink/files/TestLink%201.9/](https://sourceforge.net/projects/testlink/files/TestLink%201.9/) 

* Extract TestLink and place it on XAMPP’s “htdocs” directory. 

* Hit the below URL in any browser. 
[http://localhost/phpmyadmin/](http://localhost/phpmyadmin/) 

* Create a new database called “testlink” from the database menu. 

* Add a user account from the “Privileges” tab under “More” options for “testlink” database.

![](../../images/katalon-studio/docs/Testlink/2-Add-user-1.png)

![](../../images/katalon-studio/docs/Testlink/3-Add-user-2.png)


* Hit the below URL in any browser to open the testlink installation setup. 
[http://localhost/testlink-1.9.16/install/index.php](http://localhost/testlink-1.9.16/install/index.php) 

* Check the “I agree to the terms set out in this license” checkbox and click “Continue” button.

![](../../images/katalon-studio/docs/Testlink/4-Agree-term.png)


* The below permissions will be failed.

![](../../images/katalon-studio/docs/Testlink/5-Testlink-package.png)

* Navigate to the testlink package and open the “config.inc.php” file. 

* Update the parameters as below 

**$tlCfg->log_path = ‘D:/xampp/htdocs/testlink-1.9.16/logs/’; (Path of testlink package)** 

**$g_repositoryPath = ‘D:/xampp/htdocs/testlink-1.9.16/upload_area/’; (Path of testlink package)** 

* Refresh the page and the above “failed” status will be resolved.

![](../../images/katalon-studio/docs/Testlink/6-Failed-permission.png)

* Click the “Continue” button. 

* Enter the Database name as “testlink”. 

* Enter the Database admin login and password as “admin”. 

* Enter your database username and password for “TestLink DB login and password”.

![](../../images/katalon-studio/docs/Testlink/7-Process-testlink-setup.png)

* Click the  “Process TestLink Setup!” button. 

* Once the installation is completed, a window will be displayed to notify that the Installation was successful.

![](../../images/katalon-studio/docs/Testlink/8-Successful.png)

### TestLink Login

* Hit the below URL to login to TestLink. 
[http://localhost/testlink-1.9.16/](http://localhost/testlink-1.9.16/) 

* Enter the Login Name and Password as “admin” to login as admin.

![Testlink login](../../images/katalon-studio/docs/9-Testlink-login.png)

* Once you login to TestLink, it prompts to create a Test Project. 

* Create a Test Plan, Build, Test suite with Test cases by selecting the corresponding links from the Dashboard.


### Test Project Creation

![](../../images/katalon-studio/docs/Testlink/10-Test-project-creation.png)


### Test Plan Creation

![](../../images/katalon-studio/docs/Testlink/11-Test-plan-creation.png)

### Build Creation

![](../../images/katalon-studio/docs/Testlink/12-Build-creation.png)

### Test Suite Creation

![](../../images/katalon-studio/docs/Testlink/13-Test-suite-creation.png)


### Test Case Creation

![](../../images/katalon-studio/docs/Testlink/14-Test-case-creation.png)


### API Key Generation and Execution Type Changes on TestLink


1. Generate the API Key on TestLink as below.

• Click the “My Settings” icon next to logout.

• Personal API access Key will be “none” under the “API Interface” section. 

• Click “Generate a new key” button.

• Key will be generated from “Personal API access key”.

![](../../images/katalon-studio/docs/Testlink/15-API-key.png)

2. After generating a key, update the test execution status as “Automated” as below.

![](../../images/katalon-studio/docs/Testlink/16-Automated-status.png)


### Integration of Katalon test scripts with TestLink

Make a note of the TestLink Key, Testlink Url, Project Name, Test Plan Name, and Build Name created on TestLink. These details need to be used in our configuration in below:

Go to **Project Settings** > **Plugin** > **TestLink Integration** and setup these following configurations:

![](../../images/katalon-studio/docs/Testlink/17-Testlink-integration.png)


This plugin provides the only custom keyword updateResults to update the test results on Testlink.

### Test Execution Results update on TestLink
Before execution, the test status will be “Not Run” on Testlink.
If the test case is passed, the status will be updated as “Passed”.

![](../../images/katalon-studio/docs/Testlink/18-Passed.png)


If the test case is failed, the status will be updated as “Failed”.

![](../../images/katalon-studio/docs/Testlink/19-Failed.png)


