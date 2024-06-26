import { TextInput } from '@mantine/core'
import styles from './style.module.css'
import { useForm } from 'react-hook-form'
import { useSearchUsers } from '../../hooks/useSearchUsers'

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
      {searchUser.map((user) => (
        <p>{user.displayName}</p>
      ))}
    </div>
  )
}
