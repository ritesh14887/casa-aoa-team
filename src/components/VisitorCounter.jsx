import { useEffect, useState } from 'react'

const NAMESPACE = 'casa-woodstock'
const KEY = 'homepage'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const updateCounter = async () => {
      try {
        if (typeof window === 'undefined') return

        let data

        if (!sessionStorage.getItem('visitor-counted')) {
          sessionStorage.setItem('visitor-counted', 'true')

          const response = await fetch(`https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fritesh14887%2F&countColor=%23263759`)
          data = await response.json()
        } else {
          const response = await fetch(`https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fritesh14887%2F&countColor=%23263759`)
          data = await response.json()
        }

        setCount(data?.value ?? 0)
      } catch (error) {
        console.error('Visitor counter error:', error)
        setCount(0)
      }
    }

    updateCounter()
  }, [])

  return (
    <div className="hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,230,57,0.5)]" />
      <span>Visitors</span>
      <span className="text-on-surface">{count ?? '...'}</span>
    </div>
  )
}
