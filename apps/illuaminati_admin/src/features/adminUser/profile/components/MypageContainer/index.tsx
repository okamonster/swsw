import { FaXTwitter } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'
import classNames from 'classnames'
import { useMemo } from 'react'

import styles from './style.module.css'

import { useAdminUserType } from '~/features/adminUser/hooks/useUserType'
import { EditProfileModal } from '~/features/adminUser/profile/components/EditProfileModal'
import { useMyAdminUser } from '~/hooks/useMyAdminUser'
import { AdminIlluaminatiCard } from '~/components/Cards/AdminIlluaminatiCard'
import { BaseButton } from '~/components/BaseButton'
import { useAuthContext } from '~/providers/AuthProvider'
import { IconButton } from '~/components/IconButton'
import { useTwitterShare } from '~/hooks/useTwitterShare'

export const MypageContainer = (): React.ReactNode => {
  const myAdminUser = useMyAdminUser()
  const [isOpen, handlers] = useDisclosure()
  const userType = useAdminUserType(myAdminUser)
  const { logout } = useAuthContext()

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

  const isDeveloper = useMemo(() => userType === 'developer', [userType])

  const shareUrl = useTwitterShare(
    `${process.env.NEXT_PUBLIC_TWITTER_SHARE_URL}/${
      isDeveloper ? 'dev' : 'swsw'
    }/${myAdminUser?.username}`,
    `△${myAdminUser?.displayName}さんのイルアミナティカード▼\nイルアミナティの会員証を作りました！\n🎀みんなも会員証を作ってみてね！🎀`,
    ['スワンスワンズ', 'スワスワちゃん'],
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
            <p className={styles.title}>ひとことコメント</p>
            {myAdminUser.comment && (
              <>
                <p className={bubbleClass}>{myAdminUser?.comment}</p>
              </>
            )}
            <h1 className={styles.title}>SNSでシェア</h1>
            <div className={styles.buttonList}>
              <IconButton
                size={35}
                backgroundColor="var(--bg-color-black)"
                onClick={() => {
                  window.open(shareUrl, '_blank')
                }}
                icon={<FaXTwitter size={20} color="var(--color-text-white)" />}
              />
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
