---
title: "Example plugin: Build Katalon Studio's TestRail Integration plugin"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/example-plugin-testrail.html
redirect_from:
    - "/katalon-store/docs/publisher/example-plugin-testrail/"

description: Example of building a plugin
---

This document will show you the way to implement Katalon Studio’s TestRail integration plugin. All functions are implemented using _extension point_, which are declared in `plugin.xml`. You can see plugin’s activities by selecting the tab _Event Log_ (next to _Console_).

[https://store.katalon.com/product/13/TestRail-Integration](https://store.katalon.com/product/13/TestRail-Integration)

The source code is made available here for reference.

[https://github.com/katalon-studio/katalon-studio-testrail-plugin](https://github.com/katalon-studio/katalon-studio-testrail-plugin)


Please note, this document is not about how to use the plugin. Please visit [TestRail integration document](https://docs.katalon.com/katalon-studio/docs/testrail-integration.html) if you need help.


## **Setting page**

![](../../../images/katalon-store/docs/publisher/1_connect.png)


### **Add an icon to the toolbar**


```
<extension
        point="com.katalon.platform.extensions">
    <point
            id="com.katalon.plugin.testrail.TestRailToolItemDescription"
            extensionPointId="com.katalon.platform.api.extension.newToolItem"
            implementationClass="com.katalon.plugin.testrail.TestRailToolItemDescription">
    </point>
</extension>
```


For implementation, see class `com.katalon.plugin.testrail.TestRailToolItemDescription`.


### **Add a setting page**


```
<extension
      point="com.katalon.platform.extensions">
  <point
        id="com.katalon.plugin.testrail.TestRailPluginPreferencePage"
        extensionPointId="com.katalon.platform.api.extension.pluginPreferencePage"
        implementationClass="com.katalon.plugin.testrail.TestRailPluginPreferencePage">
  </point>
</extension>
```


For implementation, see classes `com.katalon.plugin.testrail.TestRailPluginPreferencePage` and `com.katalon.plugin.testrail.TestRailPreferencePage`.

Settings are saved per project.


## **Link Katalon Studio’s Test Cases with TestRail’s Test Cases**

![](../../../images/katalon-store/docs/publisher/2_mapping.png)


```
<extension
        point="com.katalon.platform.extensions">
    <point
            id="com.katalon.plugin.testrail.TestRailTestCaseIntegrationPage"
            extensionPointId="com.katalon.platform.api.extension.testCaseIntegrationViewDescription"
            implementationClass="com.katalon.plugin.testrail.TestRailTestCaseIntegrationViewDescription">
    </point>
</extension>
```


For implementation, see classes `com.katalon.plugin.testrail.TestRailTestCaseIntegrationViewDescription` and `com.katalon.plugin.testrail.TestRailTestCaseIntegrationView`.


## **Execute Test Cases selectively based on TestRail’s settings**


![](../../../images/katalon-store/docs/publisher/4_querying.png)

```
<extension
        point="com.katalon.platform.extensions">
    <point
            id="com.katalon.plugin.dynamic_execution.TestRailFilteringTestSuiteImpl"
            extensionPointId="com.katalon.platform.api.extension.dynamicQueryingTestSuiteDescription"
            implementationClass="com.katalon.plugin.testrail.TestRailQueryingTestSuite">
    </point>
</extension>
```


For implementation, see class `com.katalon.plugin.testrail.TestRailQueryingTestSuite`.


## **Sending result to TestRail**

![](../../../images/katalon-store/docs/publisher/3.1_sending.png)



```
<extension
        point="com.katalon.platform.extensions">
    <point
            id="com.katalon.plugin.testrail.TestRailEventListenerInitializer"
            extensionPointId="com.katalon.platform.api.extension.eventListener"
            implementationClass="com.katalon.plugin.testrail.TestRailEventListenerInitializer">
    </point>
</extension>
```


For implementation, see class `com.katalon.plugin.testrail.TestRailEventListenerInitializer`.


## **TestRail SDK**

[http://docs.gurock.com/testrail-api2/bindings-java](http://docs.gurock.com/testrail-api2/bindings-java)

If you have any question or feedback, feel free to let us know.
