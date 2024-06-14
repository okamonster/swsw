import styles from './style.module.css'

import { FullModal } from '~/components/Base/Modals/FullModal'
import { EditProfileForm } from '~/features/profile/components/EditProfileForm'
import { useMyUser } from '~/hooks/useMyUser'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const EditProfileModal = ({ isOpen, onClose }: Props) => {
  const myUser = useMyUser()

  return (
    myUser && (
      <FullModal isOpen={isOpen} onClose={onClose} title="プロフィールを編集">
        <div className={styles.formContainer}>
          <EditProfileForm myUser={myUser} onClose={onClose} />
        </div>
      </FullModal>
    )
  )
}
