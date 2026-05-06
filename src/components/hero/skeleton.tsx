export function HeroSkeleton() {
  return (
    <div className='flex flex-col gap-y-4 animate-pulse'>
      <div className='flex flex-row'>
        <div className='size-28 bg-neutral-200 dark:bg-neutral-800 rounded-full shadow border' />
      </div>

      <div className='flex items-center flex-row gap-4'>
        <div className='h-10 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-md' />
        <div className='h-6 w-24 bg-neutral-100 dark:bg-neutral-900 rounded-full hidden md:block' />
        <div className='size-6 bg-neutral-100 dark:bg-neutral-900 rounded-full md:hidden' />
      </div>

      <div className='flex flex-col gap-y-4'>
        <div className='h-6 w-3/4 bg-neutral-100 dark:bg-neutral-900 rounded-md' />
        <div className='h-20 w-full bg-neutral-100 dark:bg-neutral-900 rounded-md' />
      </div>

      <div className='flex gap-x-4 pt-4'>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className='size-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow' />
        ))}
      </div>
    </div>
  )
}
