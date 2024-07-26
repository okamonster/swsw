import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { ShareLayout } from '~/Layouts/ShareLayout'
import { UserDetailContainer } from '~/features/generalUser/detail/components/UserDetailContainer'

const Page: NextPage = () => {
  const { query } = useRouter()
  const { id } = query

  return (
    <ShareLayout>
      {id && typeof id === 'string' && <UserDetailContainer userId={id} />}
    </ShareLayout>
  )
}

export default Page
