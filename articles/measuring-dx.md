---
title: Measuring Developer Experience
description: A lot is happening in the area of Developer Experience (DX). A lot of tech companies are set to improve their DX. Startups are being founded on the premise of improving DX. But the first thing to do to improve something is to measure it. And how can we measure something as abstract as Developer Experience? I did some research, discussed it with ChatGPT – because why not – and now I am writing it all down for you.
date: 2022-12-04
tags:
  - developer-experience
  - chatgpt
  - measure-things
layout: layouts/article.njk
# permalink: /articles/cli-telemetry-best-practices/
---

## What does Developer Experience mean?

First of all, let's define Developer Experience (or DX, or DevX):

<figure>
  <blockquote class="blockquote">
    <p>Developer experience describes the interactions and feelings that a developer has when working with a body of code in order to meet a specific objective. You can think of developer experience as the user experience specifically for programmers.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
     Bob Reselman and Matthew Broberg (Red Hat) in <cite title="Developer experience: an essential aspect of enterprise architecture"><a href="https://www.redhat.com/architect/developer-experience">Developer experience: an essential aspect of enterprise architecture</a></cite>
  </figcaption>
</figure>

I feel this is a good definition because it captures an important aspect of it: it's about **interactions** and **feelings**. This means that when we work on DX we need to think about all the touchpoints developers have with our products and how they work with them and integrate them within the greater ecosystem of tools and processes they typically work with. And we also need to think about how developers *feel* while they do that. Do they feel annoyed because your product seems kind of backwards? Or do they feel satsfied because your product fits perfectly into their way of working and thinking and makes them save time or effort when performing a particular task in the direction of meeeting their objective?

These are all things that we always need to keep in mind, and ideally all things we can measure.

## Developer Experience North Star

When working on a product, I feel it's always useful to have a North Star with an associated metric we can measure. This applies to DX and DX products too. Now, what should our North Star be, when we talk about improving DX? To kickoff my research, I asked this question to ChatGPT:

<div class="card mb-3">
<div class="card-body font-monospace">

  <p>
    <i class="fa-solid fa-user"></i>
    If you had to pick one north star metric to measure developer experiencr, what would it be?
  </p>

  <p>
    <i class="fa-solid fa-robot"></i>
    <strong>If I had to pick one metric as a "north star" to measure developer experience, it would likely be "time to complete a task" (TTC).</strong>
  TTC is a metric that measures the amount of time it takes for a developer to complete a task using a specific product or tool, and can provide insight into how user-friendly and efficient the product is. This can include time spent on coding, testing, debugging and deployment. A low TTC indicates that developers are able to complete tasks quickly and efficiently, which is generally considered a positive indicator of developer experience.
  It's worth mentioning that selecting a metric as a "north star" is very much dependent on the context of the product and the goal of the product. "Time to Complete Task" could be a good metric for one product but for other product it may not be so. There can be a trade-off between having one metric for everything and having different metric for different use-cases.
  </p>
  <p>
    Some other example of North star Metrics are:
  </p>
  <ul>
    <li>Deployment frequency (how often the code is being deployed)</li>
    <li>Code review turn-around time (how fast the code is being reviewed)</li>
    <li>Code test coverage (how much of the code is being tested)</li>
  </ul>
  <p>
    It's important to carefully consider which metric is most relevant and meaningful in the specific context, and also to track other relevant metrics alongside the "north star" metric to get a more complete picture of the developer experience.
  </p>
</div>
</div>