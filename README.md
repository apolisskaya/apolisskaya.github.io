# Alla’s notebook

A static writing and project site. Markdown content is built into complete HTML pages, so posts work without JavaScript. JavaScript adds archive search and filters. Categories are collected automatically from published posts.

## Publish a post

1. Create `content/your-post-slug.md` (you can use GitHub’s **Add file → Create new file**, or your editor).
2. Add front matter, then write Markdown:

```markdown
---
title: Your title
date: '2026-10-08'
type: writing
categories: [Notes, Your new category]
description: A short summary for the archive and search engines.
---

Your writing goes here.

## A heading

Links, lists, quotes, images, and fenced code blocks are supported.
```

Use `type: project` for a project writeup. Any category name is accepted; new names appear automatically in the dropdown when the post is published. Filenames become permanent URLs (`/posts/your-post-slug/`), so keep them stable. Use lowercase letters, numbers, and hyphens. Add `draft: true` to keep a file off the generated site; **draft files are still visible in a public repository**, so don’t put private content in them.

Commit to `master` to trigger publication. This is file-based publishing, not an in-browser CMS. The included welcome post is starter copy: edit or delete it before launching. `content/project-template.md` is a draft template and does not appear on the site.

## First deployment

In the repository’s **Settings → Pages**, select **GitHub Actions** as the source. Merge/push the changes to `master`, or run **Build and publish site** from the Actions tab. The workflow builds and deploys `dist/` to GitHub Pages. This site assumes the root domain `apolisskaya.github.io`.

## Local development

Requires Node.js 22+ and Python 3:

```sh
npm ci --ignore-scripts
npm run dev
```

Rebuild with `npm run build` after changes, then refresh. Output is in ignored `dist/`. No credentials or backend are needed. Google Fonts are optional; system fonts provide a fallback.

## Customize

- `style/index.css`: palette, typography, layout.
- `scripts/build.mjs`: homepage, about copy, metadata, and post layout.
- `scripts/site.js`: archive filters and search.
- `content/`: writing and projects.

Only publish Markdown from trusted authors: raw HTML is supported. Never add secrets to content. To add images, place them in `public/images/` and reference `/images/filename.png`; the build copies `public/` into the site root.
