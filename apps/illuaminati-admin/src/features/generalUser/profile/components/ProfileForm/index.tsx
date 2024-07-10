import { Controller, useForm } from 'react-hook-form'
import { TextInput, Textarea } from '@mantine/core'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import { ProfileImageInput } from '~/components/Inputs/ProfileImageInput'
import { BaseButton } from '~/components/BaseButton'
import {
  userProfileSchema,
  type UserProfileSchemaType,
} from '~/features/generalUser/profile/types'
import { useCreateUserMutation } from '~/features/generalUser/profile/hooks/useCreateUserMutation'
import { useToast } from '~/hooks/useToast'

export const ProfileForm = (): React.ReactNode => {
  const createUser = useCreateUserMutation()
  const { showSuccessToast, showErrorToast } = useToast()
  const { push } = useRouter()

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

  const onSubmit = useCallback(
    async (data: UserProfileSchemaType) => {
      try {
        await createUser(data)
        showSuccessToast('ユーザーを作成しました')
        push('/home')
      } catch (e) {
        showErrorToast('ユーザーの作成に失敗しました')
      }
    },
    [createUser, push, showErrorToast, showSuccessToast],
  )

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
