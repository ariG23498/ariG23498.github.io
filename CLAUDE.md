# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aritra Roy Gosthipaty built with Jekyll and deployed via GitHub Pages. The site features blog posts, research, and talks sections.

## Development Commands

### Initial Setup
```bash
# Install dependencies (required once)
bundle install
```

### Local Development Server
```bash
# Option 1: Using dev script (recommended)
./dev.sh

# Option 2: Manual command
bundle exec jekyll serve --livereload --drafts
```

Site runs at `http://localhost:4000`. The `--livereload` flag auto-refreshes on changes, `--drafts` includes draft posts.

### Building the Site
```bash
# Generate static site files in _site/
bundle exec jekyll build
```

## Architecture

### Template Hierarchy
Jekyll uses a layout inheritance system:
- **default.html** - Base template with HTML structure, includes head/header/footer
- **home.html** - Homepage layout (extends default)
- **post.html** - Blog post layout with prev/next navigation, TOC support
- **blog.html**, **research.html**, **talk.html** - Section-specific layouts

### Content Organization
- **_posts/** - Blog posts as markdown files (naming: `YYYY-MM-DD-title.md`)
- **_layouts/** - Page templates (11 layouts for different content types)
- **_includes/** - Reusable components (head.html, header.html, footer.html)
- **assets/** - Static resources organized by type (CSS, JS, images, PDFs)
  - `post_images/` subdirectory for blog post media
  - `site_images/` for profile photos and site assets

### Front Matter Structure
Blog posts require YAML front matter:
```yaml
---
layout: post
title: "Post Title"
author: "Aritra Roy Gosthipaty"
tags: tag1 tag2 tag3
permalink: /custom-url  # optional
mathjax: true          # inherited by default for posts
---
```

### Key Configuration (_config.yml)
- Navigation menu items in `urls` array
- Jekyll plugins: jekyll-feed, jekyll-sitemap
- Markdown engine: kramdown with GFM input
- Syntax highlighting: Rouge
- MathJax enabled by default for all posts
- Theme: jekyll-theme-minimal

### Static Site Generation
Jekyll processes:
1. Liquid templates in layouts/includes
2. Markdown files through kramdown
3. SCSS/Sass for styling
4. Outputs to `_site/` directory (git-ignored)

GitHub Pages automatically rebuilds on push to master branch.

### Security Features
The site implements security measures documented in SECURITY.md:
- Content Security Policy via meta tags
- Strict referrer policy
- HTTPS hosting
- Regular dependency updates via github-pages gem

## Common Tasks

### Creating a New Blog Post
```bash
# Create file: _posts/YYYY-MM-DD-title.md
POST_DATE=$(date +%Y-%m-%d)
POST_FILE="_posts/${POST_DATE}-title.md"
# Add front matter and content
```

### Adding External Blog Links
Edit `blogs.md` with new `<article class="archive-item">` entries.

### Modifying Navigation
Update the `urls` array in `_config.yml`.

## Notes
- Posts support LaTeX math via MathJax (inline: `$...$`, block: `$$...$$`)
- Code blocks use Rouge for syntax highlighting
- The `dev.sh` script includes user-specific PATH configuration
- Vendor directory and _site/ are git-ignored
