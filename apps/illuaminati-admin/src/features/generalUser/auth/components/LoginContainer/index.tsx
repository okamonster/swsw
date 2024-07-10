import Image from 'next/image'

import styles from './style.module.css'

import { LoginForm } from '~/features/generalUser/auth/components/LoginForm'

export const LoginContainer = (): React.ReactNode => {
  return (
    <div className={styles.loginContainer}>
      <Image
        src="/images/svgs/swsw_logo.svg"
        width={300}
        height={150}
        alt="スワンスワンズ"
        className={styles.logo}
      />
      <h1 className={styles.title}>ログイン</h1>
      <LoginForm />
    </div>
  )
}
