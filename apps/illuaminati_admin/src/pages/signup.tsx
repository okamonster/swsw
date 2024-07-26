import type { NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { SignupContainer } from '~/features/adminUser/auth/components/SignupContainer'

const Page: NextPage = () => {
  return (
    <SimpleLayout>
      <SignupContainer />
    </SimpleLayout>
  )
}

export default Page
