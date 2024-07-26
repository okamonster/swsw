import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { ShareLayout } from '~/Layouts/ShareLayout'
import { UserDetailContainer } from '~/features/adminUser/detail/UserDetailContainer'

const Page: NextPage = () => {
  const { query } = useRouter()
  const { id } = query
  return (
    <ShareLayout>
      {id && typeof id === 'string' && <UserDetailContainer username={id} />}
    </ShareLayout>
  )
}

export default Page
