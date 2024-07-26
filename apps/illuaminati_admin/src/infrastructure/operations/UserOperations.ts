import type { Unsubscribe } from 'firebase/firestore'
import {
  collection,
  doc,
  endAt,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  startAt,
  updateDoc,
} from 'firebase/firestore'

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

export const fetchUserByIdOperation = async (
  userId: UserId,
): Promise<User | undefined> => {
  const snapshot = await getDoc(doc(db, userCollection, userId))

  if (!snapshot.exists()) {
    return undefined
  }

  return {
    userId: snapshot.id,
    ...convertDate(snapshot.data(), dateColumns),
  } as User
}

export const subscribeUsersByDisplayNameOperation = (
  displayName: string,
  setter: (data: Array<User>) => void,
): Unsubscribe => {
  const unsubscribe = onSnapshot(
    query(
      collection(db, userCollection),
      orderBy('displayName'),
      startAt(displayName),
      endAt(displayName + '\uf8ff'),
      limit(10),
    ),
    (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        const user = {
          userId: doc.id,
          ...convertDate(doc.data(), dateColumns),
        } as User
        return user
      })
      return setter(users)
    },
  )
  return unsubscribe
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
