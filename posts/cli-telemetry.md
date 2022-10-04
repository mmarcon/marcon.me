---
title: 6 telemetry best practices for CLI tools
description: Observing how CLI tools are used during the developer journey is extremely useful to understand how developers are using our products. But what do we need to keep in mind to implement telemetry collection in CLI tools?
date: 2022-10-03
tags:
  - telemetry
  - CLI
  - developer-tools
  - analytics
layout: layouts/post.njk
---

In the last few years, I've spent the majority of my time thinking about how to make developers more productive with MongoDB – or in other words, how to improve their Developer Experience.

When we think about developer experience, most of the time somewhere in the developer journey we will find command line (CLI) tools. CLI tools are used to install packages, build application bundles, deploy infrastructure, fetch log files, and much more. **CLI tools are great for developers because they make repetitive tasks easy to automate, they are easy to combine and integrate, and they are easy to document**.

For tool builders like us, observing how CLI tools are used during the developer journey is extremely useful to understand how developers are using our products, where they are successful and where they fail, and where they are doing things we don't expect. This is something that companies have been doing for years for web applications and mobile apps – think Google Analytics or Firebase – but when it comes to CLI tools, telemetry and analytics are less standardized and I feel we lack a set of best practices.

In this article, I will try to synthesize what my experience has been so far and distill a set of best practices based on my observations.

## Be intentional about the telemetry you collect

This best practice applies to any product, not just to CLIs. **It’s important to be intentional about what we want to track and not leave it to chance**.

Especially at the beginning of a new product-building journey, it’s easy to fall into the trap of “we’ll just track everything because it might be useful one day”. That often results in catch-all telemetry functions that end up sending your customers’ Personal Identifiable Information (PII) or other sensitive customer information to your telemetry service – or to one or more 3rd-party services 😱.

Here is what this may look like:

<div class="card">
<div class="card-body">

Product Manager: *We want to know what are the most commonly used CLI arguments our users use with our tools.*
Developer: *Cool. We'll make this future-proof so we don't need to update the code every time we add a new flag.*

```javascript
// Log all the CLI arguments
track('new session', {args: process.argv})
```
Customer:

```bash
$ awesome-tool create unicorns \
  --user banana@customer.com \
  --password pear
```
Now we have our customer’s email and password logged in our telemetry database, or worse, in Google Analytics. This is bad, and we should not let that happen.
</div>
</div>

To avoid this unpleasant situation, I recommend doing a tracking plan (here is a good description of what a tracking plan contains: https://segment.com/blog/what-is-a-tracking-plan/).

**A tracking plan is a living document that contains a list of all the telemetry events we need to collect and their properties**. It can be used as a guideline for the engineering team to understand where the code needs to be instrumented to collect telemetry and what properties each telemetry should have. When telemetry tracking gets implemented, only the properties listed in the tracking plan should be collected.

## Transparency is key

**It is important to be transparent about the fact that you are collecting telemetry, about what information you are collecting and are not collecting, and it’s important to show the user how they can disable telemetry**.

This means your documentation should contain this information but you should also consider displaying an in-product notice the first time the user uses your CLI tool.

## Have a convenient way to disable telemetry

Depending on the environment where your CLI tool runs, your customers may need different ways of disabling telemetry. While an individual user might be happy with disabling telemetry by setting a command line flag or by issuing an interactive command, an enterprise user may have certain policies they need to follow, i.e. they may have a requirement of telemetry being switched off for all users.

Because it’s hard to have one solution that fits all use cases, my suggestion is to have different ways of controlling the telemetry behavior.

Some examples:
 * A dedicated command;
 * A dedicated CLI argument;
 * An environment variable;
 * A global configuration file that applies to all users on the system.

Here is a list of how some popular developer tools are approaching this problem:

 * MongoDB Shell uses [a command](https://www.mongodb.com/docs/mongodb-shell/telemetry/) or a [global configuration file](https://www.mongodb.com/docs/mongodb-shell/reference/configure-shell-settings-global/#configurable-settings).
 * Netlify CLI uses a [CLI argument or a proerty in `config.json`](https://docs.netlify.com/cli/get-started/#usage-data-collection).
 * Homebrew uses [a command or an environment variable](https://github.com/Homebrew/brew/blob/master/docs/Analytics.md).
 * Next.js uses [an `npx` command](https://nextjs.org/telemetry).

It’s worth mentioning that there was [an attempt to standardize telemetry opt-out for CLI tools](https://consoledonottrack.com/) but at least until today this proposed standard has not been adopted widely.

## Performance of the tool is more important than telemetry collection

It’s important to talk about performance. Telemetry collection usually happens via HTTP and may bring a small overhead for your CLI tool. This is usually not noticeable, but I recommend checking the configuration of timeouts and retries of the HTTP library (or the SDK of the analytics tool) you are using. For example, [Segment’s analytics library for Node.js by default retries 3 times with an exponential delay](https://github.com/segmentio/analytics-node/blob/00c88ef91547f3e6ebd79b2e92e911c65fdc65fc/index.js#L62).

This is not problematic in normal conditions. However, when your CLI tool is used in an environment with no internet connection or with a firewall preventing it from reaching the analytics service, flushing the telemetry queue will fail. Depending on your implementation, an invocation of the command may not terminate until all the retry attempts have failed – which may mean a few seconds. This will give the perception that your tool is slow.

**A better solution is to make your telemetry collection best-effort: try to send the events once, and accept that it might fail**. In the majority of the cases, this will be an acceptable compromise.

## Collect information about the environment

As part of your telemetry, aside from tracking the user’s behavior/actions, collect information about the environment (e.g. operating system, version of the operating system, whether the tool is run in docker, etc.). **This information will be useful when it’s time to decide whether you need to keep supporting a certain platform or if it is ok to stop supporting it**. It’s not uncommon to forget about tracking this information – after all, when you instrument a web application to collect telemetry, most of the time this information is automatically collected by the analytics library. When you instrument a CLI tool, this is something you most likely have to be intentional about.

## Be prepared for a large volume of telemetry

Last but not least, **be prepared to receive a lot of telemetry events**. CLI tools are often used for scripting, they are used in CI pipelines, and they are used in ways you don’t expect (think of a “while true” loop as an example).

This has the potential of flooding your telemetry service with millions of events per day. Usually, when you see your charts trending upwards you feel excited: you have a lot of users, they use your tool a lot, you feel you are being successful and you can use all that data to have a granular understanding of how users are using your CLI tool.

A couple of months later, however, you may realize that you are reaching the monthly limit of the analytics service you purchased. You bump up the contract to a most expensive tier, and a couple of months later it starts happening again.

To avoid surprises, try to do some capacity planning upfront. Look at your tracking plan, try to estimate expected usage and event volume, see how that translates into the cost of analytics services, and evaluate whether the learnings and insights you get from your telemetry are worth the cost. If the answer is yes, go for it but still plan to have some sort of kill switch and test how your tool behaves if you need to activate said kill switch, i.e. make sure it keeps working even if you disable the telemetry endpoint.

Here a build-vs-buy decision is also important. Tools like Segment and Amplitude are fantastic: they make collecting and analyzing telemetry data extremely easy. However, you’d probably be surprised to see how much they cost for large volumes of events. If you don’t have a big budget, you may want to consider using a cheaper although less advanced solution or perhaps maintaining your telemetry infrastructure.

## Conclusion

In conclusion, telemetry for CLI tools is as important as telemetry for any other tool or application that is part of your user journey. However, because of their nature, CLI tools come with some expectations and constraints that you need to be aware of as you plan to track how users interact with them.
