import type { NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { RegisterContainer } from '~/features/profile/components/RegisterContainer'

const Page: NextPage = () => {
  return (
    <SimpleLayout>
      <RegisterContainer />
    </SimpleLayout>
  )
}

export default Page
