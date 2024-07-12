import styles from './style.module.css'

import { ShareHeader } from '~/components/Navigations/ShareHeader'

type Props = {
  children: React.ReactNode
}

export const ShareLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ShareHeader />
        {children}
      </div>
    </div>
  )
}
