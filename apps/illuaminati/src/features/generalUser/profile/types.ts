import { z } from 'zod'

export const userProfileSchema = z.object({
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

export type UserProfileSchemaType = z.infer<typeof userProfileSchema>

export const editUserProfileSchema = z.object({
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

export type EditUserProfileSchemaType = z.infer<typeof editUserProfileSchema>
