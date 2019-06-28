---
title: "External Libraries" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/external-libraries.html 
redirect_from:
    - "/display/KD/External+Libraries/"
    - "/display/KD/External%20Libraries/"
    - "/x/wQAo/"
    - "/katalon-studio/docs/external-libraries/"
    - "/katalon-studio/tutorials/import_java_library.html"
description: 
---

Katalon Studio allows users to use external Java .jar libraries either through Katalon project settings or copying .jar files to a designated folder. Users can leverage this to extend the capabilities of Katalon Studio and handle specific situations when needed. This article will show you how to add external libraries to Katalon Studio.

## Using Gradle

Katalon Studio supports automatically download libraries from Maven repositories using Gradle. [Learn more](https://github.com/katalon-studio/gradle-plugin)

## Using Katalon project settings

On Katalon Studio, from the toolbar select **Project** \> **Settings** \> **External Libraries**. Click on **Add** to browse and select your .jar file(s) (and its dependencies if any).  Click on **Apply** and **OK** to save the settings.

![External Library](../../images/katalon-studio/tutorials/import_java_library/1.-Katalon-External-Library.png)

After saving the setting, Katalon will add the library file(s) into its **Drivers** folder on the local drive and loads the libraries. Now user can use the libraries in their test scripts.

To remove imported external libraries, specify the library which you want to delete, click on **Remove** and click **OK**.

![ remove import external library](../../images/katalon-studio/tutorials/import_java_library/2.-Katalon-External-Library.png)

## Manually copy .jar files to the Drivers folder

You can also manually copy your .jar file (and its dependencies if any) into **Drivers** folder. You have to restart Katalon (shutdown and open it again) to reload its class paths.

When your .jar library is recognized by Katalon, you should be able to use it in your code. Refer to the topic **[How to create a Custom Keyword](/katalon-studio/tutorials/create-custom-keyword/)** for information on how to use the email validation functionality from Apache open source library **commons-validator-1.5.1.jar.**