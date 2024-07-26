import { useEffect, useState } from 'react'

import { subscribeAdminUsersByAdminTypeOperation } from '~/infrastructure/operations/AdminUserOperations'
import type { AdminUser } from '~/types/entities/AdminUser'

export const useSwanswans = () => {
  const [swanswans, setSwanswans] = useState<Array<AdminUser>>([])

  useEffect(() => {
    const unsubscribe = subscribeAdminUsersByAdminTypeOperation(
      setSwanswans,
      'swanswans',
    )
    return () => unsubscribe()
  }, [])

  return swanswans
}
