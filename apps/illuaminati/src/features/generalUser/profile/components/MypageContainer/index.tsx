import { FaXTwitter } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'

import styles from './style.module.css'

import { IlluaminatiCard } from '~/components/Cards/IlluaminatiCard'
import { useMyUser } from '~/hooks/useMyUser'
import { EditProfileModal } from '~/features/generalUser/profile/components/EditProfileModal'

export const MypageContainer = (): React.ReactNode => {
  const myUser = useMyUser()
  const [isOpen, handlers] = useDisclosure()

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
              <button className={styles.twitter}>
                <FaXTwitter size={20} color="var(--color-text-white)" />
              </button>
            </div>
          </div>

          <div className={styles.userProfile}>
            <div className={styles.actions}>
              <h1 className={styles.displayName}>{myUser?.displayName}</h1>
              <button className={styles.editButton} onClick={handlers.open}>
                プロフィールを編集
              </button>
            </div>
            <h2 className={styles.heding}>自己紹介</h2>
            <p className={styles.selfIntroduction}>
              {myUser?.selfIntroduction}
            </p>
            <h2 className={styles.heding}>趣味</h2>
            <p className={styles.hobby}>{myUser?.hobby}</p>
          </div>
        </div>
        <EditProfileModal isOpen={isOpen} onClose={handlers.close} />
      </>
    )
  )
}
