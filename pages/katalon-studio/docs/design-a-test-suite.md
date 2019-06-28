---
title: "Design a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/design-a-test-suite.html 
redirect_from:
    - "/display/KD/Design+a+Test+Suite/"
    - "/display/KD/Design%20a%20Test%20Suite/"
    - "/x/mAvR/"
    - "/katalon-studio/docs/design-a-test-suite/"
description: 
---

> Since v5.9, Katalon Studio support Test Case duplication within the same Test Suite.

A test suite contains a list of test cases that are intended for testing certain aspects of the application under test.

Modify Execution Information
----------------------------

You can manage additional configurations for test suite execution by expanding the **Execution Information** section, as below:

![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A493A29.png)

<table>
   <thead>
      <tr>
         <th>Field</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <p>Page load timeout:</p>
            <p>&nbsp;<img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A563A48.png"></p>
         </td>
         <td>
            <p>The timeout period allowed to wait for a page to be loaded. You can choose among the following options:</p>
            <ul>
               <li><strong>Use default</strong>: the default value defined will be used. Refer to <a href="/pages/viewpage.action?pageId=3179873">Execution Preferences (Version 5.0 and below)</a> for more details.</li>
               <li><strong>User-defined value</strong>: the entered timeout value (in seconds) will be used.</li>
            </ul>
            <p>&nbsp;</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Retry:</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A93A6.png"></p>
         </td>
         <td>
            <p>The <strong>maximum</strong> number of retries for execution until it is successfully passed. You can opt to retry only <strong>failed</strong> test cases.</p>
            <p>&nbsp;</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Mail Recipients</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A123A46.png"></p>
         </td>
         <td>
            <p>The list of recipients who would receive the execution report once the test suite finishes its execution.</p>
            <blockquote class="important">
               <p>There's also another list of recipients who will be receiving all the reports from Katalon by default. Refer to <a href="/display/KD/Emails+Settings">Emails Settings</a> for more details.</p>
            </blockquote>
         </td>
      </tr>
      <tr>
         <td>
            <p>Last run:</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A143A55.png"></p>
         </td>
         <td>
            <p>The datetime when the test suite was last executed. You can quickly open the report of this execution by clicking on the <strong>Last run</strong> hyperlink.</p>
            <p>&nbsp;</p>
         </td>
      </tr>
   </tbody>
</table>

Manage Test Case List
---------------------

There are several ways to add Test Cases into Test Suites. You can drag and drop the Test Case into Test Suites or using the Test Suite editor to manually add the test case.

>_Note: Test Cases can be duplicated in the same Test Suite._

Open a test suite, then select option to add **Add Test Case** from command toolbar.  
![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A333A40.png)

All test cases in Katalon Studio are displayed in the **Test Case Browser** dialog for you to select your preferred options. The selected test cases will be added in the test case list accordingly.  


> The checkbox at the end of test case row is checked by default. It means that the test case will be executed when running a test suite.



Execute a Test Suite
--------------------

Executing a test suite is more or less the same as executing a test case. Refer to [this documentation](/display/KD/Execute+a+Test+Case+or+a+Test+Suite) for more details.