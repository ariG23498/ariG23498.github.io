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
        <a class="archive-item-link" href="{{ post.url }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
    </article>
    {% endfor %}
    <article class="archive-item">
        <a class="archive-item-link" href="{{site.url}}/assets/BatchNorm.pdf" target="_blank" rel="noopener noreferrer">Back Propagation in Batch Normalization</a>
    </article>
    <h3>Weights and Biases</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="http://bit.ly/enrich_sub" target="_blank" rel="noopener noreferrer">Enriching Word Vectors with Sub-word Information</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="http://bit.ly/seqtoseq" target="_blank" rel="noopener noreferrer">Sequence to Sequence with `tf.keras`</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="http://bit.ly/keras-tuner" target="_blank" rel="noopener noreferrer">Keras Tuner with W&B</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="http://bit.ly/img_cap" target="_blank" rel="noopener noreferrer">Show and Tell</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/embeddings-2/reports/GloVe--VmlldzozNDg2NTQ" target="_blank" rel="noopener noreferrer">GloVe</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/embeddings/reports/Word2Vec---VmlldzozMzIxNjQ" target="_blank" rel="noopener noreferrer">Word2Vec</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/vlga_cnn" target="_blank" rel="noopener noreferrer">Survival of the Fittest CNN Model</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/under_RNN" target="_blank" rel="noopener noreferrer">Under the hood of RNNs</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://bitly.com/under_LSTM" target="_blank" rel="noopener noreferrer">Under the hood of LSTMs</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/nerual_style_transfer/reports/Part-1-Deep-Representations-a-way-towards-neural-style-transfer--VmlldzoyMjQzNDY" target="_blank" rel="noopener noreferrer">Part 1: Deep Representations, a way towards neural style transfer</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://wandb.ai/authors/nerual_style_transfer/reports/Part-2-Deep-Representations-a-way-towards-neural-style-transfer--VmlldzoyMjYyNzk" target="_blank" rel="noopener noreferrer">Part 2: Deep Representations, a way towards neural style transfer</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://app.wandb.ai/authors/image-retrieval/reports/Towards-Representation-Learning-for-an-Image-Retrieval-Task--VmlldzoxOTY4MDI" target="_blank" rel="noopener noreferrer">Towards Representation Learning for an Image Retrieval Task</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://app.wandb.ai/authors/class-imbalance/reports/Simple-Ways-to-Tackle-Class-Imbalance--VmlldzoxODA3NTk" target="_blank" rel="noopener noreferrer">Simple Ways to Tackle Class Imbalance</a>
    </article>
    <h3>Medium</h3>
    <article class="archive-item">
        <a class="archive-item-link" href="https://medium.com/xperience/hexato-13c91badc770" target="_blank" rel="noopener noreferrer">Hexato</a>
    </article>
    <article class="archive-item">
        <a class="archive-item-link" href="https://medium.com/@aritra.born2fly/just-a-tad-bit-of-java-fc55df737fb9" target="_blank" rel="noopener noreferrer">Tad Bit of Java</a>
    </article>
</div>
</div>
