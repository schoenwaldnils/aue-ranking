import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect } from 'react'

export const useRefresh = (ms = 5000): void => {
  const router = useRouter()

  const refreshData = useCallback(() => {
    // console.log('refreshData')
    router.replace(router.asPath)
  }, [router])

  useEffect(() => {
    const interval = setInterval(refreshData, ms)
    return () => clearInterval(interval)
  }, [ms, refreshData])
}
