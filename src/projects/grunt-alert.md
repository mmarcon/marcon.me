---
layout: project.html
title: Grunt Alert
subtitle: Sends alerts about failing builds using Slack, Hipchat or SMS.
collection: projects 
date: 2015-03-15
image: grunt-alert.jpg
thumb: grunt-alert-thumb.png
---

[Grunt Alert](https://www.npmjs.com/package/grunt-alert) is a [Grunt](http://gruntjs.com/) plugin that notifies developers when the build breaks. The plugin can be configured to work with [Slack](https://slack.com/), [HipChat](https://hipchat.com/) or for critical build jobs even with SMSs via [Twilio](https://www.twilio.com/).

The plugin can be installed for your project with:

	npm install grunt-alert --save-dev
	
Grunt Alert is especially useful when used with a continuos integration (CI) setup. If something goes wrong with the build your CI server can use grunt-alert to notify you using your favorite platforms.
	
For more information, the documentation and to learn how to configure Grunt Alert for your needs have a look at the [Github repository](https://github.com/mmarcon/grunt-alert).

<!--![grunt-alert](${images}/grunt-alert-thumb.png)-->