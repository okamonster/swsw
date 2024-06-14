import styles from './style.module.css'

type Props = {
  icon: React.ReactNode
  onClick: () => void
}

export const IconButton = ({ icon, onClick }: Props): React.ReactNode => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {icon}
    </button>
  )
}
