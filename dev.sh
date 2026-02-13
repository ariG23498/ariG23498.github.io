#!/bin/bash

# Add gem bin directory to PATH
export PATH="/Users/arig23498/.gem/ruby/2.6.0/bin:$PATH"

# Serve Jekyll site with livereload
bundle exec jekyll serve --livereload --drafts
