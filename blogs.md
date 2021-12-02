---
layout: blog
title: Posts
permalink: /posts
---

<!-- Write the Post page here -->
<div class="main">
    <div class="post-wrap archive">
        
        <h3>PyImageSearch</h3>
        <article class="archive-item">
                <a class="archive-item-link" href="https://www.pyimagesearch.com/2021/11/10/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-1/" target="_blank" rel="noopener noreferrer">Computer Graphics and Deep Learning with NeRF using TensorFlow and Keras: Part 1</a>
        </article>
        <article class="archive-item">
                <a class="archive-item-link" href="https://www.pyimagesearch.com/2021/11/17/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-2/" target="_blank" rel="noopener noreferrer">Computer Graphics and Deep Learning with NeRF using TensorFlow and Keras: Part 2</a>
        </article>
         <article class="archive-item">
                <a class="archive-item-link" href="https://www.pyimagesearch.com/2021/11/24/computer-graphics-and-deep-learning-with-nerf-using-tensorflow-and-keras-part-3/" target="_blank" rel="noopener noreferrer">Computer Graphics and Deep Learning with NeRF using TensorFlow and Keras: Part 3</a>
        </article>
        
        <h3>Keras</h3>
        <article class="archive-item">
                <a class="archive-item-link" href="https://keras.io/examples/vision/masked_image_modeling/" target="_blank" rel="noopener noreferrer">Masked image modeling with Autoencoders</a>
        </article>
        <article class="archive-item">
                <a class="archive-item-link" href="https://keras.io/examples/generative/adain/" target="_blank" rel="noopener noreferrer">Neural Style Transfer with AdaINs</a>
        </article>
        <article class="archive-item">
                <a class="archive-item-link" href="https://keras.io/examples/vision/involution/" target="_blank" rel="noopener noreferrer">Involutional neural networks</a>
        </article>
         <article class="archive-item">
                <a class="archive-item-link" href="https://keras.io/examples/vision/nerf/" target="_blank" rel="noopener noreferrer">3D volumetric rendering with NeRF<sup>[1]</sup></a>
        </article>
        
        1: This tutorial won the <a href="https://twitter.com/TensorFlow/status/1466150113814929413" target="_blank" rel="noopener noreferrer">tensorflow community spotlight award.</a>
        
        <h3>Weights and Biases</h3>
            <article class="archive-item">
                <a class="archive-item-link" href="http://bit.ly/att-one" target="_blank" rel="noopener noreferrer">An Introduction to Attention</a>
            </article>
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
        <h3>Kaggle</h3>
            <article class="archive-item">
                <a class="archive-item-link" href="https://www.kaggle.com/aritrag/simclr" target="_blank" rel="noopener noreferrer">SimCLR</a>
            </article>
        <h3>2020</h3>
            {% for post in site.posts %}
            <article class="archive-item">
                <a class="archive-item-link" href="{{ post.url }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
            </article>
            {% endfor %}
            <article class="archive-item">
                <a class="archive-item-link" href="{{site.url}}/assets/BatchNorm.pdf" target="_blank" rel="noopener noreferrer">Back Propagation in Batch Normalization</a>
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
