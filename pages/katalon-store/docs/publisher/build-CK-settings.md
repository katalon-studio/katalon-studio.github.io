---
title: "Build Custom Keywords with Settings"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/build-CK-settings.html
redirect_from:
    - "/katalon-store/docs/user/build-CK-settings/"

description: How to build custom keywords with settings
---
With the new [Katalon Studio version 6.1.2](https://docs.katalon.com/katalon-studio/new/version-612.html#fixes-and-improvements), a **Settings** page under **Project Settings/Plugins** can be created for a custom-keyword plugin. This can be utilized to store project-scoped variables for users to customize.


### ADD SETTINGS PAGE

Custom Keyword Plugin declares the setting page UI in **katalon-plugin.json** with this sample:


```
{
   "keywords": [],
   "configuration": {
      "settingId": "some id",
      "settingPage": {
         "name": "name",
         "components": [
            {
               "key": "key1",
               "type": "text",
               "label": "My Label 1",
	           "defaultValue":"My default value 1"
            },
            {
               "key": "key2",
               "type": "secret",
               "label": "My Label 2"
            }, ...
         ]
      }
   }
}

```



*   **settingId**: id the setting file that stores user setting properties in the setting page. There is a file will generated to store user settings at location:
*   `<Project dir>/settings/external/<settingId>.properties`
*   **settingPage** : contains the following sub-properties
    *   **name**: Name of the setting page
    *   **components**: list of UI components
        *   **key**: key of the component
        *   **label**: label of the component
        *   **type**: type of the component (‘text’ or ‘secret’)
        *   **defaultValue**: default value of the component


### PREPARE TO TEST



1. Clone [https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin]
2. **Open the project in Katalon Studio at least once**
3. Modify katalon-plugin.json with this template


```
{
   "keywords": ["com.katalon.plugin.keyword.excel.ExcelReadKeywords", "com.katalon.plugin.keyword.excel.ExcelWriteKeywords"],
   "configuration": {
      "settingId": "com.katalon.plugin.keyword.excel-keywords",
      "settingPage": {
         "name": "Excel Keywords",
         "components": [
            {
               "key": "username",
               "type": "text",
               "label": "Username"
            },
            {
               "key": "password",
               "type": "secret",
               "label": "Password"
            }
         ]
      }
   }
}

```


 
4. Build excel keyword project

   `gradle katalonPluginPackage`
   
   A jar file will be generated in **/build/libs** folder
5. Copy and paste the generated jar file to **Plugins** folder of a Katalon Studio project (Project A)
6. Open **Project A** and navigate to **Project Settings/Plugins/Excel Keywords**
7. Customize the settings as wish


### RETRIEVE THE SETTING VALUES

The values can be retrieved in keyword script as the following sample:


```
   import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
    import com.kms.katalon.core.setting.BundleSettingStore as BundleSettingStore

    BundleSettingStore bundleSetting = new BundleSettingStore(RunConfiguration.getProjectDir(), '<setting_id>',
    true)
    println(bundleSetting.getString('username', ''))
    println(bundleSetting.getString('password', '')