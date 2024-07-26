import { useEffect, useState } from 'react'

import { subscribeAdminUsersByAdminTypeOperation } from '~/infrastructure/operations/AdminUserOperations'
import type { AdminUser } from '~/types/entities/AdminUser'

export const useDevelopers = () => {
  const [developers, setDevelopers] = useState<Array<AdminUser>>([])

  useEffect(() => {
    const unsubscribe = subscribeAdminUsersByAdminTypeOperation(
      setDevelopers,
      'developer',
    )
    return () => unsubscribe()
  }, [])

  return developers
}
