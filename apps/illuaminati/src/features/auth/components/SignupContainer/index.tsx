import Image from 'next/image'

import styles from './style.module.css'

import { SignupForm } from '~/features/auth/components/SignupForm'

export const SignupContainer = (): React.ReactNode => {
  return (
    <div className={styles.signupContainer}>
      <Image
        src="/images/svgs/swsw_logo.svg"
        width={300}
        height={150}
        alt="スワンスワンズ"
        className={styles.logo}
      />
      <h1 className={styles.title}>サインアップ</h1>
      <SignupForm />
    </div>
  )
}
