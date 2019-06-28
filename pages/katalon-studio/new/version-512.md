---
title: "Version 5.1.0.2"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/new/version-5102.html
redirect_from:
    - "/display/KD/Version+5.1.0.2/"
    - "/display/KD/Version%205.1.0.2/"
    - "/x/BB1O/"
    - "/katalon-studio/new/version-5102/"
description:
---
*   Fix an issue where desired capabilities are not working on Chrome.
*   Fix 'NullPointerException' error from mobile execution.
*   Fix an issue where '[Execute from here...](/display/KD/Execute+test+from+specific+step)' feature is disabled.
*   Fix an issue where 'Workbench auto-save job' message is displayed when users leave Katalon Studio in an idle state for a while.
*   Support Appium 1.7. Due to this change, '[Swipe](/display/KD/%5BMobile%5D+Swipe)' keyword has been adjusted:

    |   | Current | Changed |
    | --- | --- | --- |
    | Behavior | Swipe from (startx, startY) position to **extract** (endX,endY) position. | Swipe from (startX, startY) position to **relative position** of (startX, endY) position. |
    | Example | Swipe from (100,200) position to (200,300) position | Swipe from (100,200) position to (200,300) position => (endX,endY) position in this case will be (startX + 100, endX + 100) |
    | Script | Mobile.swipe(100, 200, 200, 300) | Mobile.swipe(100, 200, 100, 100) |