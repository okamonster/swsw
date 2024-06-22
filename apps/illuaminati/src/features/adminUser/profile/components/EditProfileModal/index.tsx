import styles from './style.module.css'

import { FullModal } from '~/components/Base/Modals/FullModal'
import { EditProfileForm } from '~/features/adminUser/profile/components/EditProfileForm'
import { useMyAdminUser } from '~/hooks/useMyAdminUser'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const EditProfileModal = ({ isOpen, onClose }: Props) => {
  const myAdminUser = useMyAdminUser()

  return (
    myAdminUser && (
      <FullModal isOpen={isOpen} onClose={onClose} title="プロフィールを編集">
        <div className={styles.formContainer}>
          <EditProfileForm myAdminUser={myAdminUser} onClose={onClose} />
        </div>
      </FullModal>
    )
  )
}
