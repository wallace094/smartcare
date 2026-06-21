import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/review')({ component: Review })

function Review() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Review</h1>
    </div>
  )
}
