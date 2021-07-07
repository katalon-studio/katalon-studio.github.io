---
title: "Supported Technologies"
sidebar: katalon_studio_docs_sidebar
permalink: /katalon-studio/docs/product-availability-matrix.html
---

This document gives you information on the supported technologies and integrations. For the supported environments (including browsers and operating systems), see [this document](https://docs.katalon.com/katalon-studio/docs/supported-environments.html).

### Supported Application Under Test (AUT)

<table id="top" class="top-vertical-align-table">
    <tr>
        <td style="width:50%"><strong>Web UI</strong>
            <ul>
                <li>Support all front-end frameworks: ReactJS, AngularJS, VueJS.
                <li>Cross-browser compatibility: Chrome, Firefox, Safari, Edge
                </li>
            </ul>
        </td>
        <td><strong>Mobile</strong>
            <ul>
                <li>Android & iOS
                <li>Native application
                <li>Web mobile
                <li>Hybrid <a href="#mobile-limit">(*)</a>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td style="width:50%"><strong>API</strong>
            <ul>
                <li>REST: <a href="https: //docs.katalon.com/katalon-studio/docs/import-rest-requests-from-swagger-20.html">
                        Swagger</a>,<a href="https://docs.katalon.com/katalon-studio/docs/import-openapi30.html"> OpenAPI 3.0</a> &<a
                        href="https://docs.katalon.com/katalon-studio/docs/import-wadl.html"> WADL</a>
                <li>SOAP (SOAP 1.1 & 1.2)
                <li>Authentication: <a
                        href="https://docs.katalon.com/katalon-studio/docs/authorization-basic.html">Basic</a>, <a
                        href="https://docs.katalon.com/katalon-studio/docs/authorization-oauth1.html">OAuth 1.0</a> &<a
                        href="https://docs.katalon.com/katalon-studio/docs/authorization-oauth2.html"> OAuth 2.0</a>
                </li>
            </ul>
        </td>
        <td style="width:50%"><strong>Windows</strong>
            <ul>
                <li>Universal Windows Platform (UWP)
                <li>Windows Forms (WinForms)
                <li>Windows Presentation Foundation (WPF)
                <li>Classic Windows (Win32) apps on Windows 10 PCs
                </li>
            </ul>
        </td>
    </tr>
</table>

### Programming Skill & Language

<table>
	<tbody>
		<tr>
			<td>
				<p>Code-less</p>
			</td>
			<td>
				<p>Rich set of utilities to generate and maintain automated script without programming skills.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Groovy</p>
			</td>
			<td>
				<p>2.4.7</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Java</p>
			</td>
			<td>
				<p>v8.0 - v14</p>
			</td>
		</tr>
	</tbody>
</table>

### Testing Methodologies

<table>
	<tbody>
		<tr>
			<td rowspan="6">
				<p><a href="https://github.com/katalon-studio-samples/data-driven-tests">Data-driven testing - DDT</a></p>
			</td>
			<td>
				<p>Database</p>
			</td>
			<td>
				<p>Version</p>
			</td>
			<td>
				<p>Katalon Studio 7.0+</p>
			</td>
			<td>
				<p>Katalon Studio 7.5+</p>
			</td>
			<td>
				<p>Katalon Studio Enterprise 7.0+</p>
			</td>
			<td>
				<p>Katalon Studio Enterprise 7.5+</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>MySQL</p>
			</td>
			<td>
				<p>8.0+</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>PostgreSQL</p>
			</td>
			<td>
				<p>all version</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Oracle SQL</p>
			</td>
			<td>
				<p>all version</p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td rowspan="2">
				<p>SQL Server</p>
			</td>
			<td>
				<p>2008-2016</p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p> </p>
			</td>
		</tr>
		<tr>
			<td>
				<p>2008-2017</p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td colspan="3">
				<p><a href="https://github.com/katalon-studio-samples/katalon-bdd-cucumber-tests">Behavior-driven development - BDD</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td colspan="3">
				<p>Keyword-driven testing - KDT</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td colspan="3">
				<p>Page Object Model - POM</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Testing Capabilities

<table>
	<tbody>
		<tr>
			<td>
				<p>Integration Testing</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Functional Testing</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>E-2-E Testing</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://github.com/katalon-studio-samples/web-visual-testing-samples">Visual Testing</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Report

<table>
	<tbody>
		<tr>
			<td>
				<p>Type</p>
			</td>
			<td>
				<ul>
					<li>HTML</li>
					<li>PDF</li>
					<li>CSV</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<p>Dynamic email configuration</p>
			</td>
			<td>✔</td>
		</tr>
		<tr>
			<td>
				<p>Release/build-based reports</p>
			</td>
			<td>✔</td>
		</tr>
		<tr>
			<td>
				<p>Performance, Trending &amp; Insights reports</p>
			</td>
			<td>✔</td>
		</tr>
	</tbody>
</table>

### Cloud Device Integration

<table>
	<tbody>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/videos/introducing_kobiton_katalon_studio.html">Kobiton</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/saucelabs-plugin.html">Sauce Labs</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/browserstack-integration.html">Browserstack</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/lambdatest-integration.html">LambdaTest</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/introduction-to-desired-capabilities.html#remote-server">Custom integration</a></p>
			</td>
			<td>✔</td>
		</tr>
	</tbody>
</table>

### ALM Integration

<table>
	<tbody>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/jira-integration.html">Jira</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/qtest-integration.html">qTest</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/testrail-integration.html">TestRail</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/rally-integration.html">Rally</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/testlink-integration.html">TestLink</a></p>
			</td>
			<td>✔</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-store/docs/publisher/example-plugin-testrail.html">Custom ALM integration</a></p>
			</td>
			<td>&nbsp;✔</td>
		</tr>
	</tbody>
</table>

### CI/CD Integration

<table>
	<tbody>
		<tr>
			<td>
			</td>
			<td>
				<p>Version</p>
			</td>
			<td>
				<p>7.8</p>
			</td>
			<td>
				<p>7.9</p>
			</td>
			<td>
				<p>8.0</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://plugins.jenkins.io/pam-auth/#documentation">Jenkins</a></p>
			</td>
			<td>&nbsp;</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/azure-devops-integration.html">Azure DevOps Pipeline</a></p>
			</td>
			<td>&nbsp;</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p> </p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/integration-circleci.html#setup-and-configuration">CircleCI</a></p>
			</td>
			<td>&nbsp;</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://marketplace.atlassian.com/apps/1220235/katalon-testops-for-bamboo/version-history">Bamboo</a></p>
			</td>
			<td>
				<p>6.0.0</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://plugins.jetbrains.com/plugin/12653-katalon-studio-runner/versions">TeamCity</a></p>
			</td>
			<td>&nbsp;</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/katalon-studio-github-action.html">Katalon Studio Github Action</a></p>
			</td>
			<td>&nbsp;</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Integration with other Katalon products and extensions

<table>
	<tbody>
		<tr>
			<td>
				<p><strong>Product</strong></p>
			</td>
			<td>
				<p>7.8</p>
			</td>
			<td>
				<p>7.9</p>
			</td>
			<td>
				<p>8.0</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Katalon Recorder</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>&nbsp;✔</td>
			<td>&nbsp;✔</td>
		</tr>
		<tr>
			<td>
				<p>Katalon TestOps</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Migration from other tools

<table>
	<tbody>
		<tr>
			<td>
				<p><strong>Tools</strong></p>
			</td>
			<td>
				<p>7.8</p>
			</td>
			<td>
				<p>7.9</p>
			</td>
			<td>
				<p>8.0</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/selenium-testng-junit-migration.html">Selenium</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/import-selenium-ide.html">Selenium IDE</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/import-postman.html">Postman</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://docs.katalon.com/katalon-studio/docs/import-soapui.html">SoapUI</a></p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
			<td>
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Offering

<table>
	<tbody>
		<tr>
			<td>
				<p>Community package (<a href="https://www.katalon.com/pricing/">Comparison</a>)</p>
			</td>
			<td colspan="3">
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p>Enterprise packages</p>
			</td>
			<td colspan="3">
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

### Support

<table>
	<tbody>
		<tr>
			<td>
				<p><a href="https://forum.katalon.com/">Katalon forum</a></p>
			</td>
			<td colspan="3">
				<p>✔</p>
			</td>
		</tr>
		<tr>
			<td>
				<p><a href="https://www.katalon.com/pricing/">Exclusive Support Service</a></p>
			</td>
			<td colspan="3">
				<p>✔</p>
			</td>
		</tr>
	</tbody>
</table>

<p id="mobile-limit">(*) <i>Limitation: Elements inside embedded web views cannot be captured automatically by Record&Spy utilities. </i><a href="#top">Back to top</a></p>

> Leave a comment below to propose any technologies you need Katalon Studio to support.
