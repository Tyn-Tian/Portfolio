import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Career } from '@/components/career'
import { CareerSkeleton } from '@/components/career/skeleton'

export default function CareerPage() {
  return (
    <div className='w-full flex flex-col flex-1'>
      <Section id='career' className='pb-24'>
        <Suspense fallback={<CareerSkeleton />}>
          <Career />
        </Suspense>
      </Section>
    </div>
  )
}
