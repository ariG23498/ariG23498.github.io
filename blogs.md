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
    <article class="archive-item">
        <a class="archive-item-link" href="{{ post.url }}">{{ post.title }}</a>
    </article>
    {% endfor %}
    <article class="archive-item">
        <a class="archive-item-link" href="{{site.url}}/assets/BatchNorm.pdf">Back Propagation in Batch Normalization</a>
    </article>
    <h3>Weights and Biases</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="http://bit.ly/img_cap">Show and Tell</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/embeddings-2/reports/GloVe--VmlldzozNDg2NTQ">GloVe</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/embeddings/reports/Word2Vec---VmlldzozMzIxNjQ">Word2Vec</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/vlga_cnn">Survival of the Fittest CNN Model</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/under_RNN">Under the hood of RNNs</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/under_LSTM">Under the hood of LSTMs</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/nerual_style_transfer/reports/Part-1-Deep-Representations-a-way-towards-neural-style-transfer--VmlldzoyMjQzNDY">Part 1: Deep Representations, a way towards neural style transfer</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/nerual_style_transfer/reports/Part-2-Deep-Representations-a-way-towards-neural-style-transfer--VmlldzoyMjYyNzk">Part 2: Deep Representations, a way towards neural style transfer</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://app.wandb.ai/authors/image-retrieval/reports/Towards-Representation-Learning-for-an-Image-Retrieval-Task--VmlldzoxOTY4MDI">Towards Representation Learning for an Image Retrieval Task</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://app.wandb.ai/authors/class-imbalance/reports/Simple-Ways-to-Tackle-Class-Imbalance--VmlldzoxODA3NTk">Simple Ways to Tackle Class Imbalance</a>
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
