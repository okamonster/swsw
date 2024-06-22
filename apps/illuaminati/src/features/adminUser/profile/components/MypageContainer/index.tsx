import { FaXTwitter } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'
import classNames from 'classnames'

import styles from './style.module.css'

import { useAdminUserType } from '~/features/adminUser/profile/hooks/useUserType'
import { EditProfileModal } from '~/features/adminUser/profile/components/EditProfileModal'
import { useMyAdminUser } from '~/hooks/useMyAdminUser'
import { AdminIlluaminatiCard } from '~/components/Cards/AdminIlluaminatiCard'

export const MypageContainer = (): React.ReactNode => {
  const myAdminUser = useMyAdminUser()
  const [isOpen, handlers] = useDisclosure()
  const userType = useAdminUserType(myAdminUser)

  const cardWrapperClass = classNames(
    styles.cardWrapper,
    { [styles._ami]: userType === 'ami' },
    { [styles._akari]: userType === 'akari' },
    { [styles._developer]: userType === 'developer' },
  )

  const bubbleClass = classNames(
    styles.bubble,
    { [styles._ami]: userType === 'ami' },
    { [styles._akari]: userType === 'akari' },
    { [styles._developer]: userType === 'developer' },
  )

  return (
    myAdminUser &&
    userType && (
      <>
        <div className={styles.mypageContainer}>
          <div className={cardWrapperClass}>
            <AdminIlluaminatiCard user={myAdminUser} userType={userType} />
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
              <h1 className={styles.displayName}>{myAdminUser?.displayName}</h1>
              <button className={styles.editButton} onClick={handlers.open}>
                プロフィールを編集
              </button>
            </div>
            <h2 className={styles.heding}>自己紹介</h2>
            <p className={bubbleClass}>{myAdminUser?.selfIntroduction}</p>
            <h2 className={styles.heding}>趣味</h2>
            <p className={bubbleClass}>{myAdminUser?.hobby}</p>
          </div>
        </div>
        <EditProfileModal isOpen={isOpen} onClose={handlers.close} />
      </>
    )
  )
}
