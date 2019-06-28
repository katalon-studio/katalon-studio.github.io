---
title: "How to use Katalon plugin for Jenkins on Windows" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/jenkins-plugin-windows.html 
description: Guidelines of how to use Jenkins plugin on Windows
---
This tutorial shows you the step by step guide on how to install and run Katalon – Jenkins plugin for Web UI testing on Windows platform.

## Prerequisite

You must have already installed Jenkins for Windows (click [here](https://jenkins.io/doc/book/installing/) for a guide) and the browser you’d like to use for the test.

## Install Katalon Studio plugin

Go to _Manage Jenkins > Manage Plugins > Available tab_ and find Katalon plugin on the list. Select and click Install.

![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture1.png)


**Create and configure a new Jenkins project**

Now, go back to the top page, you can start using the plugin right away. Click on “New Item”

![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture2.png)

To keep it simple, let's make it a freestyle project.

![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture3.png)

Next step, tell Jenkins your workspace or simply use git. There is a sample Katalon Studio a project on [Github](https://github.com/katalon-studio-samples/ci-samples) for a quick test.


![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture4.png)

Next, add and configure the build step _Execute Katalon Studio tests_.


![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture5.png)


![](../../images/katalon-studio/docs/jenkins-plugin-windows/Picture6.png)

Katalon Studio will be downloaded and installed automatically based on the version you specify. And later, your tests will be executed automatically too.

Now, everything is setup, we can just press build now. Hope it helps!