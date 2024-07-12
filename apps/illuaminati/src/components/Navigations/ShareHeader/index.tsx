import { MdChevronLeft } from 'react-icons/md'

import styles from './style.module.css'

import { IconButton } from '~/components/IconButton'

export const ShareHeader = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <IconButton
        icon={<MdChevronLeft />}
        onClick={() => {}}
        size={30}
        backgroundColor="var( --bg-color-white)"
      />
    </header>
  )
}
