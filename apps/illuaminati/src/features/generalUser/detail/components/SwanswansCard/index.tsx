import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.css'

import type { AdminUser } from '~/types/entities/AdminUser'

type Props = {
  user: AdminUser
}

export const SwanswansCard = ({ user }: Props): React.ReactNode => {
  return (
    <Link href="" className={styles.swanswansCard}>
      <Image
        src={user.profileImagePath}
        width={80}
        height={80}
        alt={user.displayName}
        className={styles.profileImage}
      />

      <p className={styles.username}>{user.displayName}</p>
    </Link>
  )
}
