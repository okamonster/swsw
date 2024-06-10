import { useForm } from 'react-hook-form'
import { PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import { BaseButton } from '~/components/BaseButton'
import { LinkButton } from '~/components/LinkButton'
import type { SignupFormSchemaType } from '~/features/auth/types'
import { signupFormSchema } from '~/features/auth/types'
import { auth } from '~/libs/firebase'
import { useToast } from '~/hooks/useToast'

export const SignupForm = (): React.ReactNode => {
  const { push } = useRouter()
  const { showErrorToast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signupFormSchema),
    mode: 'onSubmit',
  })

  const onSubmit = useCallback(
    async (data: SignupFormSchemaType) => {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        push('/top')
      } catch (error) {
        showErrorToast('登録に失敗しました')
      }
    },
    [push, showErrorToast],
  )

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('email')}
        placeholder="メールアドレス"
        label="メールアドレス"
        error={errors.email?.message}
      />
      <PasswordInput
        {...register('password')}
        placeholder="パスワード"
        label="パスワード"
        error={errors.password?.message}
        type="password"
      />

      <div className={styles.actions}>
        <BaseButton label="登録" radius="lg" />
        <LinkButton label="もどる" href="/" radius="lg" variant="tertiary" />
        <Link href="/login" className={styles.loginLink}>
          ログイン
        </Link>
      </div>
    </form>
  )
}
