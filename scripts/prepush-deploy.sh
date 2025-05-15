#!/bin/sh

export GIT_USER="mango0422"

echo "🔨 Building and deploying with Docusaurus..."
pnpm run deploy || {
  echo "❌ Build or Deploy failed. Push aborted."
  exit 1
}

echo "✅ Successfully deployed to gh-pages"
