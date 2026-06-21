import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Contact</h1>
    </div>
  )
}
