import { useCallback } from 'react'

import { useAuthContext } from '~/providers/AuthProvider'
import {
  createAdminUserOperation,
  fetchAdminUserByUsernameOperation,
} from '~/infrastructure/operations/AdminUserOperations'
import type { CreateAdminUserDto } from '~/types/entities/AdminUser'

export const useCreateAdminUserMutation = () => {
  const { uid, currentUser } = useAuthContext()

  const createAdminUser = useCallback(
    async (data: CreateAdminUserDto) => {
      if (!uid || !currentUser) {
        return
      }

      const isExistUser = await fetchAdminUserByUsernameOperation(data.username)

      if (isExistUser) {
        throw new Error('既に登録されているユーザーです')
      }

      await createAdminUserOperation(uid, data)
    },
    [currentUser, uid],
  )

  return createAdminUser
}
