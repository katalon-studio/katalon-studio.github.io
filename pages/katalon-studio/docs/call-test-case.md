---
title: "Call Test Case"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/call-test-case.html
redirect_from:
    - "/display/KD/Call+Test+Case/"
    - "/display/KD/Call%20Test%20Case/"
    - "/x/qgAM/"
    - "/katalon-studio/docs/call-test-case/"
description:
---
> For more details on how to apply test case in Data-driven Testing, refer to [this article](katalon-studio/docs/test-case-variables.html).

Call Test Case in Manual view
-----------------------------

Follow the steps below in order to make a call to another test case in **Manual view**:

1.  Open a test case in **Manual** view, then select option to add **Call Test Case** from command toolbar.
    ![](../../images/katalon-studio/docs/call-test-case/image2017-6-30-203A383A7.png)


2.  The **Test Case Browser** dialog which shows all existing test cases within the project will be displayed. Select the test case to be called and click **OK**.
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9-103A23A56.png)


3.  A **Call Test Case** step will be added with the selected test case above as its target. 
    ![](../../images/katalon-studio/docs/call-test-case/image2017-2-9-103A63A5.png)

    > Once a test step is added as **Call Test Case**, it will not be allowed to change into another keyword.


Call Test Case in Scripting view
--------------------------------

In **Scripting view**, the _callTestCase_ method allows users to make a call to another test case. Refer to either of the following syntaxes:

```groovy

import com.kms.katalon.core.model.FailureHandling
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

//call test case using WebUI Class
WebUI.callTestCase(findTestCase("Test Case ID"}), ["key1":"value1", "key2":"value2", … , "keyN":"valueN"], FailureHandling.OPTIONAL)

//call test case using Mobile Class
Mobile.callTestCase(findTestCase("Test Case ID"}), ["key1":"value1", "key2":"value2", … , "keyN":"valueN"], FailureHandling.OPTIONAL)
```

where:

<table>
    <thead>
        <tr>
            <th>Items</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{Test Case ID}</td>
            <td>
                <p>The&nbsp;<strong>ID</strong>&nbsp;of the test case to be called. You can find this info in test case properties.</p>
                <p>For example:</p>
                <p><img src="../../images/katalon-studio/docs/call-test-case/image2017-2-24-143A163A26.png"></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Parameters binding:</p>
                <pre><code class="language-groovy">[key1:value1, key2:value2, … , keyN:valueN]</code></pre>
            </td>
            <td>
                <p>The&nbsp;<strong>list of input parameters</strong>&nbsp;for that test case if any, which consists of following details:</p>
                <ul>
                    <li><em>Key(s)</em>: The <a class="external-link" href="/display/KD/Variable+Types#VariableTypes-Publicvariables" rel="nofollow">public variables</a> defined within the called test case.</li>
                    <li><em>Value</em>: the value to be used for the corresponding public variables.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>FailureHandling.option</td>
            <td>The <em>failure handling</em> option for the current test step. This parameter is <strong>optional</strong>.</td>
        </tr>
    </tbody>
</table>

For example:

![](../../images/katalon-studio/docs/call-test-case/image2017-6-30-203A393A15.png)
