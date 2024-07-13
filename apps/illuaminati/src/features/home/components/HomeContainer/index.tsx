import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.css'

import { useSwanswans } from '~/hooks/useSwanswans'
import { SwanswansCard } from '~/features/home/components/SwanswansCard'

export const HomeContainer = (): React.ReactNode => {
  const swanswans = useSwanswans()

  return (
    <div className={styles.homeContainer}>
      <div className={styles.topVisual}>
        <Link
          href="https://x.com/SWAN_SWANS_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/swanswansVisual.webp"
            alt="スワンスワンズ"
            width={1169}
            height={877}
            className={styles.visualImage}
          />
        </Link>
      </div>
      <div className={styles.swanswansList}>
        {swanswans.map((user) => (
          <SwanswansCard key={user.adminUserId} user={user} />
        ))}
      </div>
    </div>
  )
}
