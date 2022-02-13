---

layout: post
title:  "TensorFlow and GPU"
author: "Aritra Roy Gosthipaty"
prev_title: "Character level language model RNN"
prev_link: /char-level-language-model
next_title: "Back propagation in BatchNorm"
next_link: /assets/BatchNorm.pdf
tags: cuda cudnn
permalink: /tf-gpu

---

# Introduction

This is going to be a **rough** guide for installing cuda, cuDNN and
TensorFlow on an Ubuntu machine. For people facing problem with this
guide do not contact. This is for me to come back to, and later change
(if I ever get better at this 😅).

# Clean existing cuda installation

Taken from
[stackoverflow](https://stackoverflow.com/a/62276101/10319735) 👇

```shell
sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*"
sudo apt-get --purge remove "*nvidia*"
sudo rm -rf /usr/local/cuda*
sudo apt-get update
```

# Installation of cuda and cuDNN

I have followed this [stackoverflow thread](https://stackoverflow.com/a/55238537).

- Download cuda from the
[official link](https://developer.nvidia.com/cuda-10.0-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1804&target_type=debnetwork).
After downloading install it with the following script. 👇
```shell
sudo dpkg -i cuda-repo-ubuntu1804_10.0.130-1_amd64.deb
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
sudo apt-get update
sudo apt-get install cuda-10-0
```
- Download cuDNN `.deb` from the [official link](https://developer.nvidia.com/rdp/cudnn-download).
After downloading it install is with the following command.
```shell
sudo dpkg -r PACKAGE_NAME
```
- Now it is time to copy the `libcudnn` files in `/usr/local/cuda/lib64`.Follow the steps from
[this stackoverflow thread](https://stackoverflow.com/a/36978616).
- After all the installations go to your `.bashrc` or `.zshrc` and write down
```shell
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

# Install TensorFlow

```shell
pip install --upgrade tensorflow
```