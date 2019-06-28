---
title: "Version 4.0.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-401.html
redirect_from:
    - "/display/KD/Version+4.0.1/"
    - "/display/KD/Version%204.0.1/"
    - "/x/AoAr/"
    - "/katalon-studio/new/version-401/"
description:
---
**General**

Add 'Offline Activation' feature on Activation Screen

**Console mode execution**

Add additional parameters to console mode execution. You can use this parameters for activation automatically when running on console mode:

| Param name | Description |
| --- | --- |
| -email | Registered email on Katalon Studio site |
| -password | Your password tied to the above email |

**Example**

```groovy
katalon -runMode=console -consoleLog -projectPath="D:\Project\Katalon\Katalon_projects\Regression Test\RegressionTest\RegressionTest.prj" -retry=0 -testSuitePath="Test Suites/New Test Suite78" -browserType="Chrome" -email="vinhtest@gmail.com" -password="12345678"
```