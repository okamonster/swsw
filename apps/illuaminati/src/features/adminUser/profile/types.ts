import { z } from 'zod'
import { AdminUser } from '~/types/entities/AdminUser'

export const adminUserProfileSchema = z.object({
  profileImagePath: z.string().min(1, { message: '画像を選択してください' }),
  displayName: z
    .string()
    .min(1, { message: '名前を入力してください' })
    .max(15, { message: '名前は15文字以内で入力してください' }),
  selfIntroduction: z
    .string()
    .max(200, { message: '自己紹介は100文字以内で入力してください' }),
  hobby: z.string().max(20, { message: '趣味は20文字以内で入力してください' }),
  username: z.string().min(1, { message: 'ユーザーIDを入力してください' }),
})

export type AdminUserProfileSchemaType = z.infer<typeof adminUserProfileSchema>

export const editAdminUserProfileSchema = z.object({
  profileImagePath: z.string().min(1, { message: '画像を選択してください' }),
  displayName: z
    .string()
    .min(1, { message: '名前を入力してください' })
    .max(15, { message: '名前は15文字以内で入力してください' }),
  selfIntroduction: z
    .string()
    .max(200, { message: '自己紹介は100文字以内で入力してください' }),
  hobby: z.string().max(20, { message: '趣味は20文字以内で入力してください' }),
})

export type EditAdminUserProfileSchemaType = z.infer<
  typeof editAdminUserProfileSchema
>

export const serialCodeSchema = z.object({
  serialCode: z
    .string()
    .min(1, { message: 'シリアルコードを入力してください' })
    .max(30, { message: '30文字以内で入力してください' }),
})

export type SerialCodeSchemaType = z.infer<typeof serialCodeSchema>

export const amiOptions: AdminUser = {
  adminUserId: '',
  adminType: 'swanswans',
  displayName: 'スワンスワンズ あみ',
  hobby: '',
  profileImagePath: '/images/amiDefaultProfileImage.png',
  selfIntroduction: '',
  twitterId: 'ami_swanswans',
  instagramId: 'ami_swsw',
  username: 'swsw-01',
  createdAt: '',
  comment: '',
  email: '',
  updatedAt: '',
}

export const akariOptions: AdminUser = {
  adminUserId: '',
  adminType: 'swanswans',
  displayName: 'スワンスワンズ あかり',
  hobby: '',
  profileImagePath: '/images/akariDefaultProfileImage.png',
  selfIntroduction: '',
  twitterId: 'akari_swanswans',
  instagramId: 'akari_swsw',
  username: 'swsw-02',
  createdAt: '',
  comment: '',
  email: '',
  updatedAt: '',
}

export const developerOptions: AdminUser = {
  adminType: 'developer',
  displayName: '',
  hobby: '',
  profileImagePath: '',
  selfIntroduction: '',
  twitterId: '',
  instagramId: '',
  username: 'dev-01',
  adminUserId: '',
  createdAt: '',
  comment: '',
  email: '',
  updatedAt: '',
}
