import { useCallback } from 'react'

import type { UserProfileSchemaType } from '~/features/generalUser/profile/types'
import { createUserOperation } from '~/infrastructure/operations/UserOperations'
import { useAuthContext } from '~/providers/AuthProvider'
import { serverTimestamp } from '~/libs/firebase'

export const useCreateAdminUserMutation = () => {
  const { uid, currentUser } = useAuthContext()

  const createUser = useCallback(
    async (data: UserProfileSchemaType) => {
      if (!uid || !currentUser) {
        return
      }

      await createUserOperation(uid, {
        createdAt: serverTimestamp,
        displayName: data.displayName,
        email: currentUser.email ? currentUser.email : '',
        hobby: data.hobby,
        profileImagePath: data.profileImagePath,
        selfIntroduction: data.selfIntroduction,
        updatedAt: serverTimestamp,
      })
    },
    [currentUser, uid],
  )

  return createUser
}
