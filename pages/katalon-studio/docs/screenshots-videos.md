---
title: "Screenshots and Videos"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/screenshots-videos.html
---

Katalon Studio allows screenshot capturing and video recording during test execution for the purpose of effective and timesaving debugging.

In this manual, you will learn how to capture screenshots and record videos of test runs, where to find these artifacts and what are the options to use them for debugging.

## Screenshots

By default, the test engine captures screenshots automatically upon test failures. This feature is currently applicable to Web UI and Mobile testing. To turn off this function, do as follows:

* In version **7.8 onwards**:

Go to **Project** > **Settings** > **Execution**. In the displayed **During-Execution Options** panel, uncheck **Take Screenshot when execution failed** and click **Apply and Close**.
* In version **before 7.8**: 

Go to **Project** > **Settings** > **Report**. In the displayed **Report** view, uncheck **Take Screenshot when execution failed** and click **OK**.

If you wish to manually take screenshots of the application under test during runtime, you can use the following built-in keywords for Web UI and Mobile respectively:

* [[WebUI] Take Screenshot](https://docs.katalon.com/katalon-studio/docs/webui-take-screenshot.html)
* [[WebUI] Take Screenshot As Checkpoint](https://docs.katalon.com/katalon-studio/docs/webui-take-screenshot-as-checkpoint.html) (Available in 7.7)
* [[WebUI] Take Area Screenshot As Checkpoint](https://docs.katalon.com/katalon-studio/docs/webui-take-area-screenshot-as-checkpoint.html) (Available in 7.7)
* [[WebUI] Take Area Screenshot](https://docs.katalon.com/katalon-studio/docs/webui-take-area-screenshot.html) (Available in 7.7)
* [[WebUI] Take Element Screenshot As Checkpoint](https://docs.katalon.com/katalon-studio/docs/webui-take-element-screenshot-as-checkpoint.html) (Available in 7.7)
* [[WebUI] Take Element Screenshot](https://docs.katalon.com/katalon-studio/docs/webui-take-element-screenshot.html) (Available in 7.7)
* [[WebUI] Take Full Page Screenshot As Checkpoint](https://docs.katalon.com/katalon-studio/docs/webui-take-fullpage-screenshot-as-checkpoint.html) (Available in 7.7)
* [[WebUI] Take Full Page Screenshot](https://docs.katalon.com/katalon-studio/docs/webui-take-fullpage-screenshot.html) (Available in 7.7)
* [[Mobile] Take Screenshot](https://docs.katalon.com/katalon-studio/docs/mobile-take-screenshot.html)

Katalon Studio stores screenshots in the **Report** folder within a project. You can view the captured screenshots in **Log Image** after execution.

1. When a test suite fails, open its result tab.
2. Select the failed test case.
3. On the top right corner, click on **Show Test Case Details**
3. In the Test Case's Log, select the **Image** tab and view the captured screenshot.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/screenshots-videos/log-image.png" height=330>

You can use the taken screenshots for visual testing with TestOps Vision. [Learn more](https://forum.katalon.com/t/update-with-katalon-studio-7-7-early-release-of-katalon-testops-visual-testing-image-comparison/45557).

## Videos

Together with execution logs and screenshots, videos are of great assistance to decide what went wrong during the runtime of automated tests. By watching the recorded videos to see how the automated test was executed, the testing team can identify exactly where the test failed and hence, save substantial time and resources.

> Notes
> * Video recorder applies to Web UI testing only.
> * For remote browsers, you're recommended to use [Katalium Server](https://docs.katalon.com/katalium-server/docs/katalium-server-katalon-studio-remote-machine.html) to view captured sessions.

## Screen Video Recorder

Screen Video Recorder captures and records what happens on a screen during runtime for non-headless Browsers testing.

Screen Video Recorder is currently available for:

* Test Suite execution. For recording **parallel execution**, please see [Browser-based Video Recorder](https://docs.katalon.com/katalon-studio/docs/screenshots-videos.html#browser-based-video-recorder)
* Chrome, Firefox, Safari, Microsoft Edge, and IE

> [K-Lite Codec](https://www.codecguide.com/download_kl.htm) is recommended to play the recorded screen-based video.

Follow the steps below to record the screen:

### For configurations in version 7.8 onwards

1. Go to **Project** > **Settings** > **Execution** to open the **Execution** view.
2. In the **During-Execution Options** panel, enable Video Recorder by checking **Record Video during execution**.
   
   By default, **Browser-based Recorder** for **failed Test Cases only** is selected.

3. Select **Screen Recorder** and specify Video settings based on your preferences. 

   Katalon Studio recommends AVI (`.avi`) format and low quality to save disk space. The higher the video quality is, the bigger the file size is.

* **Video format**: AVI (`.avi`) or MOV (`.mov`)
* **Video quality**: Low; Medium or High

4. Click **Apply and Close**.

### For configurations in versions before 7.8

1. After creating a test suite in Katalon Studio, go to **Project** > **Settings** > **Report** to open the **Report** view.

   ![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/video-capturing/image2017-8-25-143A243A12.png)  

2. Check **Enable Video Recorder during execution** option. 

   By default, Katalon Studio only captures **Failed** test cases. However, you can decide to either capture the **Passed** or **Failed** test cases, or both.  

    ![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/video-capturing/image2017-8-25-153A43A45.png)  

3. Specify Video settings based on your preferences. 
   
   Katalon Studio recommends AVI (`.avi`) format and low quality to save disk space. The higher the video quality is, the bigger the file size is.

* **Video format**: AVI (`.avi`) or MOV (`.mov`)
* **Video quality**: Low; Medium or High

4. Click **OK**

> **If you use macOS, make sure you enable Katalon Studio for Screen Recording.**
>
> Go to **Security & Privacy** settings > **Privacy** > **Screen Recording** > Allow Katalon Studio to do Screen Recording.

## Browser-based Video Recorder

In version **7.8**, the Studio team ships browser-based video recording for both full Browsers and Headless Browsers, which is incredibly helpful for troubleshooting a failed test. With Screen Recorder, you can capture what's visible on the screen, while with the Browser-based Video Recorder, you can:

* choose **Record video of browser window only** (even if it's hidden behind another window).
* choose **Record video of Headless browser**.

   Headless Browser is a way to run browsers in a headless environment, popularly used for test automation and browser testing in CI/CD pipeline when you don't need a visible GUI. You can learn more about Headless Browser Execution in this [manual](https://docs.katalon.com/katalon-studio/docs/headless-browsers-execution.html).

* choose **Record videos of multiple browsers simultaneously** (for instance, parallel execution of Test Suite Collection).

**Preconditions:**

* An active Katalon Studio Enterprise license
* Katalon Studio version 7.8

> Note
> * Available for Chrome, Microsoft Edge (Chromium-based), and [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome). 
> * Support Test Suite and Test Suite Collection execution

The below section guides you on configuring the browser-based video recorder in project settings and viewing videos.

### Configurations for Browser-based Video Recorder

To use this feature, you need to enable it in Project Settings of Katalon Studio and install a third-party library (FFmpeg) used for encoding videos.

#### Enable Browser-based Video Recorder in Katalon Studio

1. Go to **Project** > **Settings** > **Execution** to open the Execution view.
2. In the **During Execution Options** panel, enable Video Recorder by checking **Record Video during execution**.

   By default, **Browser-based Recorder** for **failed Test Cases only** is selected.
3. Set a window size of 1500x1000 for the browser you record in Project Settings.

* Go to **Project** > **Settings** > **Desired Capabilities** > **Web UI**. Select **Chrome** or **Chrome Headless** or **Edge Chromium**.
   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/screenshots-videos/browser-size.png">

   > Learn more about how to set [Desired Capabilities for Web UI](https://docs.katalon.com/katalon-studio/docs/introduction-to-desired-capabilities.html#chromechrome-headless)

4. Click **Apply and Close**.

#### Install FFmpeg library

To install the FFmpeg library,

**For macOS**:

* Install FFmpeg via Homebrew with `$ brew install ffmpeg`,

   OR
* Install it manually:

1. Go to the [FFmpeg download web page](https://ffmpeg.org/download.html).
2. Download the package which is appropriate for your operating system.
3. Add the path to the `.../ffmpeg/bin` folder to the `/etc/paths` file 

**For Linux**:

* Use the following command: `sudo apt-get install ffmpeg`,

   OR

* Install it manually:

1. Go to the [FFmpeg download web page](https://ffmpeg.org/download.html).
2. Download the package which is appropriate for your operating system.
3. Add the path to the `.../ffmpeg/bin` folder to the `/etc/environment` file 

**For Windows**: 

1. Go to the [FFmpeg download web page](https://ffmpeg.org/download.html).
2. Download the package which is appropriate for your operating system.
3. Add the path to the FFmpeg executable file to your PATH environment variable.
4. Reactivate Katalon Studio for this installation to take effect.

### Katalon Docker Image

Katalon Docker Image could be used as a container to execute Katalon Studio tests and write reports to the host's file system.

Currently, Katalon Docker Image doesn’t include FFmpeg library. You can build your own image by following these steps:

1. Create a docker image file with this content:

   ```groovy
   FROM katalonstudio/katalon
   RUN apt-get -y update
   RUN apt-get install -y ffmpeg
   ```

2. Build your own image. Eg:

   ```groovy
   docker build -t mybuild .
   ```

3. Run your docker with Katalon script. Eg:

   ```groovy
   docker run -t --rm -v "$(pwd)":/tmp/project mybuild katalonc.sh -projectPath=/tmp/project - 
   browserType="Chrome" -retry=0 -statusDelay=15 -testSuitePath="Test Suites/TS_RegressionTest"
   ```

## View recorded videos

After running the test suite, navigate to the **Result** tab. You can view the list of test cases in the test case table with videos attached accordingly. Click on the *Play* icon in the **Video** column to play the video. Each test step in a video have a description embedded like a subtitle. For example:

![](https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/video-capturing/image2017-8-25-153A353A13.png)

Katalon stores recorded videos in the **Report** folder within a project.
