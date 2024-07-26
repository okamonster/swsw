import { useState } from 'react'

import {
  akariOptions,
  amiOptions,
  developerOptions,
} from '~/features/adminUser/profile/types'
import type { AdminUser } from '~/types/entities/AdminUser'

export const useSerialCode = () => {
  const [profileOptionValues, setProfileOptionValues] = useState<AdminUser>()

  const confirmSerialCode = async (serialCode: string) => {
    if (serialCode === process.env.NEXT_PUBLIC_ID_AMI) {
      setProfileOptionValues(amiOptions)
      return
    } else if (serialCode === process.env.NEXT_PUBLIC_ID_AKARI) {
      setProfileOptionValues(akariOptions)
      return
    } else if (serialCode === process.env.NEXT_PUBLIC_ID_DEV) {
      setProfileOptionValues(developerOptions)
      return
    }
    throw new Error()
  }

  return {
    profileOptionValues,
    confirmSerialCode,
  }
}
