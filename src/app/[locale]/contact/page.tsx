"use client"

import { Section } from '@/components/ui/section'
import { Contact } from '@/components/contact'
import Snowfall from 'react-snowfall'

export default function ContactPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Snowfall color="#82C3D9" />
      <Section id='contact' className='pb-24'>
        <Contact />
      </Section>
    </div>
  )
}
