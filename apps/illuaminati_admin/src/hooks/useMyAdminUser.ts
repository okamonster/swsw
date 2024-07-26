import { useEffect, useState } from 'react'

import { subscribeAdminUserByIdOperation } from '~/infrastructure/operations/AdminUserOperations'
import { useAuthContext } from '~/providers/AuthProvider'
import type { AdminUser } from '~/types/entities/AdminUser'

export const useMyAdminUser = (): AdminUser | undefined => {
  const { uid } = useAuthContext()
  const [myAdminUser, setMyAdminUser] = useState<AdminUser | undefined>(
    undefined,
  )

  useEffect(() => {
    if (!uid) {
      return
    }

    const unsubscribe = subscribeAdminUserByIdOperation(uid, setMyAdminUser)
    return () => unsubscribe()
  }, [uid])

  return myAdminUser
}
