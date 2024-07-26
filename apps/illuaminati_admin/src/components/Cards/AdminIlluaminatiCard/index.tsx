import Image from 'next/image'
import classNames from 'classnames'

import styles from './style.module.css'

import type { AdminUser } from '~/types/entities/AdminUser'

type Props = {
  user: AdminUser
  userType: string
}

export const AdminIlluaminatiCard = ({ user, userType }: Props) => {
  const cardBorderClass = classNames(
    styles.cardBorder,
    { [styles._borderAmi]: userType === 'ami' },
    { [styles._borderAkari]: userType === 'akari' },
    { [styles._borderDeveloper]: userType === 'developer' },
  )

  const illuaminatiCardClass = classNames(
    styles.illuaminatiCard,
    { [styles._ami]: userType === 'ami' },
    { [styles._akari]: userType === 'akari' },
    { [styles._developer]: userType === 'developer' },
  )

  return (
    <div className={cardBorderClass}>
      <div className={illuaminatiCardClass}>
        <h1 className={styles.title}>イルアミナティカード</h1>
        <div className={styles.visual}>
          <Image
            src={user.profileImagePath}
            alt="プロフィールアイコン"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <div className={styles.profileDetail}>
            <p className={styles.displayName}>{user.displayName}</p>
          </div>
        </div>
        <p className={styles.number}>No: {user.username}</p>
        {userType === 'developer' ? (
          <Image
            src="/images/svgs/developer-icon.svg"
            alt="デベロッパーアイコン"
            width={30}
            height={30}
            className={styles.swanIcon}
          />
        ) : (
          <Image
            src="/images/svgs/swan-icon-gold.svg"
            alt="白鳥アイコン"
            width={50}
            height={50}
            className={styles.swanIcon}
          />
        )}
      </div>
    </div>
  )
}
