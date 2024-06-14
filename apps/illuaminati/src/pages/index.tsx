import type { NextPage } from 'next'

import { SimpleLayout } from '~/Layouts/SimpleLayout'
import { TopContainer } from '~/features/top/TopContainer'

const Page: NextPage = () => {
  return (
    <SimpleLayout>
      <TopContainer />
    </SimpleLayout>
  )
}

export default Page
