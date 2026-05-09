<h1 align="center">G. Achuth — Portfolio</h1>

<p align="center">
  <a href="https://achuthfolio.vercel.app"><strong>achuthfolio.vercel.app</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-latest-FF0050?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fachuthfolio.vercel.app" alt="Website Status" />
</p>

<p align="center">
  A modern, high-performance personal portfolio built with <b>Next.js 14</b>, <b>Framer Motion</b>, and <b>Tailwind CSS</b>.<br/>
  Designed to showcase professional experience, projects, skills, and certifications with smooth animations and a polished dark-themed UI.
</p>

---

## Preview

> Visit the live site: **[achuthfolio.vercel.app](https://achuthfolio.vercel.app)**

## Tech Stack

| Layer         | Technology                             |
| ------------- | -------------------------------------- |
| Framework     | Next.js 14 (App Router, Static Export) |
| Language      | TypeScript 5 (Strict Mode)             |
| Styling       | Tailwind CSS 3.4 + tailwindcss-animate |
| Animations    | Framer Motion                          |
| UI Primitives | Radix UI + shadcn/ui                   |
| Icons         | Lucide React                           |
| Deployment    | Vercel                                 |

## Highlights

- **Fully Responsive** — pixel-perfect on mobile, tablet, and desktop
- **Performance-Optimized** — minimal animation tracks, lazy-loaded assets, static generation
- **Interactive Typewriter** — cycling role titles with smooth type/delete transitions
- **Lamp Hero Effect** — custom SVG-based animated lamp light with staggered name reveal
- **Scroll Animations** — viewport-triggered fade-ins with staggered children
- **Sticky Navigation** — responsive nav bar with mobile hamburger menu
- **Dark UI** — cohesive dark theme with teal/violet accent palette

## Sections

| Section        | Description                                       |
| -------------- | ------------------------------------------------- |
| Hero           | Animated lamp effect, name reveal, typewriter      |
| Skills         | Categorized skill grid with infinite marquee       |
| Experience     | Professional timeline with role details            |
| Projects       | Showcase cards with GitHub + live demo links        |
| Education      | Academic timeline                                  |
| Certifications | Credential cards with verification links           |
| Contact        | Contact information and social links               |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Entry point
│   └── globals.css         # Global styles + custom scrollbar
├── components/
│   ├── App.tsx             # Main shell — nav, sections, scroll-to-top
│   ├── LampDemo.tsx        # Hero section with lamp effect
│   ├── Skills.tsx          # Skills grid with infinite carousel
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project showcase cards
│   ├── Education.tsx       # Education timeline
│   ├── Certificates.tsx    # Certifications grid
│   ├── Contact.tsx         # Contact information
│   └── ui/                 # Reusable UI primitives (shadcn/ui)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets (images)
└── types/                  # TypeScript declarations
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Achuth-0908/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

Deployed on [Vercel](https://vercel.com) with zero configuration:

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy — done
