import styles from './style.module.css'

type Props = {
  icon: React.ReactNode
  backgroundColor: string
  onClick: () => void
  size: number
}

export const IconButton = ({
  icon,
  onClick,
  backgroundColor,
  size,
}: Props): React.ReactNode => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <div
        className={styles.icon}
        style={{
          backgroundColor,
          width: size,
          height: size,
        }}
      >
        {icon}
      </div>
    </button>
  )
}
