# Personal Portfolio

Welcome to my personal portfolio project! This application serves as a digital resume and showcase of my projects, career history, and skills. It is built with a modern web development stack focusing on performance, accessibility, and beautiful animations.

## About The Project

This is a modern, responsive, and internationalized portfolio website built to showcase professional experience (Career) and personal work (Projects). It features smooth scrolling, dynamic animations, dark mode support, and a working contact form.

## Tech Stack

This project is built using the following modern web technologies:

- **Framework**: [Next.js](https://nextjs.org/) (Version 14 with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust and type-safe code.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives (styled with Shadcn UI principles) and [Lucide React](https://lucide.dev/) for icons.
- **Animations & Effects**: 
  - [GSAP](https://gsap.com/) for complex, high-performance animations.
  - [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling experiences.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) combined with [Zod](https://zod.dev/) for schema validation.
- **Internationalization (i18n)**: [next-intl](https://next-intl-docs.vercel.app/) supporting multiple languages (English and Spanish).
- **Email Service**: [Resend](https://resend.com/) for handling the contact form submissions.
- **Analytics & Performance**: Vercel Analytics and Vercel Speed Insights.

## Architecture and Folder Structure

The project follows a clean, modular architecture, primarily centered around the `src` directory:

```text
src/
├── app/                  # Next.js App Router configuration
│   ├── [locale]/         # Internationalized dynamic routes
│   │   ├── career/       # Career timeline page
│   │   ├── contact/      # Contact form page
│   │   ├── projects/     # Portfolio projects showcase page
│   │   └── page.tsx      # Landing/Home page
│   ├── api/              # Backend API routes
│   │   └── send/         # API endpoint for sending emails (Resend)
│   └── styles/           # Global CSS styles
├── components/           # Reusable React components
│   ├── career/           # Components specific to the Career module
│   ├── contact/          # Components specific to the Contact module
│   ├── hero/             # Components for the hero section
│   ├── projects/         # Components specific to the Projects module
│   ├── ui/               # Generic UI components (Buttons, Cards, Inputs, etc.)
│   └── icons/            # Custom SVG icons
├── data/                 # Static data configurations (e.g., project lists, career data)
├── lib/                  # Utility functions and helper classes (e.g., utils.ts, validation.ts)
├── messages/             # Translation dictionaries for i18n (en.json, es.json)
└── constants/            # Global constants used across the app
```

## Available Modules

The application is logically divided into several key modules:

- **Hero Module**: The main landing section with introductory information and interactive animations.
- **Career Module**: A timeline view detailing professional work experience, roles, and achievements.
- **Projects Module**: A showcase of past projects, featuring descriptions, technologies used, and links to live demos or source code.
- **Contact Module**: A functional contact form utilizing React Hook Form for validation and Resend API for email delivery.
- **UI Module**: A collection of highly reusable and accessible UI components (built on Radix UI) that form the building blocks of the entire application.

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/[locale]/page.tsx`. The page auto-updates as you edit the file.
