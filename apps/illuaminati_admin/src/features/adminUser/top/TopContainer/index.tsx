import Image from 'next/image'

import styles from './style.module.css'

import { LinkButton } from '~/components/LinkButton'

export const TopContainer = (): React.ReactNode => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.actions}>
        <h1 className={styles.caution}>※ スワンスワンズ様専用画面</h1>
        <Image
          src="/images/svgs/swsw_logo.svg"
          width={300}
          height={150}
          alt="スワンスワンズ"
          className={styles.logo}
        />

        <LinkButton
          label="ログイン"
          width="300px"
          variant="secondary"
          radius="lg"
          href="/swanswansAdmin/login"
        />

        <LinkButton
          label="会員証をつくる"
          width="300px"
          variant="secondary"
          radius="lg"
          href="/swanswansAdmin/signup"
        />
      </div>
    </div>
  )
}
