import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'
import type { IconComponent } from '@/types'
import { LaravelIcon } from '@/components/icons/tags/laravel'
import { PHPIcon } from '@/components/icons/tags/php'
import { PostmanIcon } from '@/components/icons/tags/postman'
import { AngularIcon } from '@/components/icons/tags/angular'
import { VueIcon } from '@/components/icons/tags/vue'
import { VuexIcon } from '@/components/icons/tags/vuex'
import { CodeigniterIcon } from '@/components/icons/tags/codeigniter'
import { MoodleIcon } from '@/components/icons/tags/moodle'
import { MySQLIcon } from '@/components/icons/tags/mysql'
import { SQLiteIcon } from '@/components/icons/tags/sqlite'

export const AVATAR = {
  name: 'Christian',
  initials: 'TYN'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/Tyn-Tian',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/christian72/',
    icon: LinkedInIcon
  },
  {
    title: 'Email',
    url: 'mailto:kristian2015ok@gmail.com',
    icon: MailIcon
  },
  // {
  //   title: 'CV App',
  //   url: 'https://cv.emapeire.xyz',
  //   icon: FileTextIcon
  // },
  // {
  //   title: 'Link App',
  //   url: 'https://link.emapeire.xyz',
  //   icon: LinkIcon
  // }
]

export const iconMap: Record<string, IconComponent> = {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  OpenAIIcon,
  ReactIcon,
  SWCIcon,
  TypeScriptIcon,
  ViteIcon,
  ShadcnIcon,
  TailwindCSSIcon,
  AstroIcon,
  SvelteIcon,
  NodeJSIcon,
  VitestIcon,
  BootstrapIcon,
  SupabaseIcon,
  ReduxIcon,
  PNPMIcon,
  VercelIcon,
  BasehubIcon,
  GraphQLIcon,
  LaravelIcon,
  PHPIcon,
  PostmanIcon,
  AngularIcon,
  VueIcon,
  VuexIcon,
  CodeigniterIcon,
  MoodleIcon,
  MySQLIcon,
  SQLiteIcon
}
