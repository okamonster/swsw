import { FieldValue } from 'firebase/firestore'

export type AdminType = 'swanswans' | 'developer'

export type AdminUserId = string

export type AdminUserName = string

export const adminUserCollection = 'adminUsers'

export type AdminUser = {
  adminUserId: AdminUserId
  adminType: string
  createdAt: string
  comment: string
  displayName: string
  email: string
  hobby: string
  profileImagePath: string
  selfIntroduction: string
  twitterId: string
  instagramId: string
  updatedAt: string
  username: AdminUserName
}

export type CreateAdminUserDto = Omit<
  AdminUser,
  'adminUserId' | 'createdAt' | 'updatedAt'
> & {
  createdAt: FieldValue
  updatedAt: FieldValue
}

export type UpdateAdminUserDto = {
  adminType?: AdminUser['adminType']
  comment?: AdminUser['comment']
  displayName?: AdminUser['displayName']
  email?: AdminUser['email']
  hobby?: AdminUser['hobby']
  profileImagePath?: AdminUser['profileImagePath']
  selfIntroduction?: AdminUser['selfIntroduction']
  twitterId?: AdminUser['twitterId']
  instagramId?: AdminUser['instagramId']
  updatedAt: FieldValue
  username?: AdminUser['username']
}
