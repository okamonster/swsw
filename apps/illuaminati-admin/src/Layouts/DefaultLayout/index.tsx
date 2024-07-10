import styles from './style.module.css'

import { DefaultFooter } from '~/components/Navigations/DefaultFooter'
import type { TabItems } from '~/components/Navigations/DefaultFooter/types'

type Props = {
  children: React.ReactNode
  currentTab: TabItems
}

export const DefaultLayout = ({ children, currentTab }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
        <DefaultFooter currentTab={currentTab} />
      </div>
    </div>
  )
}
