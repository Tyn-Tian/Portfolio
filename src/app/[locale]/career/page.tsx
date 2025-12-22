"use client"

import { Section } from '@/components/ui/section'
import { Career } from '@/components/career'
import Snowfall from 'react-snowfall'

export default function CareerPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Snowfall color="#82C3D9" />
      <Section id='career' className='pb-24'>
        <Career />
      </Section>
    </div>
  )
}
