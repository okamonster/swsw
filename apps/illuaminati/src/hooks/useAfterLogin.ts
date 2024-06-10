import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { isExistUserByIdOperation } from '~/infrastructure/operations/userOperations'
import type { UserId } from '~/types/entities/User'

export const useAfterLogin = () => {
  const { push } = useRouter()
  const afterLogin = useCallback(
    async (userId: UserId) => {
      const isRegistered = await isExistUserByIdOperation(userId)

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
