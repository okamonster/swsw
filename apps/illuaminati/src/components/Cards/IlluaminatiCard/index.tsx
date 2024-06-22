import Image from 'next/image'

import styles from './style.module.css'

import type { User } from '~/types/entities/User'

type Props = {
  myUser: User
}

export const IlluaminatiCard = ({ myUser }: Props) => {
  return (
    <div className={styles.illuaminatiCard}>
      <h1 className={styles.title}>イルアミナティカード</h1>
      <div className={styles.visual}>
        <Image
          src={myUser.profileImagePath}
          alt="プロフィールアイコン"
          width={150}
          height={150}
          className={styles.profileImage}
        />
        <div className={styles.profileDetail}>
          <p className={styles.displayName}>{myUser.displayName}</p>
        </div>
      </div>
      <p className={styles.number}>
        No: {myUser.userId.substring(0, 10) + '...'}
      </p>
      <Image
        src="/images/svgs/swan-icon.svg"
        alt="白鳥アイコン"
        width={50}
        height={50}
        className={styles.swanIcon}
      />
    </div>
  )
}
