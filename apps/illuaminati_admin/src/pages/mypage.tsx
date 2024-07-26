import type { NextPage } from 'next'

import { AdminLayout } from '~/Layouts/AdminLayout'
import { MypageContainer } from '~/features/adminUser/profile/components/MypageContainer'

const Page: NextPage = () => {
  return (
    <AdminLayout currentTab="mypage">
      <MypageContainer />
    </AdminLayout>
  )
}

export default Page
