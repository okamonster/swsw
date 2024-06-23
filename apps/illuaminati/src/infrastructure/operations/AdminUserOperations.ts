import type { Unsubscribe } from 'firebase/firestore'
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'

import { db } from '~/libs/firebase'
import type {
  AdminUserId,
  CreateAdminUserDto,
  UpdateAdminUserDto,
  AdminUser,
  AdminType,
} from '~/types/entities/AdminUser'
import { adminUserCollection } from '~/types/entities/AdminUser'
import { convertDate } from '~/utils/convertDate'

const dateColumns = ['createdAt', 'updatedAt']

export const createAdminUserOperation = async (
  userId: AdminUserId,
  dto: CreateAdminUserDto,
): Promise<void> => {
  await setDoc(doc(db, adminUserCollection, userId), { ...dto })
}

export const subscribeAdminUsersByAdminTypeOperation = (
  setter: (data: Array<AdminUser>) => void,
  adminType: AdminType,
): Unsubscribe => {
  const unsubscribe = onSnapshot(
    query(
      collection(db, adminUserCollection),
      where('adminType', '==', adminType),
    ),
    (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          adminUserId: doc.id,
          ...convertDate(data, dateColumns),
        } as AdminUser
      })

      return setter(users)
    },
  )

  return unsubscribe
}

export const subscribeAdminUserByIdOperation = (
  userId: AdminUserId,
  setter: (data: AdminUser) => void,
): Unsubscribe => {
  const unsubscribe = onSnapshot(
    doc(db, adminUserCollection, userId),
    (snapshot) => {
      const doc = snapshot.data()
      if (!doc) {
        return
      }

      const user = {
        adminUserId: snapshot.id,
        ...convertDate(doc, dateColumns),
      } as AdminUser

      return setter(user)
    },
  )
  return unsubscribe
}

export const updateAdminUserByIdOperation = async (
  userId: AdminUserId,
  dto: UpdateAdminUserDto,
): Promise<void> => {
  await updateDoc(doc(db, adminUserCollection, userId), { ...dto })
}

export const isExistAdminUserByIdOperation = async (userId: AdminUserId) => {
  const user = await getDoc(doc(db, adminUserCollection, userId))
  return user.exists()
}
