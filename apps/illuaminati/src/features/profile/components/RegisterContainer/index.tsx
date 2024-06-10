import styles from './style.module.css'

import { ProfileForm } from '~/features/profile/components/ProfileForm'

export const RegisterContainer = (): React.ReactNode => {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>プロフィール登録</h1>
      <ProfileForm />
    </div>
  )
}
