import type { NextPage } from 'next'

import { AdminLayout } from '~/Layouts/AdminLayout'
import { SearchContainer } from '~/features/adminUser/search/components/SearchContainer'

const Page: NextPage = () => {
  return (
    <AdminLayout currentTab="search">
      <SearchContainer />
    </AdminLayout>
  )
}

export default Page
