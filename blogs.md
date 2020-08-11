---
layout: blog
title: Posts
permalink: /posts
---

<!-- Write the Post page here -->
<div class="main">
<div class="post-wrap archive">
    <h3>2020</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="{{site.url}}/assets/BatchNorn.pdf">Back Propagation in Batch Normalization</a>
    </article>
    {% for post in site.posts %}
    <article class="archive-item">
        <a class="archive-item-link" href="{{ post.url }}">{{ post.title }}</a>
    </article>
    {% endfor %}
    <h3>Weights and Biases</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="https://app.wandb.ai/authors/class-imbalance/reports/Simple-Ways-to-Tackle-Class-Imbalance--VmlldzoxODA3NTk">Simple-Ways-to-Tackle-Class-Imbalance</a>
    </article>
    <h3>Medium</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="https://medium.com/xperience/hexato-13c91badc770">Hexato</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://medium.com/@aritra.born2fly/just-a-tad-bit-of-java-fc55df737fb9">Tad Bit of Java</a>
    </article>
</div>
</div>