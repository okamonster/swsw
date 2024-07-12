import { useEffect, useState } from 'react'

import { fetchAdminUserByUsernameOperation } from '~/infrastructure/operations/AdminUserOperations'
import type { AdminUser } from '~/types/entities/AdminUser'

export const useAdminUser = (username: string): AdminUser | undefined => {
  const [user, setUser] = useState<AdminUser>()

  useEffect(() => {
    const func = async () => {
      const user = await fetchAdminUserByUsernameOperation(username)
      setUser(user)
    }
    func()
  }, [username])

  return user
}
