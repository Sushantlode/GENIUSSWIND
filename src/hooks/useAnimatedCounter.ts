import { useEffect, useState } from 'react'

interface UseAnimatedCounterOptions {
  end: number
  duration?: number
  decimals?: number
  enabled?: boolean
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  enabled = true,
}: UseAnimatedCounterOptions) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return

    let startTime: number | null = null
    let frameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * end)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [end, duration, enabled])

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
}
