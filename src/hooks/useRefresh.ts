import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export const useRefresh = (ms: number = 5000) => {
  const router = useRouter()

  const refreshData = () => {
    // console.log('refreshData')
    router.replace(router.asPath)
  }

  useEffect(() => {
    const interval = setInterval(refreshData, ms)
    return () => clearInterval(interval)
  }, [ms])
}
