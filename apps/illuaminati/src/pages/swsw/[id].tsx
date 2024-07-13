import type { GetServerSideProps, NextPage } from 'next'

import { ShareLayout } from '~/Layouts/ShareLayout'
import { UserDetailContainer } from '~/features/adminUser/detail/UserDetailContainer'

export const config = {
  runtime: 'experimental-edge',
}

type Props = {
  username: string
}

const Page: NextPage<Props> = ({ username }) => {
  return (
    <ShareLayout>
      <UserDetailContainer username={username} />
    </ShareLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const username = ctx.query.id

  return {
    props: {
      username: username as string,
    },
  }
}
export default Page
