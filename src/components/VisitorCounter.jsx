import { useEffect, useState } from 'react'

const API = 'https://script.google.com/macros/s/AKfycbw9C5i5FF8pCPmKuRJdptRnPo7daCZqavsS2jT4wZG3Prj3oxhRn0N6m5HqJOToun-bMg/exec'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const page =
      typeof window !== 'undefined' && window.location.pathname === '/'
        ? 'homepage'
        : typeof window !== 'undefined'
          ? window.location.pathname.replace(/\//g, '_')
          : 'homepage'

    const key = `visited-${page}`

    if (typeof window !== 'undefined' && sessionStorage.getItem(key)) {
      return
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, 'true')
    }

    async function updateCounter() {
      try {
        debugger
        const res = await fetch(`${API}?page=${page}`)
        const data = await res.json()
        console.log(data.count)
        setCount(data.count)
      } catch (err) {
        console.error(err)
      }
    }

    updateCounter()
  }, [])

  return (
    <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant/80">
      {/* Visitors: {count ?? 'Loading...'} */}
    </div>
  )
}