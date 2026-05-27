# Geniuss Wind Power — Premium Website

Next-generation wind energy product website for **Geniuss Wind Power Pvt. Ltd.**

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages (fix white screen)

If you see a **white screen**, GitHub is serving source files instead of the built app.

1. **Settings → Pages → Build and deployment → Source**
2. Choose **Deploy from a branch**
3. Branch: **`gh-pages`** · Folder: **`/ (root)`**
4. Save, then wait 2–3 minutes after the **Actions** workflow completes

Live URL: https://sushantlode.github.io/GENIUSSWIND/

Leave **Custom domain** empty unless you own a real domain (e.g. `geniusswind.com`).

## Hero Video

Place your hero video at `public/hero-video.mp4` (already copied from your upload).

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── hooks/            # useInView, useAnimatedCounter
├── App.tsx
└── main.tsx
```
