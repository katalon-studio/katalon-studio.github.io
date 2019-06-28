---
title: "Applitools Integration"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/applitools-integration.html

description: Instructions of how to use Applitools plugin
---
> Install the plugin [here](https://store.katalon.com/product/44/Applitools-Integration).


### Applitools settings
Go to **Project Settings** > **Plugin** > **Applitools Integration** and setup these following configurations:  

![Applitools Integration Visual Grid](https://i.ibb.co/swxnv8c/Applitools-Store-1.png)

* API Key : this is a required field. [How to obtain Applitools API Key](https://applitools.com/docs/topics/overview/obtain-api-key.html)  
     - *Note: For quick testing, you only need to enter the API Key and leave out the rest*
* Application Name :  name of the application in Applitools. You do not have to create an application in Applitools beforehand.  
* Match Level: match level in Applitools. [Applitools Match Level](https://applitools.com/docs/api/eyes-sdk/enums-gen/enum-global-matchlevel-selenium-java.html)
* Visual Grid View Port: list of viewports including width and height for Applitools Visual Grid. Once you have specified all browser images under, those viewports will be captured and compared.  
    - [[width1, height1], [width2, height2], ...] (for example: [[800,600],[1200,630]])
    - leave empty: use the browser viewport at the point of execution  
    - *Note: Visual Grid View Port configuration is applicable for **checkWindow** and **checkElement** keywords*
    
### Use Applitools functions in Recording mode
This plugin provides two custom keywords in BasicKeywords class which are helpful to use while recording test cases:
* **checkWindow**: use to compare the image of the full browser at the point this keyword is called. The images in the last run will be used as baseline for the images in the next run.
    - input: a unique string which Applitools will use as the identifier to compare the captured images
    - output: compared results from Applitools 
* **checkTestObject**:  use to compare the image of a specific Test Object  at the point this keyword is called. The images in the last run will be used as baselines for the images in the next run.
    - input: a Test Object and unique string which Applitools will use as the identifier to compare the captured images
    - output: compared results from Applitools 

### Use Applitools functions in Scripting mode
Besides the two basic custom keywords above, this plugin also provides a set of keywords in EyesKeywords and AdvancedKeywords classes which can be use in Script mode:

	/**
	 * Initialize an Eyes instance without any configuration.
	 */
	@CompileStatic
	@Keyword
	static Eyes eyesInit()

	/**
	 * End the test.
	 *
	 * @param eyes The initialized eyes object.
	 * @return The list of results of the test can be obtained from the object returned.
	 */
	static List<TestResults> eyesClose(Eyes eyes)
	
	/**
	 * Initialize a wrapped WebDriver to starts a test
	 *
	 * @param testName The name of the test. This name must be unique within the scope of the application name. It may be any string.
	 * @param viewportSize Specified viewport for image capturing. If null, the default browser viewport will be used.
	 * @return A wrapped WebDriver which enables Eyes trigger recording and frame handling.
	 */
	static Eyes eyesOpen(String testName, RectangleSize viewportSize)

	/**
	 * Initialize a wrapped WebDriver to starts a test with a specified baseline name.
	 *
	 * @param baselineName The environment name that defines baseline. If the name is undefined in the server when the test runs then the name will be created and defined on the server with values of the current test environment defined by a triplet <OS = baselineName, Browser, Viewport>.
	 * @param testName The name of the test. This name must be unique within the scope of the application name. It may be any string.
	 * @param viewportSize Specified viewport for image capturing. If null, the default browser viewport will be used.
	 * @return A wrapped WebDriver which enables Eyes trigger recording and frame handling.
	 */
	static Eyes eyesOpenWithBaseline(String baselineName, String testName, RectangleSize viewportSize)


*Note: This plugin is used to integrate Katalon Studio with Applitools. A plugin license in Katalon Store does not cover any Applitools licenses.*