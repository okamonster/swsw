import { FaXTwitter } from 'react-icons/fa6'
import { useDisclosure } from '@mantine/hooks'

import styles from './style.module.css'

import { IlluaminatiCard } from '~/components/Cards/IlluaminatiCard'
import { useMyUser } from '~/hooks/useMyUser'
import { useAuthContext } from '~/providers/AuthProvider'
import { useGeneralUser } from '~/hooks/useGeneralUser'
import type { UserId } from '~/types/entities/User'
import { useSwanswans } from '~/features/home/hooks/useSwanswans'
import { SwanswansCard } from '../SwanswansCard'

type Props = {
  userId: UserId
}

export const UserDetailContainer = ({ userId }: Props): React.ReactNode => {
  const user = useGeneralUser(userId)
  const swanswans = useSwanswans()

  return (
    user && (
      <div className={styles.userDetailContainer}>
        <div className={styles.cardWrapper}>
          <IlluaminatiCard myUser={user} />
        </div>

        <div className={styles.userProfile}>
          <h2 className={styles.heading}>名前</h2>
          <h1 className={styles.userName}>{user.displayName}</h1>

          <h2 className={styles.heading}>自己紹介</h2>
          <p className={styles.bubble}>{user?.selfIntroduction}</p>
          <h2 className={styles.heading}>趣味</h2>
          <p className={styles.bubble}>{user?.hobby}</p>
        </div>
        <div className={styles.swswCards}>
          <p className={styles.label}>スワンスワンズの会員証</p>
          <div className={styles.swanswansList}>
            {swanswans.map((swanswans) => {
              return <SwanswansCard key={swanswans.username} user={swanswans} />
            })}
          </div>
        </div>
      </div>
    )
  )
}
