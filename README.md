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

### Quick Guide to Writing a Blog Post

Writing a new blog post is easy! Just follow these steps:

#### 1. Create a New Post File

Create a new file in the `_posts` directory with the naming format: `YYYY-MM-DD-title.md`

**Example:** `2024-12-11-my-new-post.md`

**Tip:** Use hyphens to separate words in the filename, not spaces or underscores.

#### 2. Add the Front Matter

Copy and paste this template at the top of your new file:

```yaml
---
layout: post
title: "Your Post Title Here"
author: "Aritra Roy Gosthipaty"
tags: machine-learning deep-learning python
permalink: /my-custom-url
---
```

**Required fields:**
- `layout`: Always use `post` for blog posts
- `title`: The title of your post (will appear at the top)
- `author`: Your name

**Optional fields:**
- `tags`: Space-separated tags (helps with organization)
- `permalink`: Custom URL for your post (e.g., `/my-post`)
- `prev_title` & `prev_link`: Link to previous post (for navigation)
- `next_title` & `next_link`: Link to next post (for navigation)

#### 3. Write Your Content

Write your blog post content below the front matter using Markdown:

```markdown
---
layout: post
title: "My Awesome Research"
author: "Aritra Roy Gosthipaty"
tags: research tensorflow keras
---

# Introduction

Start writing your content here using Markdown...

## Section 1

You can add:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Images: ![alt text](path/to/image.png)
- Code blocks (see below)

## Code Examples

```python
# Python code
def hello_world():
    print("Hello, World!")
```

## Math Equations

You can include LaTeX math equations:
- Inline: $E = mc^2$
- Block:

$$
\frac{\partial L}{\partial w} = \frac{\partial L}{\partial y} \cdot \frac{\partial y}{\partial w}
$$
```

#### 4. Preview Your Post Locally

Before publishing, preview your post:

```bash
bundle exec jekyll serve
```

Then visit `http://localhost:4000` in your browser.

#### 5. Publish

Once you're happy with your post:
1. Commit the file: `git add _posts/YYYY-MM-DD-title.md`
2. Push to GitHub: `git push`
3. GitHub Pages will automatically build and publish your site!

### Tips for Great Blog Posts

- **Use descriptive titles** that clearly explain what the post is about
- **Add relevant tags** to make posts easier to find
- **Include images** to illustrate your points (store in `assets/post_images/`)
- **Write clear code examples** with proper syntax highlighting
- **Proofread** before publishing
- **Link to related posts** using prev/next links for series

### Quick Start Script

To quickly create a new blog post, you can use this bash command:

```bash
# Replace 'my-post-title' with your desired title
POST_DATE=$(date +%Y-%m-%d)
POST_TITLE="my-post-title"
POST_FILE="_posts/${POST_DATE}-${POST_TITLE}.md"

cat > "$POST_FILE" << 'EOF'
---
layout: post
title: "My Post Title"
author: "Aritra Roy Gosthipaty"
tags: tag1 tag2 tag3
---

# Introduction

Start writing your content here...

EOF

echo "Created new post: $POST_FILE"
```

This creates a new post file with today's date and the basic template ready to go!

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
