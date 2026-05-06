import { useTranslations } from 'next-intl'
import { data } from '@/constants'
import Image from 'next/image'
import { HeroAvailable } from './available'
import { HeroSocialLinks } from './social-links'

export function Hero() {
  const { avatar } = data
  const t = useTranslations()

  return (
    <>
      <div className='flex flex-row'>
        <a
          href='https://github.com/Tyn-Tian'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full'
        >
          <Image
            alt={avatar.name}
            src='/assets/avatar.webp'
            width={112}
            height={112}
            priority
            className='size-28 shadow border rounded-full object-cover'
          />
        </a>
      </div>

      <div className='flex items-center flex-row gap-4'>
        <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>
          {avatar.name}
        </h1>
        <HeroAvailable />
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h2>{t('hero.about.title')}</h2>
        <h3>{t('hero.about.description')}</h3>
      </div>

      <HeroSocialLinks />
    </>
  )
}
