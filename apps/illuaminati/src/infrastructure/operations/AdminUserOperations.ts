import type { Unsubscribe } from 'firebase/firestore'
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'

import { db } from '~/libs/firebase'
import type {
  AdminUserId,
  CreateAdminUserDto,
  UpdateAdminUserDto,
  AdminUser,
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
