---
title: "Use Plugins in Katalon Studio's Console Mode"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/user/plugin-console-installation.html
redirect_from:
    - "/katalon-store/docs/user/plugin-console-installation/"

description: How to install plugin directly from console
---

Before getting started, refer to [API Keys Settings](https://docs.katalon.com/katalon-store/docs/user/API-key.html) to learn how to generate and manage API keys in Katalon Store.

## Apply API Keys in Katalon Studio Commandline Execution


1.  Generate a new API key or using an existing key
2.  Add the **apiKey** parameter to the execution command line. \
<span style="text-decoration:underline;">For example:</span> \
`katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath="C:\Users\Katalon Studio\Project\YourProject.prj"` `-retry=` `0` `-testSuitePath="Test Suites/TS_RegressionTest"` <code>-browserType="Chrome (headless) <strong>-apiKey=e4c46ee7-0179-4309-a7bf-c0530bf61d07 \
</strong></code>
3.  Plugins installed by the API key owners will be downloaded and installed to Katalon Studio before execution. Functions of the plugins will be triggered accordingly.

## Install a plugin directly from console

1. Generate a new API key by going to [Security](https://store.katalon.com/account#security-content) tab in [My Account](https://store.katalon.com/account) menu in Katalon Store. You can use the existing key if you already had one.

2. From your command in Katalon Studio, add the console option -apiKey=<Your_API_Key>
