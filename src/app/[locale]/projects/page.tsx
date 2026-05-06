import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Projects } from '@/components/projects'
import { ProjectSkeleton } from '@/components/projects/skeleton'
import { getMessages } from 'next-intl/server'
import { iconMap } from '@/data'
import { 
  type ProjectProps, 
  type TranslationMessages, 
  type TranslationProject 
} from '@/types'

interface ProjectsPageProps {
  params: { locale: string }
  searchParams: { page?: string }
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const messages = await getMessages() as unknown as TranslationMessages
  const rawProjectsItems = messages?.projects?.items || []

  const projectsItems: ProjectProps[] = rawProjectsItems.map(
    (project: TranslationProject) => ({
      ...project,
      tags:
        project.tags?.map((tag) => ({
          ...tag,
          icon: iconMap[tag.icon]!
        })) || []
    })
  )

  const page = Number(searchParams.page ?? 1)
  const limit = 10
  const offset = (page - 1) * limit
  const totalPages = Math.ceil(projectsItems.length / limit)
  const currentProjects = projectsItems.slice(offset, offset + limit)

  return (
    <div className='flex flex-col flex-1'>
      <Section id='projects' className='pb-24'>
        <Suspense key={page} fallback={<ProjectSkeleton />}>
          <Projects 
            projects={currentProjects} 
            page={page} 
            totalPages={totalPages} 
          />
        </Suspense>
      </Section>
    </div>
  )
}
