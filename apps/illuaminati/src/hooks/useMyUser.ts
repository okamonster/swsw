import { useEffect, useState } from 'react'

import { subscribeUserByIdOperation } from '~/infrastructure/operations/UserOperations'
import { useAuthContext } from '~/providers/AuthProvider'
import type { User } from '~/types/entities/User'

export const useMyUser = (): User | undefined => {
  const { uid } = useAuthContext()
  const [myUser, setMyUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    if (!uid) {
      return
    }

    const unsubscribe = subscribeUserByIdOperation(uid, setMyUser)
    return () => unsubscribe()
  }, [uid])

  return myUser
}
