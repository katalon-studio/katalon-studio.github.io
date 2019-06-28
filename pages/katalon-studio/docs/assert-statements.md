---
title: "Assert Statements" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/assert-statements.html 
redirect_from:
    - "/display/KD/Assert+Statements/"
    - "/display/KD/Assert%20Statements/"
    - "/x/sAAM/"
    - "/katalon-studio/docs/assert-statements/"
    - "/tutorials/common-validation/"
    - "/katalon-studio/tutorials/common_validation_statements_katalon_studio.html"
description: 
---
An assert statement contains a **boolean expression** where this condition must hold true for the test execution to continue. Thus, execution of the assertion causes evaluation of the **boolean expression** and an error is reported if the expression evaluates as **false**.

Assert statement in Manual view
-------------------------------

1.  Open a test case in **Manual** view, then navigate to **Assert Statements** from command toolbar.  
    ![](../../images/katalon-studio/docs/assert-statements/image2017-6-30-203A443A0.png)  
      
    
2.  A test step represents assert expression is added to the test case.  
    ![](../../images/katalon-studio/docs/assert-statements/image2017-2-10-143A353A6.png)  
      
    
3.  Double click on the **Input** cell to edit the assertion.  
    ![](../../images/katalon-studio/docs/assert-statements/image2017-2-10-153A23A25.png)
    
    > Once a test step is added as **Assert Statement**, it will **not** be allowed to change into another keyword.
    

Assert statement in Scripting view
----------------------------------

The **Script** view of test cases allows you to programmatically define and handle assertions easily using either Groovy or Java language. Refer to [http://docs.groovy-lang.org/docs/latest/html/documentation/core-testing-guide.html](http://docs.groovy-lang.org/docs/latest/html/documentation/core-testing-guide.html) for more details regarding assertions in Groovy.

For example:

 ![](../../images/katalon-studio/docs/assert-statements/11.png)