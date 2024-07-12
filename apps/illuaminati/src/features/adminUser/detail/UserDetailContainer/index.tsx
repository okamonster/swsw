import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import { useAdminUserType } from '~/features/adminUser/hooks/useUserType'
import { AdminIlluaminatiCard } from '~/components/Cards/AdminIlluaminatiCard'
import { BaseButton } from '~/components/BaseButton'
import { useAdminUser } from '~/hooks/useAdminUser'

type Props = {
  username: string
}

export const UserDetailContainer = ({ username }: Props): React.ReactNode => {
  const { push } = useRouter()
  const user = useAdminUser(username)

  const userType = useAdminUserType(user)
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
    user &&
    userType && (
      <div className={styles.userDetailContainer}>
        <div className={cardWrapperClass}>
          <AdminIlluaminatiCard user={user} userType={userType} />
        </div>

        <div className={styles.userProfile}>
          <h2 className={styles.heading}>名前</h2>
          <h1 className={styles.userName}>{user.displayName}</h1>

          <h2 className={styles.heading}>自己紹介</h2>
          <p className={bubbleClass}>{user?.selfIntroduction}</p>
          <h2 className={styles.heading}>趣味</h2>
          <p className={bubbleClass}>{user?.hobby}</p>
        </div>
        <div className={styles.action}>
          <p className={styles.label}>あなたも会員証を作る</p>

          <BaseButton label="会員証を作る" onClick={() => push('/')} />
        </div>
      </div>
    )
  )
}
