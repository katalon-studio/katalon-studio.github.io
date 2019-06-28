---
title: "VSTS/TFS/VSO Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/vststfsvso-integration.html 
redirect_from:
    - "/x/kwnR/"
    - "/katalon-studio/docs/vststfsvso-integration/"
description: 
---
Below is a general guide on how to configure Katalon Studio on VSO ([https://visualstudio.microsoft.com/team-services/](https://visualstudio.microsoft.com/team-services/)) with the assumptions that you are already familiar with common VSO terms such as _agent, build, task_......

<details><summary>Deprecated Content</summary>

1.     **Setting up agent:**

Follow setup guide: [https://www.visualstudio.com/en-us/docs/build/actions/agents/v2-windows](https://www.visualstudio.com/en-us/docs/build/actions/agents/v2-windows) to set up and run a local agent.

Make sure the agent is in **'Online' **status. 

 ![](../../images/katalon-studio/docs/vststfsvso-integration/Untitled.png)

**2.****Setting up build steps:**

Add a new build task: "Command Line":

 ![](../../images/katalon-studio/docs/vststfsvso-integration/2.png)

*   **Tool:** katalon.exe
*   **Arguments:** Generate command line from Katalon Studio (WITHOUT katalon prefix) to be used in console mode ([https://docs.katalon.com/display/KD/Console+Mode+Execution](/display/KD/Console+Mode+Execution))
    *   projectPath value uses VSO build variable to get project location, e.g: -**runMode=console -projectPath="$(Build.SourcesDirectory)\\Sample Web Testing Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome" -noSplash**
*   **Advanced:**
    *   Working folder: Select Katalon Studio folder, e.g: C:\\4.6\\Katalon Studio Windows 64

![](../../images/katalon-studio/docs/vststfsvso-integration/3.png) 

3.    **Building your project with the agent:**

Configure your project to be built with the agent. In this example, the agent is in 'Default' queue group, so we will choose 'Default' queue when selecting new build.

 ![](../../images/katalon-studio/docs/vststfsvso-integration/4.png)

That's it!. When the project is built, it will start Katalon Studio and execute the input test suite based on your command.

![](../../images/katalon-studio/docs/vststfsvso-integration/5.png)

</details>