---
title: "Bamboo Add-on"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/bamboo-addon.html
    
description:
---
The Katalon Studio for Bamboo plugin enables you to download, deploy and execute Katalon Studio tests on Bamboo CI server automatically. Try it free on [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1220235/katalon-studio-for-bamboo). 

Prerequisites
-------------

Installing and configuring Katalon plugin for Bamboo is relatively easy, however, you will need Bamboo administrative permission. 

Installation
------------
1. Log into your Bamboo instance as an admin.
2. Click the admin dropdown and choose Atlassian Marketplace.
3. Click Find new apps or Find new add-ons from the left-hand side of the page.
4. Locate **Katalon Studio for Bamboo** via search.
5. Click **Try it free** to begin a new trial or **Buy now** to purchase a license for Execute Katalon Studio Tests.
6. Enter your information and click **Generate license** when redirected to MyAtlassian.
7. Click **Apply license**.

Configuration Steps
-------------------
Once you have installed the plugin, you will need to configure **Execute Katalon Studio Tests** task to complete the integration. 

1. Create and configure a new plan in Bamboo. Read more on Atlassian’s instructions to create a new plan [here](https://confluence.atlassian.com/bamboo/creating-a-plan-289276868.html).

2. Configure job

   Add task **Execute Katalon Studio Tests** to your job list. You can quickly lookup Execute Katalon Studio Tests from the search box or find it under the Tests category. 
    ![](../../images/katalon-studio/docs/bamboo-integration/bamboo-tasktypes.png)

3. Set up the plugin
    
    3.1. Katalon Studio will be automatically downloaded if you specify the Katalon version. You can also provide a link to Katalon Studio location in case you have it already installed. 

    3.2. Regarding the **Command Arguments**, you can enter the arguments directly in the text area or generate them from your in use Katalon Studio. Please leave out any irrelevant argument such as -runmode. 
    ![](../../images/katalon-studio/docs/bamboo-integration/bamboo-commandarguments.png)

    For your ease of configuring, check out the list of supported Katalon command options and how to generate command in this [article](https://docs.katalon.com/katalon-studio/docs/console-mode-execution.html#katalon-command-line-options).

    3.3. X11 DISPLAY and Xvfb-run configuration
    
    If you want to learn more about xvfb-run configuration please see [its manual](http://manpages.ubuntu.com/manpages/xenial/man1/xvfb-run.1.html). If you are not sure, only change the resolution 1024x768x24 and leave other options as-is.
    ![](../../images/katalon-studio/docs/bamboo-integration/bamboo-x11.png)

Artifacts
---------

If you want to keep Katalon Studio artifact from the build, you can specify the **Copy Pattern** as "Reports/**/*.*"
![](../../images/katalon-studio/docs/bamboo-integration/bamboo-artifactdefinition.png)

After build, file created by Katalon Studio execution will be stored under the “Artifacts" tab.
![](../../images/katalon-studio/docs/bamboo-integration/bamboo-viewartifact.png)

