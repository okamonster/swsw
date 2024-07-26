import type { NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { TopContainer } from '~/features/adminUser/top/TopContainer'

const Page: NextPage = () => {
  return (
    <SimpleLayout>
      <TopContainer />
    </SimpleLayout>
  )
}

export default Page
