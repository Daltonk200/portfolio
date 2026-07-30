export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-[#D7E2EA]/10 ${className}`}
      aria-hidden
    />
  )
}

export function PageLoader() {
  return (
    <div className="min-h-[60vh] px-5 sm:px-8 md:px-10 py-20 space-y-6">
      <Skeleton className="h-16 w-2/3 max-w-xl" />
      <Skeleton className="h-6 w-full max-w-lg" />
      <Skeleton className="h-6 w-4/5 max-w-md" />
      <div className="grid gap-4 md:grid-cols-3 pt-8">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
    </div>
  )
}
