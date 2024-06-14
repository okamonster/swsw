import type { Unsubscribe } from 'firebase/firestore'
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'

import { db } from '~/libs/firebase'
import type {
  CreateUserDto,
  UpdateUserDto,
  User,
  UserId,
} from '~/types/entities/User'
import { userCollection } from '~/types/entities/User'
import { convertDate } from '~/utils/convertDate'

const dateColumns = ['createdAt', 'updatedAt']

export const createUserOperation = async (
  userId: UserId,
  dto: CreateUserDto,
): Promise<void> => {
  await setDoc(doc(db, userCollection, userId), { ...dto })
}

export const subscribeUserByIdOperation = (
  userId: UserId,
  setter: (data: User) => void,
): Unsubscribe => {
  const unsubscribe = onSnapshot(
    doc(db, userCollection, userId),
    (snapshot) => {
      const doc = snapshot.data()
      if (!doc) {
        return
      }

      const user = {
        userId: snapshot.id,
        ...convertDate(doc, dateColumns),
      } as User

      return setter(user)
    },
  )
  return unsubscribe
}

export const updateUserByIdOperation = async (
  userId: UserId,
  dto: UpdateUserDto,
): Promise<void> => {
  await updateDoc(doc(db, userCollection, userId), { ...dto })
}

export const isExistUserByIdOperation = async (userId: UserId) => {
  const user = await getDoc(doc(db, userCollection, userId))
  return user.exists()
}
