import styles from './style.module.css'

import { useDevelopers } from '~/hooks/useDevelopers'
import { useSwanswans } from '~/hooks/useSwanswans'
import type { User } from '~/types/entities/User'
import { SearchUserCard } from '~/features/adminUser/search/components/SearchUserCard'

type Props = {
  users: Array<User>
}
export const SearchUserList = ({ users }: Props) => {
  const swanswans = useSwanswans()
  const developers = useDevelopers()
  return (
    <div className={styles.searchUserList}>
      {swanswans && (
        <div className={styles.section}>
          <h2 className={styles.label}>スワンスワンズ</h2>
          {swanswans.map((user) => (
            <SearchUserCard
              key={user.username}
              path={`/swsw/${user.username}`}
              displayName={user.displayName}
              profileImagePath={user.profileImagePath}
            />
          ))}
        </div>
      )}
      {developers && (
        <div className={styles.section}>
          <h2 className={styles.label}>開発者</h2>
          {developers.map((user) => (
            <SearchUserCard
              key={user.username}
              path={`/dev/${user.username}`}
              displayName={user.displayName}
              profileImagePath={user.profileImagePath}
            />
          ))}
        </div>
      )}
      {users && (
        <div className={styles.section}>
          <h2 className={styles.label}>ピョンスワさんたち</h2>
          {users.map((user) => (
            <SearchUserCard
              key={user.userId}
              path={`/user/${user.userId}`}
              displayName={user.displayName}
              profileImagePath={user.profileImagePath}
            />
          ))}
        </div>
      )}
    </div>
  )
}
