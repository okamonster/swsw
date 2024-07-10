import type { GetServerSideProps, NextPage } from 'next'
import { z } from 'zod'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { MypageContainer } from '~/features/generalUser/profile/components/MypageContainer'
import type { User } from '~/types/entities/User'

type Props = {
  user: User
}

const Page: NextPage<Props> = ({ user }) => {
  return (
    <SimpleLayout>
      <MypageContainer />
    </SimpleLayout>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { params } = context

  const validationResult = z
    .object({
      userId: z.string(),
    })
    .safeParse(params)

  if (!validationResult.success) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      user: user,
    },
  }
}
