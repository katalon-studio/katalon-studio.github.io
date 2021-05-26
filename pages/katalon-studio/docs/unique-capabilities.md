---
title: "Unique Capabilities"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/unique-capabilities.html
---

You can find out what distinguish Katalon Studio from other testing tools in the following documentation.

<table>
   <tr>
      <td colspan="2"><strong>Application Under Test (AUT) Testing Combination</strong>
      </td>
   </tr>
   <tr>
      <td colspan="2">Katalon Studio allows combining multiple application types (Web UI, API, Mobile & Desktop) in one project and
         execution flow. This capability will leverage each testing type's advantages and help users reflect their real execution flow across different devices.
         <ul>
            <li><a href="https://github.com/katalon-studio-samples/api-web-combination-sample">Sample project for API &
                  Web UI combination</a>
            <li><a href="https://www.youtube.com/watch?v=bkA1DN-3bv8&feature=youtu.be">Webinar about utilizing API
                  Testing for boosting Web UI testing performance</a>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td colspan="2"><strong>Dual-editor interface</strong>
      </td>
   </tr>
   <tr>
      <td><img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/unique-capabilities/dual-interface.png">
      </td>
      <td style="width:50%">Users can both generate and update test scripts in Katalon Studio with the manual or scripting interfaces. The
         manual interface built for using codeless utilities is the best suited for testers without or limited programming skills. Meanwhile, the scripting interface is designed for programmers with advanced capabilities and
         customizations. Katalon Studio test scripts are interchangeable between the two modes. This enables a team with a
         mixed level of automation testing skills to work effectively and efficiently in the same project.
      </td>
   </tr>
   <tr>
      <td colspan="2"><strong>Self-healing</strong>
      </td>
   </tr>
   <tr>
      <td style="width:50%">Object locators are commonly broken or unable to identify the target element when the application under test (AUT) changes. Hence creating and using correct and resilient locators are crucial to the success of
         Web UI test automation. Since 7.0, Katalon Studio has launched an advanced and comprehensive Self-healing
         mechanism to tackle the broken locator issue during execution. We hope this powerful utility reduces your test maintenance effort substantially, exceptionally when the test cases run in batch overnight. <a
            href="https://docs.katalon.com/katalon-studio/docs/self-healing.html">Learn more</a>	
      </td>
      <td><img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/unique-capabilities/self-healing.png">
      </td>
   </tr>
   <tr>
      <td colspan="2"><strong>Smart Wait</strong>
      </td>
   </tr>
   <tr>
      <td><img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/unique-capabilities/smart-wait.png">
      </td>
      <td style="width:50%">For those who are familiar with Selenium WebDriver, one of the most common features is the Wait commands. These
         commands are handy in test scripts execution or observing and troubleshooting issues that arise due to time
         lag. Wait commands are powerful — but they also come with a big timing problem due to front-end
         processing. We introduced the <strong>Smart Wait </strong>feature in v7.0 to handle Selenium wait issues without any additional test scripts. <a
            href="https://www.katalon.com/resources-center/blog/handle-selenium-wait/">Learn more</a>
      </td>
   </tr>
   <tr>
      <td colspan="2"><strong>Time Capsule</strong>
      </td>
   </tr>
   <tr>
      <td style="width:50%">To reduce the manual effort of re-capturing a broken test object when a test fails, Katalon Studio 7.8
         supports restoring the AUT to the state on failure due to locators not finding Web UI objects. This robust
         capability equips you with a "time capsule" for fixing broken objects, reducing reproduction effort, and
         cutting off time spent on troubleshooting and maintaining your test scripts. <a
            href="https://docs.katalon.com/katalon-studio/docs/time-capsule.html">Learn more</a>.
      </td>
      <td><img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/unique-capabilities/time-capsule.png">
      </td>
   </tr>
</table>

### Katalon Studio vs Katalon Studio Enterprise

<table data-number-column="false" data-layout="wide" data-autosize="false" data-pm-slice="1 1 []">
	<tbody>
		<tr>
			<th colspan="3" data-colwidth="120,134,287">
				<div data-="">
					<p><strong>Feature Sets</strong></p>
				</div>
			</th>
			<th data-colwidth="189">
				<div data-="">
					<p><strong>Freemium</strong></p>
				</div>
			</th>
			<th data-colwidth="230">
				<div data-="">
					<p><strong>Premium</strong></p>
				</div>
			</th>
		</tr>
		<tr>
			<td rowspan="11" data-colwidth="120">
				<p><strong>Web UI</strong></p>
			</td>
			<td rowspan="5" data-colwidth="134">
				<p><strong>Test Generation</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Record &amp; playback</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>Basic</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>Advanced</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Smart XPath generator</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Manual mode and script mode</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Customized settings for Web Selection Methods used for Spy/Record</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Web Recorder:</p>
				<ul>
					<li>
						<p>Run from selected steps</p>
					</li>
					<li>
						<p>Run selected steps</p>
					</li>
				</ul>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="6" data-colwidth="134">
				<p><strong>Test Execution</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Smart-wait</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Cross-browser, and Headless Browsers</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Remote Execution: Selenium Grid</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Self-healing Execution</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Smart XPath Generator</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Image-based Testing</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="10" data-colwidth="120">
				<p><strong>Web Service</strong></p>
			</td>
			<td rowspan="10" data-colwidth="134">
				<p><strong>Test Generation</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Import from OpenAPI 2.0 (Swagger 2.0)</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Import from WSDL</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Import from Postman</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Import from SoapUI</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Import from WADL</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Import from OpenAPI 3.0</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Authorization:</p>
				<ul>
					<li>
						<p>Basic</p>
					</li>
					<li>
						<p>OAuth 1.0</p>
					</li>
					<li>
						<p>OAuth 2.0</p>
					</li>
				</ul>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Setting timeout and maximum response size</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Custom Method</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>SSL Client Certificate</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="4" data-colwidth="120">
				<p><strong>Mobile</strong></p>
			</td>
			<td data-colwidth="134">
				<p><strong>Test Generation</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Image-based Testing</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="3" data-colwidth="134">
				<p><strong>Test Environment</strong></p>
			</td>
			<td data-colwidth="287">
				<p>iOS and Android</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Remote and Custom</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Real and Cloud devices</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="16" data-colwidth="120">
				<p><strong>Desktop</strong></p>
			</td>
			<td rowspan="2" data-colwidth="134">
				<p><strong>Test Generation</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Windows Recorder with a screen simulator Coordinates-based recording</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Native Windows Recorder</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="3" data-colwidth="134">
				<p><strong>Plugins</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Free Store plugins</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Paid Enterprise Plugins</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Private Plugins</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="2" data-colwidth="134">
				<p><strong>Test Case</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Test Case Template</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Tag Management</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="2" data-colwidth="134">
				<p><strong>Test Object</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Configure naming convention</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Test objects refactoring</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="4" data-colwidth="134">
				<p><strong>Test Suite</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Send Reports via Email</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Dynamic TS</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Search for Dynamic TS</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Retry failed test executions immediately</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="3" data-colwidth="134">
				<p><strong>Test Suite Collection</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Parallel Execution</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Report Email</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Scheduler</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="21" data-colwidth="120">
				<p><strong>Utilities</strong></p>
			</td>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Config JVM parameters</strong></p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Disable Usage tracking by Katalon</strong></p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Debugging</strong></p>
			</td>
			<td data-colwidth="230">
				<ul>
					<li>
						<p>Debug mode</p>
					</li>
					<li>
						<p>Run from here</p>
					</li>
					<li>
						<p>Debug from here</p>
					</li>
					<li>
						<p>Debug: Enable/Disable Test Steps</p>
					</li>
					<li>
						<p>Attach source code for debugging</p>
					</li>
					<li>
						<p>Decompiling Class file for debugging</p>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td data-colwidth="134">
				<p><strong>Test Maintenance</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Time Capsule for optimizing fixing broken Web Test Objects</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Team Collaboration</strong></p>
			</td>
			<td data-colwidth="230">
				<ul>
					<li>
						<p>Test artifacts sharing</p>
					</li>
					<li>
						<p>Private Plugins</p>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td rowspan="2" data-colwidth="134">
				<p><strong>Scripting Languages</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Groovy</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Java</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="10" data-colwidth="134">
				<p><strong>3rd party integration</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Connecting to Git with HTTPS<br />Applitools</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Connecting to Git with SSH Keys</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Jira</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>TestRail</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Kobiton</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Sauce Labs</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>TestLink</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>qTest</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Rally</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Azure DevOps Test Plans</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="4" data-colwidth="134">
				<p><strong>Test Migration</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Selenium</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>JUnit</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Test NG</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Selenium IDE v3</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="11" data-colwidth="120">
				<p><strong>Test Frameworks</strong></p>
			</td>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Keywords Driven Testing</strong></p>
			</td>
			<td data-colwidth="230">
				<p>Custom keywords refactoring</p>
			</td>
		</tr>
		<tr>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Behavior Driven Testing (BDD)</strong></p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="9" data-colwidth="134">
				<p><strong>Data-Driven Testing (DDT)</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Parameterization</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Excel, CSV</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Checkpoints</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Multiple data sources</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>PostgreSQL</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>MySQL</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Oracle SQL</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>SQL Servers</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>External DB</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td rowspan="6" data-colwidth="120">
				<p><strong>Test Logs and Reports</strong></p>
			</td>
			<td rowspan="5" data-colwidth="134">
				<p><strong>Reports</strong></p>
			</td>
			<td data-colwidth="287">
				<p>Basic Reports:</p>
				<ul>
					<li>
						<p>HTML</p>
					</li>
					<li>
						<p>PDF</p>
					</li>
					<li>
						<p>CSV</p>
					</li>
				</ul>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Screenshots and Screen-based Videos</p>
			</td>
			<td data-colwidth="189">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>TSC Report</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Report History</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td data-colwidth="287">
				<p>Videos for Headless Browsers</p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="2" data-colwidth="134,287">
				<p><strong>Test Log Customization</strong></p>
			</td>
			<td data-colwidth="230">
				<div data-="">
					<p>✔</p>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="3" data-colwidth="120,134,287">
				<p><strong>CI/CD Pipeline</strong></p>
			</td>
			<td data-colwidth="230">
				<ul>
					<li>
						<p>Execution in Console mode</p>
					</li>
					<li>
						<p>CI/CD Plugins:</p>
						<ul>
							<li>
								<p>Jenkins</p>
							</li>
							<li>
								<p>CloudCI</p>
							</li>
							<li>
								<p>Bamboo</p>
							</li>
							<li>
								<p>TeamCity</p>
							</li>
							<li>
								<p>GitLab</p>
							</li>
							<li>
								<p>GitHub Action</p>
							</li>
							<li>
								<p>CircleCI</p>
							</li>
							<li>
								<p>Azure DevOps Add-on</p>
							</li>
							<li>
								<p>Docker Image</p>
							</li>
							<li>
								<p>App Center Test</p>
							</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>
