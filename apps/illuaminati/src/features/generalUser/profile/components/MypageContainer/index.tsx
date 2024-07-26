import { FaXTwitter } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'

import styles from './style.module.css'

import { IlluaminatiCard } from '~/components/Cards/IlluaminatiCard'
import { useMyUser } from '~/hooks/useMyUser'
import { EditProfileModal } from '~/features/generalUser/profile/components/EditProfileModal'
import { BaseButton } from '~/components/BaseButton'
import { useAuthContext } from '~/providers/AuthProvider'
import { IconButton } from '~/components/IconButton'

export const MypageContainer = (): React.ReactNode => {
  const myUser = useMyUser()
  const [isOpen, handlers] = useDisclosure()
  const { logout } = useAuthContext()

  return (
    myUser && (
      <>
        <div className={styles.mypageContainer}>
          <div className={styles.cardWrapper}>
            <IlluaminatiCard myUser={myUser} />
          </div>
          <div className={styles.share}>
            <h1 className={styles.title}>SNSでシェア</h1>
            <div className={styles.buttonList}>
              <IconButton
                size={35}
                backgroundColor="var(--bg-color-black)"
                onClick={() => {}}
                icon={<FaXTwitter size={20} color="var(--color-text-white)" />}
              />
            </div>
          </div>

          <div className={styles.userProfile}>
            <div className={styles.actions}>
              <h1 className={styles.userName}>{myUser.displayName}</h1>
              <button className={styles.editButton} onClick={handlers.open}>
                プロフィールを編集
              </button>
            </div>

            <h2 className={styles.heading}>自己紹介</h2>
            <p className={styles.bubble}>{myUser?.selfIntroduction}</p>
            <h2 className={styles.heading}>趣味</h2>
            <p className={styles.bubble}>{myUser?.hobby}</p>
          </div>
          <div className={styles.actionItems}>
            <BaseButton
              label="ログアウト"
              variant="tertiary"
              onClick={() => logout()}
            />
          </div>
        </div>
        <EditProfileModal isOpen={isOpen} onClose={handlers.close} />
      </>
    )
  )
}
