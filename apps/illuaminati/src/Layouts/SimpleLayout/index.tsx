import styles from './style.module.css'

type Props = {
  children: React.ReactNode
}

export const SimpleLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
