import { Controller, useForm } from 'react-hook-form'
import { TextInput, Textarea } from '@mantine/core'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './style.module.css'

import { ProfileImageInput } from '~/components/Inputs/ProfileImageInput'
import { BaseButton } from '~/components/BaseButton'
import {
  userProfileSchema,
  type UserProfileSchemaType,
} from '~/features/profile/types'

export const ProfileForm = (): React.ReactNode => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileSchemaType>({
    defaultValues: {
      profileImagePath: '',
      displayName: '',
      selfIntroduction: '',
      hobby: '',
    },
    resolver: zodResolver(userProfileSchema),
    mode: 'onSubmit',
  })

  const onSubmit = useCallback((data: UserProfileSchemaType) => {}, [])

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="profileImagePath"
        render={({ field }) => (
          <ProfileImageInput
            defaultImage={field.value}
            setFile={field.onChange}
            storagePath="profileImages"
            label="プロフィール画像"
          />
        )}
      />

      <TextInput
        label="ニックネーム"
        placeholder="ニックネーム"
        {...register('displayName')}
        error={errors.displayName?.message}
      />

      <Textarea
        label="自己紹介"
        placeholder="自己紹介"
        rows={5}
        {...register('selfIntroduction')}
        error={errors.selfIntroduction?.message}
      />
      <TextInput
        label="趣味・好きなこと"
        placeholder="趣味・好きなこと"
        {...register('hobby')}
        error={errors.hobby?.message}
      />

      <BaseButton type="submit" variant="primary" label="登録" radius="lg" />
    </form>
  )
}
