import { MdChevronLeft } from 'react-icons/md'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import { IconButton } from '~/components/IconButton'

export const ShareHeader = (): React.ReactNode => {
  const { back } = useRouter()
  return (
    <header className={styles.header}>
      <IconButton
        icon={<MdChevronLeft size={30} />}
        onClick={() => back()}
        size={40}
        backgroundColor="var( --bg-color-white)"
      />
    </header>
  )
}
