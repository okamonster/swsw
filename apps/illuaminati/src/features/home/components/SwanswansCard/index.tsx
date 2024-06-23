import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

import styles from './style.module.css'

import type { AdminUser } from '~/types/entities/AdminUser'
import { useAdminUserType } from '~/features/adminUser/profile/hooks/useUserType'
import { IconButton } from '~/components/IconButton'

type Props = {
  user: AdminUser
}
export const SwanswansCard = ({ user }: Props): React.ReactNode => {
  const userType = useAdminUserType(user)

  const bubbleClass = classNames(styles.bubble, {
    [styles._ami]: userType === 'ami',
    [styles._akari]: userType === 'akari',
  })

  return (
    <div className={styles.swanswansCard}>
      <div className={styles.userProfile}>
        <Image
          src={user.profileImagePath}
          alt="プロフィールアイコン"
          width={70}
          height={70}
          className={styles.profileImage}
        />
        <div className={styles.profileDetail}>
          <p className={styles.displayName}>{user.displayName}</p>
          {user.comment && <p className={bubbleClass}>{user.comment}</p>}
        </div>
      </div>

      <div className={styles.actionLinks}></div>
    </div>
  )
}
