# Portfolio Website

This is a Jekyll-based portfolio website for Aritra Roy Gosthipaty.

## Quick Start

### Prerequisites
- Ruby and Bundler installed
- Jekyll gem installed

### Local Development
```bash
bundle install
bundle exec jekyll serve
```
Visit `http://localhost:4000` to see your site.

## Adding New Content

### Adding a Blog Post

1. Create a new file in the `_posts` directory with the naming format: `YYYY-MM-DD-title.md`
   
   Example: `2024-12-11-my-new-post.md`

2. Add the front matter at the top of the file:

```yaml
---
layout: post
title: "Your Post Title"
author: "Aritra Roy Gosthipaty"
prev_title: "Previous Post Title"  # Optional
prev_link: /previous-post-url      # Optional
next_title: "Next Post Title"      # Optional
next_link: /next-post-url          # Optional
tags: tag1 tag2 tag3
permalink: /your-custom-url        # Optional
---
```

3. Write your content below the front matter using Markdown syntax.

### Adding External Blog Links

Edit the `blogs.md` file and add a new article item:

```html
<article class="archive-item">
   <a class="archive-item-link" href="YOUR_URL" target="_blank" rel="noopener noreferrer">Your Article Title</a>
</article>
```

### Adding Research or Talks

Edit the respective files:
- `research.md` for research items
- `talks.md` for talks

## Configuration

The main configuration is in `_config.yml`:
- Site title, description, and URLs
- Navigation menu items
- Social media links
- Jekyll plugins and settings

## Site Structure

- `_posts/` - Blog post markdown files
- `_layouts/` - HTML templates for different page types
- `_includes/` - Reusable HTML components (header, footer, etc.)
- `assets/` - CSS, JavaScript, images, and other static files
- `blogs.md` - List of blog posts and external articles
- `research.md` - Research page
- `talks.md` - Talks page

## Deployment

This site is automatically deployed via GitHub Pages when you push to the main branch.

## Copyright

The copyright year in the footer is now automatically updated to the current year.
