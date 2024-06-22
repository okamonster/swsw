import styles from './style.module.css'

import { AdminFooter } from '~/components/Navigations/AdminFooter'
import type { TabItems } from '~/components/Navigations/AdminFooter/types'

type Props = {
  children: React.ReactNode
  currentTab: TabItems
}

export const AdminLayout = ({ children, currentTab }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
        <AdminFooter currentTab={currentTab} />
      </div>
    </div>
  )
}
