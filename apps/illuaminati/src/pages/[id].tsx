import type { GetServerSideProps, NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { UserDetailContainer } from '~/features/generalUser/detail/components/UserDetailContainer'
import type { UserId } from '~/types/entities/User'

type Props = {
  userId: UserId
}

const Page: NextPage<Props> = ({ userId }) => {
  return (
    <SimpleLayout>
      <UserDetailContainer userId={userId} />
    </SimpleLayout>
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
