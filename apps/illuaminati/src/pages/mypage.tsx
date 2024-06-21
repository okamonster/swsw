import type { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/DefaultLayout'
import { MypageContainer } from '~/features/generalUser/profile/components/MypageContainer'

const Page: NextPage = () => {
  return (
    <DefaultLayout currentTab="mypage">
      <MypageContainer />
    </DefaultLayout>
  )
}

export default Page
