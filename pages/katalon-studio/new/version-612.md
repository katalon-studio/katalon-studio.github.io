---
title: "Version 6.1.2"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-612.html
redirect_from:
    - "/katalon-studio/new/version-612/"
description: Release notes v6.1.2
---

### Fixes and Improvements

* Allowed users to disable auto-redirection for API test objects
* Highlighted test steps that call `markFailed`
* Fixed a bug that caused test cases to fail with status `Reason: BUG! exception in phase 'semantic analysis' in source unit`
* Showed test case tags in HTML, CSV, and PDF reports
* Added a tab to Search Dialog for searching test objects
* Showed raw data of request and response when executing an API test object
* Fixed a bug that caused the last step to by marked as `failed` if any previous steps had failed
* Fixed an issue of API testing where POST request JSON Body content is disappeared

### Build custom keywords with Settings
With this new feature, a **Settings** page under **Project Settings/Plugins** can be created for a custom-keyword plugin. This can be utilized to store project-scoped variables for users to customize.

#### Add Settings page
Custom Keyword Plugin declares the setting page UI in **katalon-plugin.json** with this sample:

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


* **settingId**: id the setting file that stores user setting properties in the setting page. There is a file will generated to store user settings at location:

  `<Project dir>/settings/external/<settingId>.properties`

* **settingPage** : contains the following sub-properties
   * **name**: Name of the setting page
   * **components**: list of UI components
     * **key**:  key of the component
     * **label**:  label of the component
     * **type**:  type of the component ('text' or 'secret')
     * **defaultValue**:  default value of the component

#### Prepare to test
 1. Clone [https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin]
 2. **Open the project in Katalon Studio at least once**
 3. Modify katalon-plugin.json with this template

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

4. Build excel keyword project

   `gradle katalonPluginPackage`

   A jar file will be generated in **/build/libs** folder

5. Copy and paste the generated jar file to **Plugins** folder of a Katalon Studio project (Project A)

6. Open **Project A** and navigate to **Project Settings/Plugins/Excel Keywords**

7. Customize the settings as wish


#### Retrieve the setting values
The values can be retrieved in keyword script as the following sample:

```groovy
    import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
    import com.kms.katalon.core.setting.BundleSettingStore as BundleSettingStore

    BundleSettingStore bundleSetting = new BundleSettingStore(RunConfiguration.getProjectDir(), '<setting_id>',
    true)
    println(bundleSetting.getString('username', ''))
    println(bundleSetting.getString('password', '')
```
