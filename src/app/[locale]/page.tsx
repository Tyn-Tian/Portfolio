import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import { HeroSkeleton } from '@/components/hero/skeleton'

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='about' className='pb-24'>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
      </Section>
    </div>
  )
}
