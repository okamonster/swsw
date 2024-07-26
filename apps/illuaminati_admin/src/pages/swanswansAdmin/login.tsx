import type { NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { LoginContainer } from '~/features/adminUser/auth/components/LoginContainer'

const Page: NextPage = () => {
  return (
    <SimpleLayout>
      <LoginContainer />
    </SimpleLayout>
  )
}

export default Page
