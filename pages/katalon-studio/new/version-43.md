---
title: "Version 4.3"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-43.html
redirect_from:
    - "/display/KD/Version+4.3/"
    - "/display/KD/Version%204.3/"
    - "/x/nIUw/"
    - "/katalon-studio/new/version-43/"
description:
---
Object Spy
----------

**Highlight Object**

Katalon Studio extends Object Spy capabilities to help users in detecting whether test objects exist on the application under test just by a simply press on Highlight Object button.

![](../../images/katalon-studio/new/version-43/image2016-11-29-183A33A28.png)

Execution
---------

**Control all generated browsers**

Ability to continue executing your test scripts on any browser or mobile session launched by Katalon Studio, allow users to run automation test on existing environment.

![](../../images/katalon-studio/new/version-43/image2016-11-29-173A593A48.png)

> Limitations
>
> *   Does not support Safari
> *   Only support 1 session for Microsoft Edge

**Select any test step for execution**

Tired of seeing test scripts be executed from the beginning before reaching to a certain step? This feature will save users hours of debugging.

![](../../images/katalon-studio/new/version-43/image2016-11-29-183A03A25.png)

Test Case
---------

**Drag and drop Test Objects**

By dragging any of your test objects into current scripting editor, the test object's path will be generated automatically. Thus, saving users alot of time in manually typing its references.

![](../../images/katalon-studio/new/version-43/image2016-11-29-183A43A57.png)

User Interface
--------------

**Flat Icons**

Completely reworked all icons.

**Menu Reordering**

Main menu items are reordered. **Project > Properties** is renamed as **Project > Project Information** and located as a sub-item within **Project > Settings** menu.

**Properties view**

This version adds Properties view to help users accessing information of test artifacts quickly. 

![](../../images/katalon-studio/new/version-43/image2016-11-29-173A493A37.png)

**Revise Browser selector in Object Spy/ Record**

Browsers are grouped under respective categories. Selected browser will also be indicated by corresponding icons.

![](../../images/katalon-studio/new/version-43/image2016-11-29-173A503A57.png)

**New web service's object interface**

Revised web service object interface provide users a much simpler and straightforward form to define new webservice objects.

![](../../images/katalon-studio/new/version-43/image2016-11-29-173A533A20.png)

Performance Improvement
-----------------------

**Reduce time to open large project or lengthy test cases** 

Open test case and project is much faster. The performance when opening test case and project are improved dramatically.

**Reduce memory usage**

Katalon Studio now consumes less memory during operation.

Katalon Agent
-------------

[Non-UI version of Katalon Studio is now available! It serves best as a standalone console mode execution. It's available in following versions: Mac OSX](http://download.katalon.com/4.3.0/Katalon_Agent-4.3.dmg), [Windows 64](http://download.katalon.com/4.3.0/Katalon_Agent_Windows_64-v4.3.zip) and [Windows 32](http://download.katalon.com/4.3.0/Katalon_Agent_Windows_32-v4.3.zip).

Console Mode Generator
----------------------

**Remember last selection**

Our console mode generator will now remember the last selected options. Saving users the trouble of re-selecting some general options again.

New Keyword 
------------

**getCSSValue**

This keyword helps retrieving CSS value of an element.

```groovy
Get CSS value of a web element
Returns:
           the current, computed value of the property
Parameters:
           to - represent the web element
           css - represent the css property name of the element
```

qTest Integration
-----------------

**Separate execution's log**

Katalon Studio will only upload logs for selected test cases instead of the whole test suite as in previous version.