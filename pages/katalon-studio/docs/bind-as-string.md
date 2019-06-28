---
title: "Enhanced Variable Binding" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/bind-as-string.html 
description: Update new feature starting from v6.3.0
---

> Before version 6.3.0, variable binding automatically reads test data values as string. Starting from version 6.3.0, variable binding can be configured to read test data values as the intended data types. This feature is only applicable for Test data of type Excel and Database.

User can enable this feature to obtain old variable binding behaviors. Old test data will continue to be read as string to ensure that we don't break existing test cases.

In this example, we will create a test suite and a test case with variables. _booleanVar_ is a test case variable of type Boolean. _numberVar_ is a test case variable of type Number. _stringVar_ is a test case variable of type String.


<table>
    <thead>
        <tr>
            <th>Boolean</th>
            <th>Integer</th>
            <th>String</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>TRUE</td>
            <td>1</td>
            <td>one</td>
        </tr>
        <tr>
            <td>FALSE</td>
            <td>2</td>
            <td>zero</td>
        </tr>
        <tr>
</table>

Create the following custom keyword **TestDataKeyword**:


```groovy
public class testdata {
	
	public static void printString(String str) {
		println str;
	}
	
	public static void printInt(BigDecimal integer) {
		println integer;
	}
	
	public static void printBoolean(boolean bool) {
		println bool;
	}
	
}
```


Use them in the test case Sample Test Case as followed:


```groovy
TestDataKeyword.takeBooleanAndPrint(booleanVar);
TestDataKeyword.takeNumberAndPrint(numberVar);
TestDataKeyword.takeStringAndPrint(stringVar);
```


where _booleanVar_, _numberVar_, _stringVar_ are test case variables.


## Variable binding for Test Data with option _bind into test case as string_ enabled

Create a Test Data with option _bind into test case as string_ enabled and with the data provided above.




![](../../images/katalon-studio/docs/bind-as-string/1-create-test-data-enabled.png)


Follow the steps in [this document](https://docs.katalon.com/katalon-studio/docs/run-test-case-external-data.html) and run the test case. Then we will have the result as below:


![](../../images/katalon-studio/docs/bind-as-string/2-failed.png)


The test suite should fail because the first keyword function takeBooleanAndPrint does not expect a String, but because _bind into test case as string_ is enabled so test data values are read as string.


## Variable binding for Test Data with option _bind into test case as string_ disabled

Create a Sample Test Data with option _bind into test case as string_ disabled.

![](../../images/katalon-studio/docs/bind-as-string/3-create-test-data-disabled.png)


Repeat the steps same as above. Then we will have the result as below:

![](../../images/katalon-studio/docs/bind-as-string/4-passed.png)


The test suite should pass because _bind into test case as string_ is disabled so test data values are read as-is and all keyword functions receive their expected data types.
