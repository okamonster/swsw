import { z } from 'zod'

export const signupFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上で入力してください' }),
})

export type SignupFormSchemaType = z.infer<typeof signupFormSchema>

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上で入力してください' }),
})

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>
