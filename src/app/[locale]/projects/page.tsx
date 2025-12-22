"use client"

import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Loader } from '@/components/ui/loader'
import { Projects } from '@/components/projects'
import Snowfall from 'react-snowfall'

export default function ProjectsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Snowfall color="#82C3D9" />
      <Section id='projects' className='pb-24'>
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
      </Section>
    </div>
  )
}
