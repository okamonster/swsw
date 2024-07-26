import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useCallback, useRef } from 'react'
import Image from 'next/image'
import { Avatar, LoadingOverlay } from '@mantine/core'

import styles from './style.module.css'

import type { FileUrl } from '~/components/Inputs/ProfileImageInput/hooks/useImageInput'
import { useImageInput } from '~/components/Inputs/ProfileImageInput/hooks/useImageInput'

type Props = {
  label?: string
  defaultImage: FileUrl | undefined
  setFile: (file: FileUrl | undefined) => void
  storagePath: string
}

export const ProfileImageInput = ({
  label,
  defaultImage,
  setFile,
  storagePath,
}: Props): React.ReactNode => {
  const ref = useRef<HTMLDivElement>(null)
  const [file, onChange, states] = useImageInput(
    storagePath,
    defaultImage ?? undefined,
    setFile,
  )
  const onClickEditZone = useCallback(() => {
    if (ref.current) {
      ref.current.click()
    }
  }, [])

  return (
    <div className={styles.profileImageInput}>
      {file ? (
        <Image
          src={file}
          className={styles.previewImage}
          width={150}
          height={150}
          alt="プロフィール画像"
          onClick={onClickEditZone}
        />
      ) : (
        <Avatar size={150} onClick={onClickEditZone} />
      )}
      <p>{label}</p>
      <Dropzone
        onDrop={onChange}
        maxSize={100 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        ref={ref}
        className={styles.dropzone}
      />

      {states.isLoading && <LoadingOverlay visible />}
    </div>
  )
}
