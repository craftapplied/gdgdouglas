# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GDG Douglas landing page built with Astro and styled with Tailwind CSS. The site is server-side rendered and deployed to production at gdgdouglas.com and staging at gdgdouglas.craftapplied.dev.

## Commands

### Development
```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm run dev

# Start development server with external access
pnpm run dev:public

# Build project (includes type checking)
pnpm run build

# Preview production build
pnpm run preview

# Type checking only
astro check

# Sync content collections
pnpm run sync
```

### Code Quality
```bash
# Format code with Prettier
npx prettier --write .

# Check formatting
npx prettier --check .
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with SSR (server-side rendering)
- **UI Components**: Mix of Astro components (.astro) and SolidJS components (.tsx)
- **Styling**: Tailwind CSS with custom design system
- **Content**: Astro Content Collections for people and events
- **Deployment**: Node.js standalone adapter

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── header/          # Navigation and branding
│   └── footer/          # Footer component
├── content/             # Astro Content Collections
│   ├── config.ts        # Collection schemas (people, events)
│   ├── events/          # Event MDX files
│   └── people/          # People MDX files
├── images/              # Static images organized by type
├── layouts/             # Page layouts
├── pages/               # File-based routing
│   └── _home/           # Homepage components
├── styles/              # Global styles
└── utils/               # Utility functions
```

### Content Collections
The project uses Astro Content Collections with TypeScript schemas:

- **People**: Organizers, contributors, and speakers with roles, social links, and avatars
- **Events**: Meetups and speaker sessions with speakers (references people), time, location, and metadata

Content is authored in MDX files with frontmatter validation via Zod schemas in `src/content/config.ts`.

### Design System
Custom Tailwind configuration includes:
- Google Fonts (Google Sans Display)
- Custom color palette with Google brand colors (core: green, yellow, red, blue)
- Typography scale (display, headline, paragraph, button, label variants)
- Custom border radius and shadow utilities
- Container with fixed max-width (72.25rem)

### Component Architecture
- **Astro components** (.astro): Used for static content and layouts
- **SolidJS components** (.tsx): Used for interactive elements (navigation menu)
- **Content utilities**: `src/utils/getContent.ts` provides filtered collection queries
- **Image handling**: Dynamic thumbnail resolution with fallbacks

### Key Features
- Responsive navigation with mobile hamburger menu
- Content-managed events and people profiles
- Custom image optimization and thumbnails
- SEO optimization with astro-seo

## Deployment

- **Staging**: Deploy to `staging` branch → auto-deploys to gdgdouglas.craftapplied.dev
- **Production**: Deploy to `main` branch → auto-deploys to gdgdouglas.com
- **Platform**: Coolify on CraftApplied.dev server

## Development Notes

- Uses pnpm as package manager
- TypeScript strict mode enabled
- Prettier configured for Astro files with single quotes
- Server-side rendering configured for dynamic content
- Content collections require `pnpm run sync` after schema changes