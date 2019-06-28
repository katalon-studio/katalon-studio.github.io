---
title: "How to develop a Custom Keywords Plugin"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/develop-custom-keywords.html
redirect_from:
    - "/katalon-store/docs/publisher/develop-custom-keywords/"

description: Guidelines to develop a new Custom Keywords plugin
---
In this tutorial, we’ll introduce a detail process of sharing custom keywords as plugins.
Custom Keywords plugins are available since Katalon Studio 6.0.6.

## Develop a Custom Keywords plugin



*   Sample: [https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin](https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin).
*   A Custom Keywords plugin is essentially a normal Katalon Studio project with some Custom Keywords implementation. So the steps are quite simple:
    *   Create a new Katalon Studio project.
    *   Implement your Custom Keywords.
    *   Test Cases can be added to help verify these Custom Keywords and to serve as samples for plugin users.


## Package the Custom Keywords plugin



*   In the `Keywords` folder, add a `katalon-plugin.json` file with the following format:


```
{
  "keywords": [keywordClass1, keywordClass2]
}
```


Example:
```
{
	"keywords": ["com.katalon.plugin.keyword.excel.ExcelReadKeywords", "com.katalon.plugin.keyword.excel.ExcelWriteKeywords"]
}
```

*   In the project's root folder add a `build.gradle` file
```
plugins {
  id 'java'
  id 'groovy'
  id 'com.github.johnrengelman.shadow' version '4.0.4'
  id "com.katalon.gradle-plugin" version "0.0.6"
}

repositories {
  jcenter()
  mavenCentral()
}

sourceSets {
  main {
    groovy {
      srcDirs = ['Keywords', 'Include/scripts/groovy']
      srcDir 'Libs'
    }
  }
}

shadowJar {
  exclude 'Temp*.class'
}

katalon {
  dependencyPrefix = "com.katalon"
  minimize = false
}
```

Install [Gradle ](https://gradle.org/)and run the following command, then checking the `build/libs` for the plugin’s JAR package.


```
gradle katalonPluginPackage
```


Note: 
* If you run the above command inside an existing project, please open that project with Katalon Studio first.

* To execute your katalonPluginPackage across platforms, open the plugin project using Katalon Studio first to repopulate the `.classpath` file. The package task use these paths to look up Katalon Studio libraries.



## Test the Custom Keywords plugin



*   In a new Katalon Studio project, create `Plugins` folder and put the plugin’s JAR package here. Reopen this project to use imported Custom Keywords.
*   You can find a sample project which uses the above Excel Custom Keywords plugin here [https://github.com/katalon-studio-samples/sample-custom-keywords-plugin-usage](https://github.com/katalon-studio-samples/sample-custom-keywords-plugin-usage).


## Publish the plugin

Once you’re done developing your plugins, please [submit them to Katalon Store](https://docs.katalon.com/katalon-store/docs/publisher/submit-plugin.html). We’ll review your contents against [our policies](https://www.katalon.com/terms/#katalon-plugin-license-agreement) before approving to list them on the Store.


## Sample plugins



*   [https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin](https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin)
*   [https://github.com/katalon-studio/katalon-studio-ashot-custom-keywords-plugin](https://github.com/katalon-studio/katalon-studio-ashot-custom-keywords-plugin)
*   [https://github.com/katalon-studio/katalon-studio-zip-custom-keywords-plugin](https://github.com/katalon-studio/katalon-studio-zip-custom-keywords-plugin)
