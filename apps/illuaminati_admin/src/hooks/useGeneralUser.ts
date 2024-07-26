import { useEffect, useState } from 'react'

import { fetchUserByIdOperation } from '~/infrastructure/operations/UserOperations'
import type { User, UserId } from '~/types/entities/User'

export const useGeneralUser = (userId: UserId): User | undefined => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const func = async () => {
      const user = await fetchUserByIdOperation(userId)
      setUser(user)
    }
    func()
  }, [userId])

  return user
}
