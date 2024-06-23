import type { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/DefaultLayout'
import { HomeContainer } from '~/features/home/components/HomeContainer'

const Page: NextPage = () => {
  return (
    <DefaultLayout currentTab="home">
      <HomeContainer />
    </DefaultLayout>
  )
}

export default Page
