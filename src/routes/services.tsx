import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Our Services</h1>
    </div>
  )
}
