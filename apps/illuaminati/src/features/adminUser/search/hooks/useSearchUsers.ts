import { useEffect, useState } from 'react'

import { subscribeUsersByDisplayNameOperation } from '~/infrastructure/operations/UserOperations'
import type { User } from '~/types/entities/User'

export const useSearchUsers = (searchText: string) => {
  const [searchUsers, setSearchUsers] = useState<Array<User>>([])

  useEffect(() => {
    const unsubscribe = subscribeUsersByDisplayNameOperation(
      searchText,
      setSearchUsers,
    )
    return () => unsubscribe()
  }, [searchText, setSearchUsers])

  return searchUsers
}
