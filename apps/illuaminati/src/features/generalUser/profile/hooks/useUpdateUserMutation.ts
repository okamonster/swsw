import { updateUserByIdOperation } from '~/infrastructure/operations/UserOperations'
import { useAuthContext } from '~/providers/AuthProvider'
import type { UpdateUserDto } from '~/types/entities/User'

export const useUpdateUserMutation = () => {
  const { uid } = useAuthContext()
  const updateUser = async (data: UpdateUserDto) => {
    if (!uid) {
      return
    }

    await updateUserByIdOperation(uid, data)
  }

  return updateUser
}
