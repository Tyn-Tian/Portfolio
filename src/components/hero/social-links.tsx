'use client'

import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { data } from '@/constants'

export function HeroSocialLinks() {
  const { links } = data

  return (
    <nav className='flex gap-x-4 pt-4'>
      {links.map((link) => (
        <Tooltip key={link.title}>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size={null}
              key={link.title}
              className='p-2 shadow rounded-lg'
              asChild
            >
              <a
                key={link.title}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.title}
                className='flex justify-center items-center md:gap-2'
              >
                <link.icon className='size-6 stroke-[1.5]' />
                <p className='hidden md:block'>{link.title}</p>
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side='bottom' className='md:hidden'>
            <p>{link.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  )
}
