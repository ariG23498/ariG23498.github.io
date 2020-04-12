---
layout: blog
title: Posts
permalink: /posts
---

<!-- Write the Post page here -->
<div class="main">
<div class="post-wrap archive">
    <h3>2020</h3>
    {% for post in site.posts %}
    <article class="archive-item"><a class="archive-item-link" href="{{ post.url }}">{{ post.title }}</a>
</article>
    {% endfor %}
</div>
</div>