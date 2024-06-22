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
        push('/swanswansAdmin/home')
        return
      } else {
        push('/swanswansAdmin/register')
        return
      }
    },
    [push],
  )

  return afterLogin
}
