import type { GetServerSideProps, NextPage } from 'next'

import { ShareLayout } from '~/Layouts/ShareLayout'
import { UserDetailContainer } from '~/features/generalUser/detail/components/UserDetailContainer'
import type { UserId } from '~/types/entities/User'

export const runtime = 'edge'

type Props = {
  userId: UserId
}

const Page: NextPage<Props> = ({ userId }) => {
  return (
    <ShareLayout>
      <UserDetailContainer userId={userId} />
    </ShareLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const userId = ctx.query.id

  if (!userId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      userId: userId as UserId,
    },
  }
}
export default Page
