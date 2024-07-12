import { useMemo } from 'react'

import type { AdminUser } from '~/types/entities/AdminUser'

export const useAdminUserType = (adminUser?: AdminUser): string | undefined => {
  const userType = useMemo(() => {
    if (!adminUser) {
      return
    }

    if (
      adminUser.adminType === 'swanswans' &&
      adminUser.username === 'swsw-01'
    ) {
      return 'ami'
    } else if (
      adminUser.adminType === 'swanswans' &&
      adminUser.username === 'swsw-02'
    ) {
      return 'akari'
    } else {
      return adminUser.adminType
    }
  }, [adminUser])

  return userType
}
