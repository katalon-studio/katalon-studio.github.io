---
title: "Version 6.2.0"
sidebar: katalon_studio_new_sidebar
permalink: katalon-studio/new/version-620.html
redirect_from:
    - "/katalon-studio/new/version-620/"
    - "/katalon-studio/new/"
description: Release notes v6.2.0
---

## Fixes

* Bug: Cannot send emails if the attachment is empty
* Bug: Cannot import Postman requests with protocol HTTP
* Bug: TimeoutException when evaluating variables for Web Service requests
* Bug: Cannot save a draft request to Object Repository
* Bug: Cannot edit build.gradle files
* Bug: [Linux] Icons on the toolbar aren't displayed
* Bug: [Linux] Katalon Studio UI hangs when selecting Keywords in Manual view
* Bug: Cannot filter files in Project Explorer using keywords containing uppercase characters
* Bug: Cannot import Postman collections containing requests with the same names
* Bug: Cannot import Postman collections with long folder names
* Bug: Cannot execute web testing projects on cloud mobile devices (e.g. Sauce Labs)
* Bug: Cannot import Postman collections containing requests with body information missing
* Bug: Cannot import Postman requests whose names are URLs
* Bug: Custom headers are not sent along with SOAP requests
* Bug: Postman collection's sub-folder structure was not preserved
* Bug: Katalon Studio is hanged when editing an argument type in Desired Capabilities dialog

## Improvements

* Show plugins which failed to reload
* Support SSL client certificate
* Support Appium v1.12.1, iOS 12.2, Xcode 10.2
* Support overriding default WebDrivers per project
* Update selenium-standalone-server from 3.7.1 to 3.141.59
* Update appium-java-client from 5.0.0 to 7.0.0
* Remove embedded carthage, libimobiledevice, and ios-deploy
