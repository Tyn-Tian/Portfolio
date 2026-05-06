'use client'

import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { BadgeCheckIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export function HeroAvailable() {
  const t = useTranslations()

  return (
    <>
      <Button
        variant='default'
        size={null}
        className='font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300'
        asChild
      >
        <a
          href='https://www.linkedin.com/in/christian72/'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden md:flex'
        >
          {t('hero.available')}
        </a>
      </Button>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href='https://www.linkedin.com/in/christian72/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t('hero.available')}
            className='md:hidden flex rounded-full hover:scale-105 transition-all ease-in-out duration-300'
          >
            <BadgeCheckIcon className='size-6 dark:fill-blue-400 fill-blue-300 stroke-[1.5]' />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('hero.available')}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
