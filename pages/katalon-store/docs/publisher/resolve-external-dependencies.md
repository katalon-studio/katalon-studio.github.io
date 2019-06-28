---
title: "How to resolve external dependencies for a plugin"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/publisher/resolve-external-dependencies.html
redirect_from:
    - "/katalon-store/docs/publisher/resolve-external-dependencies/"

description: Guides to resolve external dependencies for a plugin and examples
---
### Add dependencies to `build.gradle`

After your dependencies on Maven Central are already available, you can add them to `build.gradle`.

Let's refer to the following example:
https://github.com/katalon-studio/katalon-studio-zip-keywords-plugin

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

      srcDirs = ['Keywords', 'Libs', 'Test Listeners', 'Include/scripts/groovy']

    }

  }

}

dependencies {

  compile 'net.lingala.zip4j:zip4j:1.3.2'

}

shadowJar {

  exclude 'Temp*.class'

}

katalon {

  dependencyPrefix = "com.katalon"

  minimize = false

}
```

Besides, there is another benefit. Your dependencies will be [repackaged](http://repackage.org/) in order to avoid conflicts with other plugins as much as possible.

![](../../../images/katalon-store/docs/publisher/repackaged.png)