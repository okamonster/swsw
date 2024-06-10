import type { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/SimpleLayout'
import { RegisterContainer } from '~/features/profile/components/RegisterContainer'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <RegisterContainer />
    </DefaultLayout>
  )
}

export default Page
