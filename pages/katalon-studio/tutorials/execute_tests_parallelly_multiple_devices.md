---
title: "Executing Tests on Multiple Devices in Parallel"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute_tests_parallelly_multiple_devices.html
description: "There are instances in which the user wants to execute tests on different devices parallelly. This is the how-to guide for these instances."
redirect_from:
    - "/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices.html"
---
There are instances in which the user wants to execute tests on different devices at the same time. Below is the how-to guide for these instances.

*   Step 1: Create **two** Test suites. Refer to the [Katalon documentatio](/x/mAvR)[n](/x/7AAM) for a quick guide to creating test suites.
*   Step 2: Create **one** Test Suite Collection. Refer to the [Katalon documentation](/x/NgvR) for a quick guide to creating test suite collections.
*   Step 3: When we add a test suite a test suite collection, by default, the execution will be running on Firefox browser. The user can change their desired browsers as needed.

![Executing Tests on Multiple Devices in Parallel ](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-3.png)

*   Step 4: Click on **Run with** column. It will display the **execution environment** selection dialog.

![Executing Tests on Multiple Devices in Parallel](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-4.png)

*   Step 5: Select **Android** to continue.

![Executing Tests on Multiple Devices in Parallel](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-5.png)

*   Step 6: To choose a device, **double click** on **run configuration** column and select the connected device.

![Executing Tests on Multiple Devices in Parallel](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-6.png)

*   Step 7: Choose among the device names listed.

![Executing Tests on Multiple Devices in Parallel ](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-7.png)

*   Step 8: Repeat steps 4 to 7 for the other test suite.

![Executing Tests on Multiple Devices in Parallel](../../images/katalon-studio/tutorials/execute_tests_parallelly_multiple_devices/Executing-Tests-on-Multiple-Devices-in-Parallel-8.png)

*   Step 9: Select the radio button '**Parallel**' in the **Execution Information** section.
*   Step 10: Click on **Execute**. It will execute tests parallelly on your selected mobile devices.

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation).  For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/).