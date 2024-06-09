import type { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/SimpleLayout'
import { LoginContainer } from '~/features/auth/components/LoginContainer'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <LoginContainer />
    </DefaultLayout>
  )
}

export default Page
