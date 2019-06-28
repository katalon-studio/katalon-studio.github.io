---
title: "Version 6.1.1"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-611.html
redirect_from:
    - "/katalon-studio/new/version-611/"
description: Release notes v6.1.1
---

### Katalon Studio

* Added a warning when executing CLI mode under the target project folder.
* Fixed an issue where Katalon Studio cannot reload plugins.
* Added the current version and commit ID to the Katalon Studio's window title bar.
* Updated chromedriver to version 73.0.3683.68
* Updated EdgeDriver to version 6.17134

### Auto-healing Smart XPath Plugin

* Fixed an issue where XPaths with incorrect syntax stop the healing process.
* Added screenshots of alternative XPaths' results to assist the review process.

### Package Test Listeners as plugins

* From Katalon Studio 6.1.1 Test Listeners can be packaged as plugins.
* For a sample plugin see https://github.com/katalon-studio/katalon-studio-result-summary-test-listeners-plugin.
* The only differences between Test Listeners and Custom Keywords plugins are in `build.gradle` and `katalon-plugin.json`:

`build.gradle`:
```groovy
sourceSets {
  main {
    groovy {
      srcDirs = ['Keywords', 'Libs', 'Test Listeners', 'Include/scripts/groovy']
    }
  }
}
```

`katalon-plugin.json`:
```json
{
	"keywords": [],
	"listeners": ["KatalonPluginResultSummary"]
}
```