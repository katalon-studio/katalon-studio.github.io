---
title: "How to use a custom keyword from other custom keywords and step definition classes"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/how-to-use-custom-keyword-in-groovy-class.html
redirect_from:
  - "katalon-studio/tutorials/how-to-use-custom-keyword-in-groovy-class.html"
description: "Tips and Tricks: How to use a custom keyword from other custom keywords and step definition classes"
---
Besides built-in keywords, Katalon Studio also allows users to create custom keywords for these purposes:
 - Creating reusable scripts
 - Extending testing capability
 - Setting up testing projects with a specific pattern

Initially, custom keywords are designed use in test cases. Combined with built-in keywords, custom keywords can help perform a complete test scenario.

Here is an example of a custom keyword, which prints out a parameter.
```groovy
class ParamTypes {
  @Keyword
  def map_variables(Map <String, String> my_map) {
    println my_map
  }
}
```

The keyword can be used in a test case via **CustomKeywords** class
```groovy
CustomKeywords.'ParamTypes.map_variables'([('last name') : 'ducson', ('first name') : 'brian'])
```
In Katalon Studio, the test case Script is not the only place that allows users to script. Users can script at the custom keyword class and the BDD step definition class. Unfortunately, you will get the following error message when calling the custom keyword in these classes:
```groovy
Test Cases/Tips and Tricks/Custom Keywords/Params - Map FAILED because (of) (Stack trace: 
groovy.lang.MissingPropertyException: No such property: CustomKeywords for class: com.common.types.ParamTypes
```
In the custom keyword class and the BDD step definition class, custom keywords cannot be called directly as in test case via CustomKeywords class. They can be called as methods of a groovy class. Here are two options you can choose to get it work:
 - **Option 1**: Create a new instance of the class and call the method

```groovy
def param_types = new ParamTypes()
param_types.map_variables([('last name') : 'ducson', ('first name') : 'brian'])
```
 - **Option 2**: Declare the custom keyword as static

```groovy
class ParamTypes {
  @Keyword
  def static map_variables(Map <String, String> my_map) {
    println my_map
  }
}
```
and call the method

```groovy
ParamTypes.map_variables([('last name') : 'ducson', ('first name') : 'brian'])
```
Hope that these tips will help you leverage the usage of custom keywords in Katalon Studio. 

