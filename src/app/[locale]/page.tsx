"use client"

import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import Snowfall from 'react-snowfall'

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>
      <Snowfall color="#82C3D9" />
      <Section id='about' className='pb-24'>
        <Hero />
      </Section>
    </div>
  )
}
