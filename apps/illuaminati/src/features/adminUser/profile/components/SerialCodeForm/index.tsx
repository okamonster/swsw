import { TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './style.module.css'

import type { SerialCodeSchemaType } from '~/features/adminUser/profile/types'
import { serialCodeSchema } from '~/features/adminUser/profile/types'
import { BaseButton } from '~/components/BaseButton'
import { useToast } from '~/hooks/useToast'

type Props = {
  next: () => void
  confirmSerialCode: (data: string) => void
}

export const SerialCodeForm = ({
  next,
  confirmSerialCode,
}: Props): React.ReactNode => {
  const { showErrorToast } = useToast()
  const {
    register,
    getValues,
    formState: { isValid, errors },
  } = useForm<SerialCodeSchemaType>({
    defaultValues: { serialCode: '' },
    resolver: zodResolver(serialCodeSchema),
    mode: 'all',
  })

  const onSubmit = useCallback(
    async (data: SerialCodeSchemaType) => {
      try {
        await confirmSerialCode(data.serialCode)
        next()
      } catch (err) {
        showErrorToast('認証に失敗しました')
      }
    },
    [confirmSerialCode, next, showErrorToast],
  )

  return (
    <div className={styles.serialCodeForm}>
      <TextInput
        label="シリアルコード"
        placeholder="シリアルコード"
        {...register('serialCode')}
        error={errors.serialCode?.message}
      />
      <BaseButton
        label="認証"
        variant="primary"
        onClick={() => onSubmit(getValues())}
        disabled={!isValid}
      />
    </div>
  )
}
