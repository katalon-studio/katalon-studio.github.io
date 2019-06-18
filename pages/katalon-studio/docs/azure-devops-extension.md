---
title: "How to use Katalon for Azure DevOps"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/azure-devops-extension.html 
description: To show instrcutions of how to install and setup Azure DevOps extension.
---
This tutorial shows you the step by step guide on how to install and run Katalon for Azure DevOps for Web UI testing.


## Installation

To install Katalon for Azure DevOps extension, follow these steps below:



1. Go to [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/azuredevops)
2. In Azure DevOps tab, search for the extension
3. Install the extension


## Configuration steps

Once you have installed the extension, you will need to configure Execute Katalon Studio Tests task to complete the integration.

1. In Azure DevOps, add task **Execute Katalon Studio Tests** to your list. You can quickly lookup Execute Katalon Studio Tests from the search box or find it under the Task category.

![](../../images/katalon-studio/docs/azure-devops-extension/1-search.png)


2. Regarding the Command Arguments, you can enter the arguments directly in the text area or generate them from your in use Katalon Studio. Please leave out any irrelevant argument such as -runmode.

![](../../images/katalon-studio/docs/azure-devops-extension/2-command.png)


3. X11 DISPLAY and Xvfb-run configuration

If you want to learn more about xvfb-run configuration please see its manual. If you are not sure, only change the resolution 1024x768x24 and leave other options as-is.

See [Common Configuration]([https://docs.katalon.com/katalon-studio/docs/common-configuration.html#strongcommand-argumentsstrong](https://docs.katalon.com/katalon-studio/docs/common-configuration.html#strongcommand-argumentsstrong)) for more details.

4. After everything is setup, click **Queue** button to build.

![](../../images/katalon-studio/docs/azure-devops-extension/3-result.png)

![](../../images/katalon-studio/docs/azure-devops-extension/4-result.png)


Refer to this [sample project]([https://github.com/katalon-studio-samples/azure-devops-extension-samples](https://github.com/katalon-studio-samples/azure-devops-extension-samples)) for your reference.