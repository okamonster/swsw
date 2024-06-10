import { doc, getDoc, setDoc } from 'firebase/firestore'

import { db } from '~/libs/firebase'
import type { CreateUserDto, UserId } from '~/types/entities/User'
import { userCollection } from '~/types/entities/User'

export const createUserOperation = async (
  userId: UserId,
  dto: CreateUserDto,
): Promise<void> => {
  await setDoc(doc(db, userCollection, userId), { ...dto })
}

export const isExistUserByIdOperation = async (userId: UserId) => {
  const user = await getDoc(doc(db, userCollection, userId))
  return user.exists()
}
