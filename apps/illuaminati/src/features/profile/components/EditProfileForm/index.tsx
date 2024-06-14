import { Controller, useForm } from 'react-hook-form'
import { TextInput, Textarea } from '@mantine/core'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './style.module.css'

import { useUpdateUserMutation } from '~/features/profile/hooks/useUpdateUserMutation'
import { ProfileImageInput } from '~/components/Inputs/ProfileImageInput'
import { BaseButton } from '~/components/BaseButton'
import {
  editUserProfileSchema,
  type EditUserProfileSchemaType,
  type UserProfileSchemaType,
} from '~/features/profile/types'
import { useToast } from '~/hooks/useToast'
import type { UpdateUserDto, User } from '~/types/entities/User'
import { serverTimestamp } from '~/libs/firebase'

type Props = {
  myUser: User
  onClose: () => void
}

export const EditProfileForm = ({
  myUser,
  onClose,
}: Props): React.ReactNode => {
  const { showSuccessToast, showErrorToast } = useToast()
  const updateUser = useUpdateUserMutation()

  const {
    control,
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm<EditUserProfileSchemaType>({
    defaultValues: {
      profileImagePath: myUser.profileImagePath,
      displayName: myUser.displayName,
      selfIntroduction: myUser.selfIntroduction,
      hobby: myUser.hobby,
    },
    resolver: zodResolver(editUserProfileSchema),
    mode: 'all',
  })

  const onSubmit = useCallback(
    async (data: UserProfileSchemaType) => {
      try {
        const dto: UpdateUserDto = {
          displayName: data.displayName,
          selfIntroduction: data.selfIntroduction,
          hobby: data.hobby,
          profileImagePath: data.profileImagePath,
          updatedAt: serverTimestamp,
        }

        await updateUser(dto)
        showSuccessToast('ユーザー情報を更新しました')
        onClose()
      } catch (e) {
        showErrorToast('ユーザー情報の更新に失敗しました')
      }
    },
    [onClose, showErrorToast, showSuccessToast, updateUser],
  )

  return (
    <div className={styles.editProfileForm}>
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

      <BaseButton
        variant="primary"
        onClick={() => onSubmit(getValues())}
        label="登録"
        radius="lg"
        disabled={!isValid}
      />
    </div>
  )
}
