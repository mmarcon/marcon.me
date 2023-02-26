---
title: Measuring Developer Experience
description: A lot is happening in the area of Developer Experience (DevX). A lot of tech companies are set to improve their DevX. Startups are being founded on the premise of improving DevX. But the first thing to do to improve something is to measure it.
date: 2022-12-04
tags:
  - developer experience
  - chatgpt
  - measure things
  - products for developers
layout: layouts/article.njk
header: measuring-dx/measure.jpg
# permalink: /articles/...
---

## What does Developer Experience mean?

First of all, let's define Developer Experience (DevX):

<figure>
  <blockquote class="blockquote">
    <p>Developer experience describes the interactions and feelings that a developer has when working with a body of code in order to meet a specific objective. You can think of developer experience as the user experience specifically for programmers.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
     Bob Reselman and Matthew Broberg (Red Hat) in <cite title="Developer experience: an essential aspect of enterprise architecture"><a href="https://www.redhat.com/architect/developer-experience">Developer experience: an essential aspect of enterprise architecture</a></cite>
  </figcaption>
</figure>

I feel this is a good definition because it captures an important aspect of it: it's about **interactions** and **feelings**.

When we work on DevX, we need to think about all the touchpoints developers have with our products, how they work with them, and how they integrate them with the greater ecosystem of tools and processes they typically work with. These represent the *interactions*.

And we also need to think about how developers *feel* while they do that. Do they feel annoyed because your product seems kind of backwards? Or do they feel satisfied because your product fits perfectly into their way of working and thinking and makes them save time or effort when performing a particular task in the direction of meeting their objective?

These are all things that we always need to keep in mind, and ideally all things we can measure.

## Measuring Developer Experience

When we build products, one of the areas we focus on is their user experience. When the products or services we build are targeted at developers, then what we say we focus on is developer experience. In particular, we often make changes, add tools, APIs, SDKs and intgrations to "improve the developer experience". But how do we know we are improving developer experience? We need to be able to measure it to be able to state that we are actually improving it.

But how do we measure something as abstract as developer experience? What should our primary metric be? How do we measure if we are going in the right direction?

To kick off my research, I asked this question to [ChatGPT](http://chat.openai.com/):

<div class="card mb-3">
<div class="card-body font-monospace">

  <p>
    <i class="fa-solid fa-user"></i>
    If you had to pick one metric to measure developer experiencr, what would it be?
  </p>

  <p>
    <i class="fa-solid fa-robot"></i>
    <strong>If I had to pick one metric to measure developer experience, it would likely be "time to complete a task" (TTC).</strong>
  TTC is a metric that measures the amount of time it takes for a developer to complete a task using a specific product or tool, and can provide insight into how user-friendly and efficient the product is. This can include time spent on coding, testing, debugging and deployment. <strong>A low TTC indicates that developers are able to complete tasks quickly and efficiently, which is generally considered a positive indicator of developer experience.</strong><br>
  It's worth mentioning that the selection of a metric is very much dependent on the context of the product and the goal of the product. "Time to Complete Task" could be a good metric for one product but for other product it may not be so. There can be a trade-off between having one metric for everything and having different metric for different use-cases.
  </p>
</div>
</div>

I feel ChatGPT is on the right track here. Let's unpack what it's saying.

First of all, ChatGPT suggests looking at "time to complete a task", or TTC. This is a bit of a high-level metric, but one that can be specialized to apply to most products for developers.

Developers often think about **efficiency**, about **getting stuff done with the least amount of effort**, about **saving time**, about **shortening the feedback loop**.

**If we are introducing a product that has to become part of their workflows or part of the toolchain, for it to be successful we need to make sure it is reducing the time they spend to complete a certain task.**

Thinking about this a bit more, I realized that with my team at MongoDB we went through an exercise of defining and tracking a similar metric when we were working on [Compass, the GUI for MongoDB](https://www.mongodb.com/products/compass), trying to figure out how to make it significantly better.

One of the biggest feedback areas from users and customers was around performance and startup time. Based on qualitative and analytics data, we also knew that the vast majority of our users use a tool like Compass to query MongoDB and explore their data. At the same time, we knew that strategically, one of our priorities is to ensure customers get the most out of MongoDB's query language.

![MongoDB Compass](/img/measuring-dx/mongodb-compass.png)

With all this information at hand, the team reached the conclusion that what we should be optimizing for – and the metric we should be tracking – is "time to first query" (TTFQ).

A metric like TTFQ is a good metric because:

* **It is easy to set a goal** for what you think a good value should be, e.g. 5 or 10 seconds.
* **You can continuosly monitor that value** as part of your test suite. This way, if you make changes to the product that makes the experience worse, you know immediately.
* **You can test it qualitatevely with customers by asking a simple question**, e.g. "with change X, do you feel performing task T is fast enough (or faster than it used to be)?".

**The great thing about TTFQ and similar metrics is that they are *leading indicators* of whether your are going in the right direction with your product**, i.e. they give you an early perspective on the success of the changes you make to your product. **They constitute a much more effective and granular way to understand the impact of your work than *lagging indicators*** such as satisfaction metrics (e.g. NPS) or adoption and retention metrics do.

Let's back to the *interactions* and *feelings* that I described above and see how TTC can be a good proxy for them.

As we lower the TTC, we make interactions more effective: it means our product helps developers complete the task we are set to facilitate more effectively, either with our product in isolation or with our product as part of a greater ecosystem of tools and services that are part of their journey.

And what about feelings? Well, if a product makes tasks easier and faster to perform, it's not unlikely that its users will feel satisfied. And when you go and ask for qualitative feedback, developers will for sure let you know how they feel about the change. 

## Conclusion

Developer experience is an essential aspect of building products and services for developers and it is about the interactions and feelings that developers have when working with a product to achieve a specific objective.

Measuring developer experience is crucial to improve it. Time to complete a task (TTC) or a specialized version of it are good metrics because they provide a leading indicator of whether you are actually making improvements. It's also a very tangible metric that you can track and display on a dashboard to have it always in front of you and your team.