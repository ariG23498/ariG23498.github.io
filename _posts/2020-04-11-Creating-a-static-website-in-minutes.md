---

layout: post
title:  "Creating a static website in minutes"
author: "Aritra Roy Gosthipaty"
prev_title: false
prev_link: false
next_title: false
next_link: false
tags: jekyll website
permalink: /creating-a-static-website-in-minutes

---

You need a `portfolio`? You want to write `blogs` too?

![Gordan Meme](https://media1.tenor.com/images/21a14cb60130258c5d17952fdc1d6dd9/tenor.gif?itemid=3537140)

In this blog I will be writing down steps to create a `static website`. A static website is one with fixed content, the kind which perfectly fits our needs.

You cannot just have vanilla `HTML` and some text in your portfolio right?

<img src="{{ site.url }}/assets/post_images/1post/goodfellow.png" alt="Goodfellow">

>  🙄 Just in case you didn't know, this is Ian J. Goodfellow, researcher working in machine learning, currently employed at Apple Inc. as its director of machine learning in the Special Projects Group. He was previously employed as a research scientist at Google Brain. 

Okay, you can, but that is not the point. Most of us would like our portfolios to have aligned pictures, cool fonts and soothing colors. Here we are slowly heading towards `CSS` to style our `HTML`. 

What if I told you that `raw text` would be **enough** to get yourself a cool website?

<img src="https://pbs.twimg.com/ext_tw_video_thumb/1081100253531500545/pu/img/Yq3O9IqwyF8H7dlO.jpg" style="height:50%; width:50%">

Enter `jekyll`. Jekyll is a static site generator. Its official documentation says, "You give it text written in your favourite markup language and it uses layouts to create a static website".

You make an awesome website, where do you host it now? `Github-Pages` lets each individual `GitHub` user host a website for free. 🤑🤑🤑 Got you at `free` didn't I?

> I am assuming that you already have a GitHub account. If you don't, this [wiki page](https://www.wikihow.com/Create-an-Account-on-GitHub) can be of help.

Our plan of action would be to:

* Creating a `default` jekyll website.
* Locally deploying the website.
* Being able to read a jekyll project.
* Tweaking our default site.
* Deploying the website with `GitHub-Pages`.

##  Creating a `default` jekyll website

Jekyll is built with a programming language called `Ruby`. For creation of a website with jekyll we need to first configure our system. [This link](https://jekyllrb.com/docs/installation/#guides) would be the best place for you to check with the installation process. Install the dependencies and then return to this blog.

Now that you have configured your system. Let's dive into some simple commands to spin up your own `default` website.

```bash
gem install jekyll bundler
jekyll new myblog
```

After you typed the above commands, you will have a directory named `myblog`. The directory structure would be something like this:

```bash
.
├── 404.html
├── about.markdown
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.markdown
└── _posts
    └── 2020-04-12-welcome-to-jekyll.markdown
```

## Locally deploying the website

Now that we have our website, let us fire it up. Type the following command at the root directory of your website.

```bash
bundle exec jekyll serve
```

Our website is now being served at  `127.0.0.1:4000`. To see the website running, go to your favourite browser and hit `127.0.0.1:4000`. Looks pretty cool right?

<img src="{{site.url}}/assets/post_images/1post/jekyll_default.png" alt="default website">

`"খুব মিষ্টি"`(sweet!), that is what I had said after I saw the website running.

## Being able to read a jekyll project.

The `myblog` directory structure would be a little different now, than what we had earlier.

```bas
.
├── 404.html
├── about.markdown
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.markdown
├── _posts
│   └── 2020-04-12-welcome-to-jekyll.markdown
└── _site
   ├── 404.html
   ├── about
   │   └── index.html
   ├── assets
   │   ├── main.css
   │   ├── main.css.map
   │   └── minima-social-icons.svg
   ├── feed.xml
   ├── index.html
   └── jekyll
       └── update
           └── 2020
               └── 04
                   └── 12
                       └── welcome-to-jekyll.html
```

* 404.html - This file would be served if you hit an `invalid` url.

* about.markdown - This is the file that is rendered as you click the `about` button in the website.

* _config.yml - A configuration file, that is needed when you would want to tweak the website according to your needs.

* Gemfile - This is the `ruby` dependency file. This would include the plugins and gems for ruby. We will change this file not very often.

* Gemfile.lock - This is where `bundler` records the exact versions that were installed.

* index.markdown - This is what you view when you have just started the website. This is the starting page of your website.

* _posts - A place for all the blogs that you write. This is the most important place for a blogger. You write your blogs in a favourable `markup` language and then save it in this folder. Jekyll automatically shows the post you just wrote. The name of the blog should be written in `yyyy-mm-dd-name-of-the-blog.md` This convention is necessary for jekyll to organise the blogs in terms of creation dates.

* _site - This is a directory that is rendered by jekyll. We do not change anything in this directory. We change files outside of the `__site` folder. When jekyll renders our tweaks, that is reflected in the _site folder itself.

  <img src="https://miro.medium.com/max/2560/1*yIPIuNIn6ar7MvQnNqlWlQ.jpeg" style="height:50%;width:50%" alt="Andrew NG meme">

## Tweaking our default site

The default site is cool and all, but we need to see our face on the website, our name, and a `funny tech description` (NERD ALERT!) too, don't we?

### The _config.yml file

We can tweak a lot from this file itself. Open the file in your favourite text-editor. A `yml` file is a collection of `key`: `value` pairs. The values are accessed through the `unique` keys in different parts of the website. Let's change the `title` of our website. 

```yml
.
.
# Site settings
# These are used to personalize your new site. If you look in the HTML files,
# you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
# You can create any custom variable you would like, and they will be accessible
# in the templates via {{ site.myvariable }}.

title: Protfolio
```

I have changed the value to `Portfolio`. Save the file. If the command `bundle exec jekyll serve` is running, please terminate the process and run again. From the second time we can serve the website by running `jekyll serve` in the root directory of your website.

<img src="{{site.url}}/assets/post_images/1post/tweak_head.png" alt="tweak the heading">

You do see the `title` changing right? Refresh the page if not. Now that you know what needs to be done, go on and change some other `key`:`value` pairs and see for yourself. 

> In yml, do not try to change the `key`  as they are unique and are used to access the `value`. You can either add a new unique key or change the value, but no changing keys okay?

I did the following changes:

```bash
title: Portfolio
email: aritra.born2fly@gmail.com
description: >- # this means to ignore newlines until "baseurl:"
  Hello there!
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: ariG23498
github_username:  ariG23498
```

<img src="{{site.url}}/assets/post_images/1post/tweaks.png" alt="a lot of tweaks">

### Front Matter

Open the `index.markdown` file. I have told you that, this is the file that is served as the starting page of your website. To your surprise you will find nothing in the file. Some weird lines, a little text and that is all. Where is the html code for the header, body, footer? 😲

```yml
---
layout: home
---
```

This is what is known as the `front matter`. Front matter is the block of `yml` code. *Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own.* 

Some variables that you frequently come across are:

* layout
* title
* permalink

#### layout

This variable tells what `layout` to use for the particular file. Change the value for the `layout` variable from `home` to `post` or `page`. Notice a change? "What if I decide to create a layout of my own?" I am happy that you asked. You have got to create a folder named `_layouts` on the root directory.

```bash
.
├── 404.html
├── about.markdown
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.markdown
├── _layouts
│   └── mylayout.html
├── _posts
    └── 2020-04-12-welcome-to-jekyll.markdown
```



I have made a `mylayout.html` file inside of the newly created `_layouts` folder as is evident. The code for `mylayout.html` is simple.

```html
<h1> Hello World </h1>
```

Now the last step would be to change the `layout:home` variable in the `index.markdown` file. We need to replace home to mylayout.

Let's see what we have here 👀

<img src="{{site.url}}/assets/post_images/1post/hello_world.png" alt="changes in layout">

You get the hang of it right? Whatever layout you want, create an `html` file and keep it in the `_layouts` folder. You can use the layout by specifying the name of the `hmtl` file you just created.

#### title

This variable is used to fetch the title of the page. In the `about.markdown` file, this variable would be assigned `About`, which is indeed the title of the page. You can change this and see for yourself.

#### permalink

When you deploy a website, you are supposed to hit a `url` and look at your website right? `Jekyll` gives you a cool way to create your own `url endpoints`. 

In our website, when you go to `127.0.0.1:4000` we see our website, that is the `url`. Now type `127.0.0.1:4000/about` and see what happens. This takes you to the `About` page,  hence `/about` is the end-point. 

This is the code in the `about.markdown` file. Change the permalink variable to `/check-about/`.

```
---
layout: page
title: About
permalink: /check-about/
---

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll
```

You will now need to hit `127.0.0.1:4000/check-about/` to go to the about page. This is how we change the permanent links to pages.

### Themes

*Jekyll has an `extensive theme system` that allows you to leverage community-maintained templates and styles to customize your site’s presentation.* 

<img src="data:image/jpeg;base64,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" >

Now that you know what to do and what goes where as an overview, I think [theme selection](https://jekyllrb.com/docs/themes/#pick-up-a-theme) would be a piece of 🍰. 

## Deploying the website with `GitHub-Pages`

<img src="https://media.giphy.com/media/69jy0H4XhmXmZxWsRA/giphy.gif" alt="end game">

Now that you are ready with your website, it is time for us to publish it.

* Create a GitHub repository and name it `<githubusername>.github.io`. You will put your github user name in the `<githubusername>` field.
* Some little changes in the gemfile is necessary.

This is how my entire Gemfile looks:

```ruby
source "https://rubygems.org"
gem "github-pages"
```

The `github-pages` gem is necessary for hosting your jekyll project.

* Add the whole website folder to this repository.
* After you have uploaded the repository in GitHub, you can go into your internet browser and type in `<githubusername>.github.io` and there you have it. You site up and running.

## Conclusion

Oh you are still here? Thanks for hanging around. If you got your website up and running with the help of my blog, be a sport and send me the link. If you liked this blog and want me to cover a little more in terms of tweaking the jekyll website, do comment down here.

<img src="https://i.pinimg.com/236x/a1/20/22/a12022974efb34062d25fa09e7cfa38c.jpg" alt="Bye">