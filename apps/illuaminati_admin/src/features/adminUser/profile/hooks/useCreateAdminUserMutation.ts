import { useCallback } from 'react'

import type { UserProfileSchemaType } from '~/features/generalUser/profile/types'
import { useAuthContext } from '~/providers/AuthProvider'
import { serverTimestamp } from '~/libs/firebase'
import { createAdminUserOperation } from '~/infrastructure/operations/AdminUserOperations'
import { AdminUserProfileSchemaType } from '../types'
import {
  AdminType,
  AdminUserName,
  CreateAdminUserDto,
} from '~/types/entities/AdminUser'

export const useCreateAdminUserMutation = () => {
  const { uid, currentUser } = useAuthContext()

  const createAdminUser = useCallback(
    async (data: CreateAdminUserDto) => {
      if (!uid || !currentUser) {
        return
      }

      await createAdminUserOperation(uid, data)
    },
    [currentUser, uid],
  )

  return createAdminUser
}
