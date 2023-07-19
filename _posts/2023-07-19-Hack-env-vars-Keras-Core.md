---

layout: post
title:  "Easy switching to backends in Keras Core with conda"
author: "Aritra Roy Gosthipaty"
prev_title: "TensorFlow and GPU"
prev_link: //tf-gpu
next_title: "Back propagation in BatchNorm"
next_link: /assets/BatchNorm.pdf
tags: conda keras kerascore
permalink: /keras-core-env

---

# Introduction

I use [conda](https://docs.conda.io/en/latest/) to manage my python environments. With the
advent of [Keras Core](https://github.com/keras-team/keras-core) you can easily switch between
different backend (TensorFlow, PyTorch, JAX, and NumPy).

My ususal workflow was:

1. Create a conda environemt
```shell
conda create -n kcore python==3.9
```

2. Activate the environment
```shell
conda activate kcore
```

3. Set the `KERAS_BACKEND` environment variable
```shell
export KERAS_BACKEND="tensorflow"
```

I was frustrated with two things in particular:

1. The backend conflicts in a single environment.
2. Exporting the environment variable continuously.

# Solution

To combat the backend conflicts in a single environment, an easy fix was to create different
environments for each backend.

```shell
conda create -n kcore-tf python==3.9
conda activate kcore-tf
python -m pip install tensorflow keras-core
```

This is an environment that is exclusive to TensorFlow. Similarly you could also create one for
PyTorch, JAX, and NumPy.

With the first frustration bidding adieu, let's talk about the second problem. I was thinking
of a state where I could switch to any environment, and the environment variable `KERAS_BACKEND` was
already set for me. Wouldn't that be cool?

To do that I followed [this great tutorial](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#macos-and-linux). Let's go through the steps one at a time.

```shell
conda create kcore-jax python==3.9
conda activate kcore-jax
```
This creates and activates the jax environemnt. 

```shell
python -m pip install jaxlib jax keras-core
```
This would now install `jaxlib`, `jax`, and `keras-core` libraries.

```shell
cd $CONDA_PREFIX
mkdir -p ./etc/conda/activate.d
mkdir -p ./etc/conda/deactivate.d
touch ./etc/conda/activate.d/env_vars.sh
touch ./etc/conda/deactivate.d/env_vars.sh
```
Here we build a shell script which would help with the environment variables.

In the `activate.d/env_vars.sh` we export the env variable.
```
#!/bin/sh

export KERAS_BACKEDN='jax'
```

While in the `deactivate.d/env_vars.sh` we unset them.
```
#!/bin/sh

unset KERAS_BACKEND
```

Now, if you activate the `kcore-jax` environment the `KERAS_BACKEND` env var is already set.
You can check it yourself with `echo $KERAS_BACKEND`. What does this do you may ask?

```python
import keras_core
print(keras_core.backend.backend())
```
```shell
Using JAX backend
```

And if you repeated the same process for all the conda environemnts, you would just have to activate
your conda environment, and forget about everything else.
