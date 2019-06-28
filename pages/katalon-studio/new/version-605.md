---
title: "Version 6.0.5"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-605.html
redirect_from:
    - "/katalon-studio/new/version-605/"

description: Release notes v6.0.5
---


### OAuth 2.0 Support

Since version 6.0.5, Katalon Studio supports OAuth 2.0 expanding Web Service testing capabilities. Most of the common grant types are supported including “Authorization code,” “Password Credentials,” “Client Credentials,” and “Refresh Token.”
[Learn more](https://docs.katalon.com/katalon-studio/docs/authorization-oauth2.html)

![](../../images/katalon-studio/docs/authorization-oauth2/5.png)

Fixed Bugs & Improvements
-----------------------
* Fixed an issue where more than one keyword setText is displayed on Web Record dialog
* Fixed an issue where commented lines at the bottom of test script are accidentally deleted - [More details](https://forum.katalon.com/t/most-of-my-automation-script-got-deleted/16005/4)
* Fixed some minor bugs and made some enhancements for BDD
* Fixed Global variables issues - [More details](https://forum.katalon.com/t/groovy-error-unable-to-resolve-class-internal-globalvariable/9557/168)
* Allows users to create Web Service Object in code
* Fixed an issue where profiles are evaluated even though it is not in use
* Moved ScreenUtil from WebUIAbstractKeyword to ImageKeyword
* Display information log when using GlobalVariable, not in selected ExecutionProfile
* Fixed an issue where ScrollToText function does not work
* Fixed an issue where adding the value with multiple lines in the variable section can not be function(Global or Normal) - [More details](https://github.com/katalon-studio/katalon-studio/issues/46)
* Fixed an issue where commented lines at the bottom of test script are deleted accidentally



