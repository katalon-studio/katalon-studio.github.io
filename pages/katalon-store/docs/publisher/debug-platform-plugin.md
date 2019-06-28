---
title: "Debug your platform plugin using Eclipse IDE"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/debug-platform-plugin.html
redirect_from:
    - "/katalon-store/docs/publisher/debug-platform-plugin/"

description: How to debug platform plugin using Eclipse IDE
---
This tutorial will illustrate how to debug a platform plugin using Eclipse IDE via [Java Remote Debugging](https://help.eclipse.org/2019-03/topic/org.eclipse.jdt.doc.user/tasks/task-running_and_debugging.htm) feature.


### **Prerequisites:**



1. Java SDK 1.8
2. Maven 3.3+
3. Katalon Studio v6.1.0 or later
4. Eclipse IDE (We used Eclipse 4.11 in this article)


#### **Step 1: Start Katalon Studio with remote debugger mode**

Start katalon via commandline using this command:


```
<katalon_installed_folder>/katalon -vmargs -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000
```


The `<katalon_installed_folder>` is the absolute path to Katalon installed folder.

_If you are using macOS, the <code><katalon_installed_folder></code> should be <code>/Applications/Katalon Studio.app/Contents/MacOS</code>.</em>

The `address=8000` is a local port number, JVM will allow a debugger to attach to Katalon Studio via this port. You can change to another port if needed.


#### **Step 2: Import your platform plugin to Eclipse IDE as a Maven project**

In this example, we will use the last tutorial project: [katalon-studio-sample-plugin 1](https://github.com/katalon-studio/katalon-studio-sample-plugin) to debug.

![](../../../images/katalon-store/docs/publisher/import-plugin-project-to-eclipse-ide.png)


#### **Step 3: Set a breakpoint**

Open a Java file and set a breakpoint in the code. In this example, we set the breakpoint in the line of class [MyPluginActivationListener](https://github.com/katalon-studio/katalon-studio-sample-plugin/blob/master/src/main/java/com/mycompany/plugin/MyPluginActivationListener.java):


```
System.out.println("Hello, my plugin is: " + plugin.getPluginId());
```

![](../../../images/katalon-store/docs/publisher/set-breakpoint.png)


#### **Step 4: Create a Java Remote Application Debugger**

Click on the arrow dropdown of Eclipse debug icon ![](../../../images/katalon-store/docs/publisher/debug-icon.png), choose `Debug Configuration` item.

![](../../../images/katalon-store/docs/publisher/debug-configurations.png)


Right-click on the `Java Remote Application` and choose `New Configuration` to add new Remote Debugger

![](../../../images/katalon-store/docs/publisher/new-configuration.png)


#### **Step 5: Configure the Java Remote Application Debugger**

`Browse` to your platform plugin project at the text field under `Project` section.

Enter the port number you declared at step 1 to the `Port:` text field under `Connection Properties`section.

Click `Debug` to finish setup.


![](../../../images/katalon-store/docs/publisher/new-remote-debugger.png)


If your setup is correct, there is the ![](../../../images/katalon-store/docs/publisher/stop-debug-icon.png) icon which will be displayed on Eclipse toolbar.


#### **Step 6: Import plugin to Katalon Studio and start debugging**

Import your plugin and do your expected actions to make the breakpoint you placed at step 2 will be hit.

In this sample, the breakpoint will hit immediately after the plugin succesfiully installed.

![](../../../images/katalon-store/docs/publisher/breakpoint-hit.png)


Great, you now can debug your platform plugin project as a normal Java project.

#### **Step 7: Disconnect and stop debugging**


Press the ![](../../../images/katalon-store/docs/publisher/stop-debug-icon.png) icon to disconnect and stop your debugging session.


