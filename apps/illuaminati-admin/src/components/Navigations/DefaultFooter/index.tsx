import Link from 'next/link'
import { MdHome } from 'react-icons/md'
import Image from 'next/image'
import { Avatar } from '@mantine/core'

import styles from './style.module.css'

import type { TabItems } from '~/components/Navigations/DefaultFooter/types'
import { useMyUser } from '~/hooks/useMyUser'
type Props = {
  currentTab: TabItems
}

export const DefaultFooter = ({ currentTab }: Props): React.ReactNode => {
  const myUser = useMyUser()
  const navitems = [
    {
      title: 'Home',
      href: '/home',
      icon: (
        <MdHome
          size={35}
          color={
            currentTab === 'home'
              ? 'var(--color-primary)'
              : 'var(--bg-color-gray)'
          }
        />
      ),
    },
  ]

  return (
    <footer className={styles.footer}>
      {navitems.map((navitem) => (
        <Link href={navitem.href} key={navitem.title}>
          {navitem.icon}
        </Link>
      ))}
      <Link href="mypage">
        {myUser ? (
          <Image
            width={150}
            height={150}
            src={myUser.profileImagePath}
            alt="プロフィールアイコン"
            className={styles.profileIcon}
          />
        ) : (
          <Avatar size={40} />
        )}
      </Link>
    </footer>
  )
}
