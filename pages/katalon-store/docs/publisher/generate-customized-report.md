---
title: "Develop a customized report plugin"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/generate-customized-report.html
redirect_from:
    - "/katalon-store/docs/publisher/generate-customized-report/"

description: Guidelines for developers about how to write a customized report plugin
---

A sample custom keyword plugin to demonstrate how to generate a customized report.

This plugin provides a test listener that automatically generates a test suite report with a customized format as a text file under *Reports* folder.

## Relevant project structure
```
katalon-studio-sample-report-plugin
├── Keywords
│   ├── sample.report
│   │   ├── SampleReportUtil.groovy
│   │   ├── TxtReportBuilder.groovy
├── Test Listeners
│   ├── SampleReportTSListener.groovy
```

## How to build
Open this project with Katalon Studio.

Run the following command at the root folder:

```sh
gradle katalonPluginPackage
```

The plugin will be located at *build/libs/katalon-studio-sample-report-plugin.jar* afterwards.

## How to use 

Copy the above jar file and place it under *Plugins* folder of your Katalon project.
