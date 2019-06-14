---
title: "Version 6.1.5"
sidebar: katalon_studio_new_sidebar
permalink: katalon-studio/new/version-615.html
redirect_from:
    - "/katalon-studio/new/version-615/"
description: Release notes v6.1.5
---

## Plug-ins

*   [**Test Suite Collection Scheduler Plugin**](https://store.katalon.com/product/74/Test-Suite-Collection-Scheduler): A plugin that lets Katalon Studio run a test suite collection at a specific time in the future.
*   [**Katalon Studio Report Plugin**](https://store.katalon.com/product/59/Basic-Report): A plugin that replaces the current report feature of Katalon Studio. Starting from v6.1.5, the report feature is no longer available natively in Katalon Studio, users need to download this plugin to continue using this feature.

## Fixes and Improvements

*   Fixed a bug where Kobiton devices are duplicated.
*   Fixed a bug where Katalon Studio cannot be opened if a custom keyword plugin contains errors.
*   Fixed a bug where HAR files are not generated with the correct name.
*   Fixed a bug where Safari webdriver install requirements pop-up shows up before every test.
*   Fixed a bug where test execution crashes when failing to get recent projects.
*   Fixed a bug where executeJavaScript keyword  fails when there are 3 arguments.
*   Fixed a bug in Jira Plugin where Default JIRA Issue TypeType field in integration setting contains duplicated values.
*   Added some small UI improvements when selecting devices and app files.
*   \[BETA\] Added the capability to import Test Objects from Postman collection JSON file. Importable fields include Postman fields in Params, Headers, Body.
*   Added a scrollbar in dropdown when selecting execution profiles.
*   Added the capability to display all user folders/files in Test Explorer.
*   Added the capability to allow configuration of plugin installlation location in Preferences -> Katalon -> Plugins.
*   Added the capability to use variables in XPaths when finding test objects.