import { MdChevronLeft } from 'react-icons/md'

import styles from './style.module.css'

import { IconButton } from '~/components/IconButton'

export const ShareHeader = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <IconButton
        icon={<MdChevronLeft size={30} />}
        onClick={() => {}}
        size={40}
        backgroundColor="var( --bg-color-white)"
      />
    </header>
  )
}
