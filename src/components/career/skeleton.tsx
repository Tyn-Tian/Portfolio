export function CareerSkeleton() {
  return (
    <div className="flex flex-col gap-y-8 animate-pulse">
      {/* Title Skeleton */}
      <div className="flex items-center gap-x-4 mb-2">
        <div className="size-6 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        <div className="h-8 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
      </div>

      {/* Items Skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="ml-[11.5px] border-l border-neutral-200 dark:border-neutral-800 pl-[30px] relative pb-8 last:pb-0">
          {/* Dot */}
          <div className="absolute size-3 bg-neutral-200 dark:bg-neutral-800 rounded-full -start-[6.5px] top-[8.5px]" />
          
          {/* Company & Badge */}
          <div className="flex gap-x-2 mb-4 items-center">
            <div className="h-6 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
            <div className="h-5 w-16 bg-neutral-100 dark:bg-neutral-900 rounded-md" />
          </div>

          {/* Jobs */}
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="h-5 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
              <div className="h-4 w-24 bg-neutral-100 dark:bg-neutral-900 rounded-md" />
              <div className="flex flex-col gap-y-1 mt-1">
                <div className="h-3 w-full bg-neutral-100 dark:bg-neutral-900 rounded-md" />
                <div className="h-3 w-5/6 bg-neutral-100 dark:bg-neutral-900 rounded-md" />
                <div className="h-3 w-4/6 bg-neutral-100 dark:bg-neutral-900 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
