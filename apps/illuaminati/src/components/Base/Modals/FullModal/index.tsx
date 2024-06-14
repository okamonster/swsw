import { Modal, ScrollArea } from '@mantine/core'
import { IoMdClose } from 'react-icons/io'

import styles from './style.module.css'

import { IconButton } from '~/components/IconButton'

type Props = {
  children: React.ReactNode
  title?: string
  isOpen: boolean
  onClose: () => void
  hideCloseButton?: boolean
}

export const FullModal = ({
  children,
  title,
  isOpen,
  onClose,
  hideCloseButton = false,
}: Props): React.ReactNode => {
  return (
    <Modal
      title={title}
      opened={isOpen}
      onClose={onClose}
      fullScreen
      centered
      scrollAreaComponent={ScrollArea.Autosize}
      classNames={{
        root: styles.mantineModalRoot,
        body: styles.mantineModalBody,
        inner: styles.mantineModalInner,
        header: styles.mantineModalHeader,
      }}
    >
      <div className={styles.fullModalHeader}>
        {!hideCloseButton && (
          <div className={styles.close}>
            <IconButton icon={<IoMdClose size={24} />} onClick={onClose} />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </Modal>
  )
}
