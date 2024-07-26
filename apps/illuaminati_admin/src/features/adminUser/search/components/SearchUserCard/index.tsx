import Link from 'next/link'
import Image from 'next/image'

import styles from './style.module.css'

type Props = {
  displayName: string
  profileImagePath: string
  path: string
}
export const SearchUserCard = ({
  displayName,
  profileImagePath,
  path,
}: Props): React.ReactNode => {
  return (
    <Link href={path} className={styles.searchUserCard}>
      <Image
        src={profileImagePath}
        width={80}
        height={80}
        alt="プロフィール画像"
        className={styles.profileImage}
      />
      <p className={styles.username}>{displayName}</p>
    </Link>
  )
}
