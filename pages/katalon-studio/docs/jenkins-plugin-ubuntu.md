---
title: "How to use Katalon plugin for Jenkins on Ubuntu" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/jenkins-plugin-ubuntu.html 
description: This article will show you how to use Jenkins plugin on Ubuntu.
---
This tutorial will walk you through basic steps to run Katalon Studio’s web UI tests using [our plugin for Jenkins](https://plugins.jenkins.io/katalon) on a headless Ubuntu machine i.e. a machine without any display.

If you are interested in using Docker images instead, please see [https://github.com/katalon-studio-samples/ci-samples](https://github.com/katalon-studio-samples/ci-samples).

If you are using Windows or macOS we will have similar tutorials soon.


## **Install Jenkins**

Please follow official instructions by Jenkins.

>[Installing Jenkins](https://jenkins.io/doc/book/installing/#debianubuntu)



## **Install Google Chrome**


```
wget -O google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt -y -f install
```



## **Install Xvfb**

From [Wikipedia](https://en.wikipedia.org/wiki/Xvfb):

"Xvfb or X virtual framebuffer is a display server implementing the X11 display server protocol. In contrast to other display servers, Xvfb performs all graphical operations in virtual memory without showing any screen output. From the point of view of the client, it acts exactly like any other X display server, serving requests and sending events and errors as appropriate. However, no output is shown. This virtual server does not require the computer it is running on to have any kind of graphics adapter, a screen or any input device. Only a network layer is necessary."


```
sudo apt install -y xvfb
```



## **Install Katalon plugin for Jenkins**

Go to _Manage Jenkins > Manage Plugins > Available_ and find Katalon plugin on the list.


![](../../images/katalon-studio/docs/jenkins-plugin-ubuntu/Picture1.png)

## **Create and configure a new Jenkins project**

To keep it simple, I will use _Freestyle project_.

![](../../images/katalon-studio/docs/jenkins-plugin-ubuntu/Picture2.png)

The sample Katalon Studio project can be cloned from [Github](https://github.com/katalon-studio-samples/ci-samples).


![](../../images/katalon-studio/docs/jenkins-plugin-ubuntu/Picture3.png)

Next, add and configure the build step _Execute Katalon Studio tests_ provided by Katalon plugin for Jenkins.



*   Katalon Studio will be downloaded and installed automatically based on the version you specify.
*   Please leave out `-runMode` in the arguments list.
*   If you want to learn more about `xvfb-run` configuration please see [its manual](http://manpages.ubuntu.com/manpages/xenial/man1/xvfb-run.1.html). If you are not sure, only change the resolution `1024x768x24` and leave other options as-is.


![](../../images/katalon-studio/docs/jenkins-plugin-ubuntu/Picture4.png)


![](../../images/katalon-studio/docs/jenkins-plugin-ubuntu/Picture5.png)

If for some network conditions the Katalon Studio package cannot be downloaded, you can install it manually and specify its location.


```
me@ubuntu:~$ sudo su
root@ubuntu:~$ su jenkins
jenkins@ubuntu:~$ wget https://github.com/katalon-studio/katalon-studio/releases/download/v5.10.1/Katalon_Studio_Linux_64-5.10.1.tar.gz
jenkins@ubuntu:~$ tar -xzf Katalon_Studio_Linux_64-5.10.1.tar.gz
jenkins@ubuntu:~$ cd Katalon_Studio_Linux_64-5.10.1 && pwd
```


The last command will print the location you need (`/var/lib/jenkins/Katalon_Studio_Linux_64-5.10.1`).


## **Run, Katalon, run!**

Go to the Jenkins project page (e.g. at [http://localhost:8060/jenkins/job/test/](http://localhost:8060/jenkins/job/test/) if its name is “test”), click **Build Now**.

After it finished, you can find the report in the _Last Successful Artifacts_ section.

[Katalon Studio sample test execution](https://www.youtube.com/watch?v=AQKjz3txrZ4)
