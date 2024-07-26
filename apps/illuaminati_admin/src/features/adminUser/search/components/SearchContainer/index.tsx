import { TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'

import styles from './style.module.css'

import { useSearchUsers } from '~/features/adminUser/search/hooks/useSearchUsers'
import { SearchUserList } from '~/features/adminUser/search/components/SearchUserList'

export const SearchContainer = (): React.ReactNode => {
  const { register, watch } = useForm({ defaultValues: { search: '' } })

  const searchUser = useSearchUsers(watch('search'))
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <TextInput
          placeholder="ユーザーを検索"
          variant="filled"
          {...register('search')}
        />
      </div>
      <SearchUserList users={searchUser} />
    </div>
  )
}
