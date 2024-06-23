import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.css'

import { useSwanswans } from '~/features/home/hooks/useSwanswans'

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
      <div className={styles.swanswansList}></div>
    </div>
  )
}
