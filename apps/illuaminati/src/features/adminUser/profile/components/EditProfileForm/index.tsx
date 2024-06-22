import { Controller, useForm } from 'react-hook-form'
import { TextInput, Textarea } from '@mantine/core'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './style.module.css'

import type { EditAdminUserProfileSchemaType } from '~/features/adminUser/profile/types'
import { useUpdateAdminUserMutation } from '~/features/adminUser/profile/hooks/useUpdateAdminUserMutation'
import { ProfileImageInput } from '~/components/Inputs/ProfileImageInput'
import { BaseButton } from '~/components/BaseButton'
import { editUserProfileSchema } from '~/features/generalUser/profile/types'
import { useToast } from '~/hooks/useToast'
import { serverTimestamp } from '~/libs/firebase'
import type { AdminUser, UpdateAdminUserDto } from '~/types/entities/AdminUser'

type Props = {
  myAdminUser: AdminUser
  onClose: () => void
}

export const EditProfileForm = ({
  myAdminUser,
  onClose,
}: Props): React.ReactNode => {
  const { showSuccessToast, showErrorToast } = useToast()
  const updateAdminUser = useUpdateAdminUserMutation()

  const {
    control,
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm<EditAdminUserProfileSchemaType>({
    defaultValues: {
      profileImagePath: myAdminUser.profileImagePath,
      comment: myAdminUser.comment,
      displayName: myAdminUser.displayName,
      selfIntroduction: myAdminUser.selfIntroduction,
      hobby: myAdminUser.hobby,
      twitterId: myAdminUser.twitterId,
      instagramId: myAdminUser.instagramId,
    },
    resolver: zodResolver(editUserProfileSchema),
    mode: 'all',
  })

  const onSubmit = useCallback(
    async (data: EditAdminUserProfileSchemaType) => {
      try {
        const dto: UpdateAdminUserDto = {
          comment: data.comment,
          displayName: data.displayName,
          selfIntroduction: data.selfIntroduction,
          hobby: data.hobby,
          profileImagePath: data.profileImagePath,
          twitterId: data.twitterId,
          instagramId: data.instagramId,
          updatedAt: serverTimestamp,
        }

        await updateAdminUser(dto)
        showSuccessToast('ユーザー情報を更新しました')
        onClose()
      } catch (e) {
        showErrorToast('ユーザー情報の更新に失敗しました')
      }
    },
    [onClose, showErrorToast, showSuccessToast, updateAdminUser],
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

      <TextInput
        label="ひとことコメント"
        placeholder="今の気持ちを一言"
        {...register('comment')}
        error={errors.comment?.message}
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
        label="TwitterId"
        placeholder="今の気持ちを一言"
        {...register('twitterId')}
        error={errors.twitterId?.message}
      />

      <TextInput
        label="instagramId"
        placeholder="今の気持ちを一言"
        {...register('instagramId')}
        error={errors.instagramId?.message}
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
