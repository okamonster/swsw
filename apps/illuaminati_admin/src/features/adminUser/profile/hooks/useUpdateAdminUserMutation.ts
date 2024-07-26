import { updateAdminUserByIdOperation } from '~/infrastructure/operations/AdminUserOperations'
import { useAuthContext } from '~/providers/AuthProvider'
import type { UpdateAdminUserDto } from '~/types/entities/AdminUser'

export const useUpdateAdminUserMutation = () => {
  const { uid } = useAuthContext()
  const updateAdminUser = async (data: UpdateAdminUserDto) => {
    if (!uid) {
      return
    }

    await updateAdminUserByIdOperation(uid, data)
  }

  return updateAdminUser
}
