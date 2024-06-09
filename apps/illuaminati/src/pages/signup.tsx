import type { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/SimpleLayout'
import { SignupContainer } from '~/features/auth/components/SignupContainer'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <SignupContainer />
    </DefaultLayout>
  )
}

export default Page
