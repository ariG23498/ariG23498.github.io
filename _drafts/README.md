# Drafts Directory

This directory contains work-in-progress blog posts that are not yet ready for publication.

## How to Use Drafts

### Creating a Draft

Place your draft posts here without the date prefix:
```
_drafts/my-draft-post.md
```

### Previewing Drafts

To preview drafts locally, use the `--drafts` flag:
```bash
bundle exec jekyll serve --drafts
```

This will make your draft posts visible at `http://localhost:4000` with today's date.

### Publishing a Draft

When your draft is ready to publish:

1. **Move to _posts/** with the proper date format:
   ```bash
   mv _drafts/my-draft-post.md _posts/2026-02-13-my-draft-post.md
   ```

2. **Or use the post generation script** to create a new post and copy content:
   ```bash
   bash bin/new-post.sh "My Post Title"
   # Then copy content from draft
   ```

## Draft Front Matter

Drafts should still include front matter:
```yaml
---
layout: post
title: "My Draft Post"
author: "Aritra Roy Gosthipaty"
tags: [machine-learning, transformers]
---
```

You can optionally add `published: false` to explicitly mark as draft, though being in `_drafts/` already does this.

## Notes

- Drafts are **never** published to production (GitHub Pages ignores this directory)
- Only visible when using `jekyll serve --drafts` locally
- Great for:
  - Work-in-progress posts
  - Posts waiting for review
  - Ideas you want to sketch out
  - Posts scheduled for future publication
