import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { isExistAdminUserByIdOperation } from '~/infrastructure/operations/AdminUserOperations'
import type { AdminUserId } from '~/types/entities/AdminUser'

export const useAfterAdminLogin = () => {
  const { push } = useRouter()
  const afterLogin = useCallback(
    async (userId: AdminUserId) => {
      const isRegistered = await isExistAdminUserByIdOperation(userId)

      if (isRegistered) {
        push('/home')
        return
      } else {
        push('/register')
        return
      }
    },
    [push],
  )

  return afterLogin
}
