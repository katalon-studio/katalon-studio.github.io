---
title: "Generate groovy doc for a plugin"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/generate-groovydoc.html
redirect_from:
    - "/katalon-store/docs/publisher/generate-groovydoc/"

description: Guidelines for developers about how to generate groovydoc for a plugin
---
Beside publishing your plugin to Katalon Store, you can generate your documentation into groovydoc and add to store.

## Add documentation title to `build.gradle`

In your project, open build.gradle file and update `docTitle`.

Let’s refer to the following example:

```
groovydoc {


 source = pluginSources


 docTitle = 'WaitForAngularLoad Custom Keywords'


}
```

## Add dependencies to `build.gradle`

You can add dependencies to `build.gradle` (optional). 
Let’s refer to the following example to add dependencies:


```
dependencies {


 compile('com.paulhammant:ngwebdriver:1.1.4') {


   exclude group: 'org.seleniumhq.selenium'


 }
 ```
If you don’t have the dependencies, delete the command lines.


## How to build

Run the following command at the root folder:
```
gradle groovydoc -x compileGroovy
```

After successfully running the command, there will be the “build” folder displayed in your plugin package.

## Add the project to katalon-plugin-docs repository

* Go to `katalon-plugin-docs/katalon-plugin-docs.github.io/`
* Upload your file to “docs” folder
* Create a pull request and wait for approval

Example of the AngularJS Dropdown Keywords successfully added to Git: 
https://github.com/katalon-plugin-docs/katalon-plugin-docs.github.io/tree/master/docs/angularjs-dropdown-custom-keywords

https://plugin-docs.katalon.com/docs/angularjs-dropdown-custom-keywords/

