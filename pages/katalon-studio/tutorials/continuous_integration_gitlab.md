---
title: "Continuous integration with Gitlab"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/continuous_integration_gitlab.html
redirect_from:
    - "/katalon-studio/tutorials/continuous_integration_gitlab.html"

description: "This tutorial walks through the steps needed to automatically run your Katalon test suites when you push any change on your Gitlab repository."
---

**About the Author**

Ahmed Hussein Karam, Software Engineer

Contact Ahmed at [https://www.linkedin.com/in/ahmed-hussein-86b147153/](https://www.linkedin.com/in/ahmed-hussein-86b147153/)

### Introduction

When you make changes to your project source code, you definitely need to run Katalon tests again to make sure that changes are correct. But you may find it boring to run them every now and then, with a possibility to forget to do that. Here, Continuous Integration becomes very important, as it allows you to automate the _Change-Then-Test_ process.

This tutorial walks through the steps needed to automatically run your Katalon test suites when you push any change on your Gitlab repository.

### Requirements

*   You have a Gitlab account and you already put your web app in a Git repository. You can [download](https://www.dropbox.com/s/g11qaai2yavtviw/Login%20app.zip?dl=0) this sample php application to be able to go through.
*   You have a web server hosting your application (e.g. XAMPP Apache Server).
*   You have Katalon Studio installed and you have created a test suite with one or more test cases.
*   This tutorial is limited to Windows. But you may perform similar steps on other platforms.

Register and install Gitlab runner
----------------------------------

Download Gitlab runner for [x86](https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-386.exe) or [amd64](https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-amd64.exe), then follow the steps in the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/musOoRSDEu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Note:** we added the tag "shell" in order to run test cases on the local machine. However, you can add other tags like docker and ssh.

Add a configuration file to your repository
-------------------------------------------

In the root directory of your repository, add file named .gitlab-ci.yml. Open the file and type the following:

```groovy
run_katalon_test_suite:
      tags:
        - shell
      script:
        - katalon -noSplash  -runMode=console -consoleLog -projectPath=
          "<Your_Project_Directory>" -retry=0
          -testSuitePath="Test Suites/<Test_Suite_Name>" -executionProfile=
          "default" -browserType="Chrome (headless)"

```

**Note:** typically, your default project directory is _"C:\\Users\\<USERNAME>\\Katalon Studio\\<PROJECT\_NAME>\\<PROJECT\_NAME>.prj"_

If you want to start your web server automatically before running test cases, add a command at the beginning of the configuration file. For example, to open XAMPP apache server, add this command at the beginning of the file:

```groovy
before_script:
      - start /B cmd /K "<Path_To_HTTPD_Executable>"

```

**Note:** typically, the default httpd.exe file location in XAMPP is _"C:\\xampp\\apache\\bin\\httpd.exe"_

If you want to stop your web server after executing test cases, add a command at the end of your script. For XAMPP apache server, the command is "taskkill /F /IM httpd.exe". So, the final file should look like this:

```groovy
before_script:
      - start /B cmd /K "<Path_To_HTTPD_Executable>"

    run_katalon_test_suite:
      tags:
        - shell
      script:
        - katalon -noSplash  -runMode=console -consoleLog -projectPath=
          "<Your_Project_Directory>" -retry=0
          -testSuitePath="Test Suites/<Test_Suite_Name>" -executionProfile=
          "default" -browserType="Chrome (headless)"
        - taskkill /F /IM httpd.exe

```

Add Katalon path to environment variables
-----------------------------------------

*   Go to Control Panel > System and Security > System
*   Click on "Advanced system settings" on the left pane

![Add Katalon Path](../../images/katalon-studio/tutorials/continuous_integration_gitlab/1.png)

*   Choose "Advanced" tab and click "Environment Variables…"

![Katalon Environment Variables](../../images/katalon-studio/tutorials/continuous_integration_gitlab/2.png)

*   In "System variables" section, choose the variable "Path" and click "Edit…"

![Katalon System variables](../../images/katalon-studio/tutorials/continuous_integration_gitlab/3.png)

*   In the "variable value" field add ; then the directory of Katalon Studio

![Katalon Edit System Variables](../../images/katalon-studio/tutorials/continuous_integration_gitlab/4.png)

**Note:** the first 3 steps are needed only once.

Make changes and test
---------------------

After saving some changes, push them to your git repository. After that, open the repository > CI/CD > Pipelines

![gitlab changes and test](../../images/katalon-studio/tutorials/continuous_integration_gitlab/5-1024x463.png)

*   You can see one of the following marks in your pipeline:

![pipeline](../../images/katalon-studio/tutorials/continuous_integration_gitlab/pipeline.png)

Now, click on the job link.

![Run Katalon Test Suite](../../images/katalon-studio/tutorials/continuous_integration_gitlab/6.png)

*   See testing results (you may need to wait some time to see results)

![Katalon Testing Results](../../images/katalon-studio/tutorials/continuous_integration_gitlab/7-1024x491.png)

**Note:** you can see an error like this:

![Katalon Error run test](../../images/katalon-studio/tutorials/continuous_integration_gitlab/8.png)

If you see it, run the command below from your local git repository and try again.

```groovy
git config --system http.sslverify false

```

Conclusion
----------

Once you have Katalon test cases prepared, you only need to focus on updating your project. You will no longer need to repeatedly go and run test cases manually after each update, because this process is already automated. You are just informed whether your commits are successful or not. However, you can still find detailed testing reports in the Reports folder that is located in your Katalon Studio project root directory. The development and testing processes can be summarized in the following diagram:

![Development and testing processes](../../images/katalon-studio/tutorials/continuous_integration_gitlab/9.png)
