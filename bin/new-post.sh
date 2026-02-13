#!/bin/bash
# Script to create a new blog post with pre-filled front matter
# Usage: bash bin/new-post.sh "My Post Title"

if [ -z "$1" ]; then
  echo "Usage: bash bin/new-post.sh \"Your Post Title\""
  exit 1
fi

TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')
DATE=$(date +%Y-%m-%d)
FILE="_posts/${DATE}-${SLUG}.md"

if [ -f "$FILE" ]; then
  echo "❌ File already exists: $FILE"
  exit 1
fi

cat > "$FILE" <<EOF
---
layout: post
title: "$TITLE"
author: "Aritra Roy Gosthipaty"
date: $DATE
tags: []
permalink: /${SLUG}
prev_title: ""
prev_link: ""
next_title: ""
next_link: ""
---

# $TITLE

## Introduction

Write your introduction here...

## Main Content

Add your content here...

## Conclusion

Wrap up your thoughts...

---

*Published on {{ page.date | date: "%B %-d, %Y" }}*
EOF

echo "✅ Created new post: $FILE"
echo ""
echo "Next steps:"
echo "  1. Edit the file: $FILE"
echo "  2. Add tags to front matter"
echo "  3. Update prev/next navigation links"
echo "  4. Preview with: bundle exec jekyll serve"
echo ""
