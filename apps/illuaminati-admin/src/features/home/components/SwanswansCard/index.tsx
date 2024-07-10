import { AdminUser } from '~/types/entities/AdminUser'
import styles from './style.module.css'
import Image from 'next/image'
import classNames from 'classnames'
import { IconButton } from '~/components/IconButton'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { BaseButton } from '~/components/BaseButton'

type Props = {
  user: AdminUser
}

export const SwanswansCard = ({ user }: Props): React.ReactNode => {
  const bubbleClass = classNames(styles.bubble, {
    [styles._ami]: user.username === 'swsw-01',
    [styles._akari]: user.username === 'swsw-02',
  })

  return (
    <div className={styles.swanswansCard}>
      <div className={styles.profile}>
        <Image
          src={user.profileImagePath}
          width={80}
          height={80}
          alt={user.displayName}
          className={styles.profileImage}
        />
        <div className={styles.profileDetail}>
          <div className={styles.displayName}>{user.displayName}</div>
          {user.comment && <p className={bubbleClass}>{user.comment}</p>}
        </div>
      </div>

      <div className={styles.actionItems}>
        <Link
          href={`https://x.com/${user.twitterId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            size={35}
            backgroundColor="var(--bg-color-black)"
            onClick={() => {}}
            icon={<FaXTwitter size={20} color="var(--color-text-white)" />}
          />
        </Link>
        <Link
          href={`https://instagram.com/${user.instagramId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            size={35}
            backgroundColor="#E1306C"
            onClick={() => {}}
            icon={<FaInstagram size={20} color="var(--color-text-white)" />}
          />
        </Link>

        <BaseButton label="カードを見る" variant="primary" onClick={() => {}} />
      </div>
    </div>
  )
}
