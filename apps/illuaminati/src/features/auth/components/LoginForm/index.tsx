import { useForm } from 'react-hook-form'
import { PasswordInput, TextInput } from '@mantine/core'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'

import styles from './style.module.css'

import { BaseButton } from '~/components/BaseButton'
import { LinkButton } from '~/components/LinkButton'
import type { LoginFormSchemaType } from '~/features/auth/types'
import { loginFormSchema } from '~/features/auth/types'

export const LoginForm = (): React.ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
  })

  const onSubmit = useCallback(() => {}, [])

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
        <BaseButton label="ログイン" radius="lg" />
        <LinkButton label="もどる" href="/" radius="lg" variant="tertiary" />
        <Link href="/signup" className={styles.signupLink}>
          会員証をつくる
        </Link>
      </div>
    </form>
  )
}
