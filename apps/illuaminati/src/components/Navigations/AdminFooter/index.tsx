import Link from 'next/link'
import { MdHome, MdSearch } from 'react-icons/md'
import Image from 'next/image'
import { Avatar } from '@mantine/core'

import styles from './style.module.css'

import type { TabItems } from '~/components/Navigations/AdminFooter/types'
import { useMyAdminUser } from '~/hooks/useMyAdminUser'

type Props = {
  currentTab: TabItems
}

export const AdminFooter = ({ currentTab }: Props): React.ReactNode => {
  const myAdminUser = useMyAdminUser()

  const navitems = [
    {
      title: 'Search',
      href: '/swanswansAdmin/search',
      icon: (
        <MdSearch
          size={35}
          color={
            currentTab === 'search'
              ? 'var(--color-primary)'
              : 'var(--bg-color-gray)'
          }
        />
      ),
    },
    {
      title: 'Home',
      href: '/swanswansAdmin/home',
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
      <Link href="/swanswansAdmin/mypage">
        {myAdminUser ? (
          <Image
            width={150}
            height={150}
            src={myAdminUser.profileImagePath}
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
