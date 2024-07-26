import type { FileWithPath } from '@mantine/dropzone'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useToast } from '~/hooks/useToast'
import { storage } from '~/libs/firebase'

export type FileUrl = string

export const useImageInput = (
  storagePath: string,
  file: FileUrl | undefined,
  setFile: (file: FileUrl | undefined) => void,
): [
  FileUrl | undefined,
  (inputFiles: Array<FileWithPath>) => Promise<string>,
  {
    isDisabled: boolean
    isLoading: boolean
  },
] => {
  const [isLoading, setIsLoading] = useState(false)
  const isDisabled = Boolean(file)
  const { showErrorToast } = useToast()

  const onChange = useCallback(
    async (inputFiles: Array<FileWithPath>) => {
      if (!inputFiles || inputFiles.length == 0) {
        return ''
      }

      const newFile = inputFiles[0]

      try {
        setIsLoading(true)
        const filename = uuid()
        const fileUrl = await uploadImage(`${storagePath}/${filename}`, newFile)
        setFile(fileUrl)
        return fileUrl
      } catch (error) {
        showErrorToast('画像のアップロードに失敗しました')
      } finally {
        setIsLoading(false)
      }
      return ''
    },
    [setFile, showErrorToast, storagePath],
  )

  return [
    file,
    onChange,
    {
      isDisabled,
      isLoading,
    },
  ]
}

const uploadImage = async (path: string, blob: Blob) => {
  const iamgeRef = ref(storage, path)
  const snapshot = await uploadBytesResumable(iamgeRef, blob)
  return getDownloadURL(snapshot.ref)
}
