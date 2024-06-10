import { doc, getDoc } from 'firebase/firestore'

import { db } from '~/libs/firebase'
import type { UserId } from '~/types/entities/User'
import { userCollection } from '~/types/entities/User'

export const isExistUserByIdOperation = async (userId: UserId) => {
  const user = await getDoc(doc(db, userCollection, userId))
  return user.exists()
}
