# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Race-Attack is a premium nightliner (tour bus) and tour crew service company website built with React, TypeScript, and Vite. The site showcases their services for musicians, bands, and production companies touring in Switzerland and Europe.

## Development Commands

IMPORTANT: NEVER run the dev server, assume it runs already on localhost:8080

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture & Patterns

### Component Structure
- **Page Components**: Located in `/src/pages/` - Each route has its own component
- **Shared Components**: In `/src/components/` - Reusable UI elements
- **UI Primitives**: In `/src/components/ui/` - shadcn/ui components (Dialog, Button, Toast, etc.)
- All components use functional React with TypeScript

### Styling Conventions
- Use Tailwind CSS classes for styling
- Custom utility classes available: `gold-text`, `glass-card`, `gold-line`, `black-gradient`
- Responsive design with mobile-first approach
- AOS (Animate On Scroll) for scroll animations: `data-aos="fade-up"` with delays
- Custom CSS variables defined in `globals.css` for theming

### Key Technologies
- **React Router v6** for routing (all routes defined in App.tsx)
- **React Query** for server state management
- **shadcn/ui** for UI components (already extensively integrated)
- **Framer Motion** for complex animations (e.g., Header component)
- **React Hook Form + Zod** for form handling (if adding forms)

### Import Conventions
- Use `@/` alias for src directory imports: `import { Button } from "@/components/ui/button"`
- Icons from `lucide-react`: `import { Menu, X } from "lucide-react"`
- Utility functions: `import { cn } from "@/lib/utils"`

### Common Patterns

**Adding a New Page:**
1. Create component in `/src/pages/`
2. Add route in `App.tsx`
3. Add navigation link if needed in `Header.tsx`
4. Include SEO meta tags in the component

**Using Animations:**
```tsx
// Scroll animations
<div data-aos="fade-up" data-aos-delay="100">

// Framer Motion
import { motion } from "framer-motion"
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
```

**Toast Notifications:**
```tsx
import { useToast } from "@/hooks/use-toast"
const { toast } = useToast()
toast({ title: "Success", description: "Message" })
```

## Important Context

### Lovable Integration
- Project is integrated with Lovable.dev for visual development
- Changes made in Lovable are auto-committed to the repo
- Use `lovable-tagger` for commit organization

### Current Routes
- `/` - Home
- `/nightliner` - Nightliner services
- `/tour-crew` - Tour crew services
- `/gallery` - Image gallery
- `/truck` - Truck/logistics services
- `/about-us`, `/ueber-uns` - About page (English/German)
- `/contact`, `/kontakt` - Contact page (English/German)
- `/privacy-policy`, `/datenschutz` - Privacy policy
- `/imprint`, `/impressum` - Legal imprint

### Assets
- Images stored in `/public/` directory
- Gallery images in numbered format (e.g., `gallery-1.jpg`)
- Partner logos and brand assets available
- Video content: `race-attack-video.mp4`

### Theme & Branding
- Primary color: Gold (`#cb9a3d`)
- Font families: Inter (body), Playfair Display (headings)
- Dark theme with gold accents
- Glass morphism effects on cards

## Development Guidelines

### Form Implementation
When adding forms, follow the existing contact form pattern:
- Use controlled components with React state
- Add proper validation
- Show loading states during submission
- Use toast notifications for feedback

### Image Handling
- Add error handling for images: `onError={(e) => { e.currentTarget.src = '/placeholder.svg' }}`
- Consider lazy loading for performance
- Gallery images follow numbered naming convention

### TypeScript
- Define interfaces for component props when needed
- The project allows implicit any (not strict mode)
- Use type inference where appropriate

### State Management
- Use local state with `useState` for component-level state
- React Query for server state (QueryClient already configured)
- No global state management currently implemented

## Testing
Currently no testing framework is set up. When implementing tests:
- Consider adding Vitest for unit testing (works well with Vite)
- Add testing scripts to package.json
- Follow React Testing Library patterns
