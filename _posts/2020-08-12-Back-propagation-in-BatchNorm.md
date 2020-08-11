---

layout: post
title:  "Back propagation in BatchNorm"
author: "Aritra Roy Gosthipaty"
prev_title: "Similarity of neuron activations between similar classes"
prev_link: /similarity-of-neuron-activations-between-similar-classes
next_title: false
next_link: false
tags: deeplearning batchnorm
permalink: /back-prop-in-batch-norm

---

$\begin{gather}
\mu _{B} =\frac{1}{m}\sum ^{m}_{i\ =\ 1} x_{i}\\
\sigma ^{2}_{B} =\frac{1}{m}\sum ^{m}_{i\ =\ 1}( x_{i} -\mu _{B})^{2}\\
\widehat{x_{i}} =\frac{x_{i} -\mu _{B}}{\sqrt{\sigma ^{2}_{B} +\epsilon }}\\
y_{i} =\gamma \widehat{x_{i}} \ +\ \beta 
\end{gather}$