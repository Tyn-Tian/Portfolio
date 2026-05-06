export function ProjectSkeleton() {
  return (
    <div className='flex flex-col gap-y-4 animate-pulse'>
      <div className='flex items-center gap-x-4'>
        <div className='size-6 bg-neutral-200 dark:bg-neutral-800 rounded-full' />
        <div className='h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-md' />
      </div>

      <div className='flex flex-col gap-4'>
        {[1, 2].map((i) => (
          <div key={i} className='flex flex-col border shadow w-full rounded-xl p-4 gap-y-4'>
            <div className='flex flex-col gap-y-2'>
              <div className='h-6 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded-md' />
              <div className='h-4 w-full bg-neutral-100 dark:bg-neutral-900 rounded-md' />
              <div className='h-4 w-3/4 bg-neutral-100 dark:bg-neutral-900 rounded-md' />
            </div>
            <div className='flex gap-2'>
              {[1, 2, 3].map((j) => (
                <div key={j} className='h-6 w-16 bg-neutral-100 dark:bg-neutral-900 rounded-md' />
              ))}
            </div>
            <div className='flex gap-x-2'>
              <div className='h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-md' />
              <div className='h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-md' />
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex justify-center gap-2 mt-4'>
        <div className='h-10 w-32 bg-neutral-100 dark:bg-neutral-900 rounded-md' />
        <div className='h-10 w-32 bg-neutral-100 dark:bg-neutral-900 rounded-md' />
      </div>
    </div>
  )
}
