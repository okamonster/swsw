import type { NextPage } from 'next'

import { AdminLayout } from '~/Layouts/AdminLayout'
import { HomeContainer } from '~/features/home/components/HomeContainer'

const Page: NextPage = () => {
  return (
    <AdminLayout currentTab="home">
      <HomeContainer />
    </AdminLayout>
  )
}

export default Page
