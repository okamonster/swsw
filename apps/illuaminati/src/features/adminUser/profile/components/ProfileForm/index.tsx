import { Controller, useForm } from 'react-hook-form'
import { TextInput, Textarea } from '@mantine/core'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import { ProfileImageInput } from '~/components/Inputs/ProfileImageInput'
import { BaseButton } from '~/components/BaseButton'
import { useToast } from '~/hooks/useToast'
import type { AdminUserProfileSchemaType } from '~/features/adminUser/profile/types'
import { adminUserProfileSchema } from '~/features/adminUser/profile/types'
import { useCreateAdminUserMutation } from '~/features/adminUser/profile/hooks/useCreateAdminUserMutation'
import type { AdminUser, CreateAdminUserDto } from '~/types/entities/AdminUser'
import { serverTimestamp } from '~/libs/firebase'
import { useAuthContext } from '~/providers/AuthProvider'

type Props = {
  defaultValues: AdminUser
}

export const ProfileForm = ({ defaultValues }: Props): React.ReactNode => {
  const { currentUser } = useAuthContext()
  const createAdminUser = useCreateAdminUserMutation()
  const { showSuccessToast, showErrorToast } = useToast()
  const { push } = useRouter()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminUserProfileSchemaType>({
    defaultValues: {
      profileImagePath: defaultValues.profileImagePath,
      displayName: defaultValues.displayName,
      selfIntroduction: defaultValues.selfIntroduction,
      hobby: defaultValues.hobby,
      username: defaultValues.username,
    },
    resolver: zodResolver(adminUserProfileSchema),
    mode: 'onSubmit',
  })

  const onSubmit = useCallback(
    async (data: AdminUserProfileSchemaType) => {
      try {
        const adminUserDto: CreateAdminUserDto = {
          adminType: defaultValues?.adminType ?? '',
          createdAt: serverTimestamp,
          comment: '',
          displayName: data.displayName,
          email: currentUser?.email ?? '',
          hobby: data.hobby,
          profileImagePath: data.profileImagePath,
          selfIntroduction: data.selfIntroduction,
          twitterId: defaultValues?.twitterId ?? '',
          instagramId: defaultValues?.instagramId ?? '',
          updatedAt: serverTimestamp,
          username: data.username,
        }

        await createAdminUser(adminUserDto)
        showSuccessToast('ユーザーを作成しました')
        push('/swanswansAdmin/home')
      } catch (e) {
        showErrorToast('ユーザーの作成に失敗しました')
      }
    },
    [
      createAdminUser,
      currentUser?.email,
      defaultValues?.adminType,
      defaultValues?.instagramId,
      defaultValues?.twitterId,
      push,
      showErrorToast,
      showSuccessToast,
    ],
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

      <TextInput
        label="ユーザーID"
        error={errors.username?.message}
        {...register('username')}
        disabled
      />

      <BaseButton type="submit" variant="primary" label="登録" radius="lg" />
    </form>
  )
}
