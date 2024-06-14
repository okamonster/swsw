/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/naming-convention */
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import type { AppProps } from 'next/app'

// eslint-disable-next-line import/order
import { AuthProvider } from '~/providers/AuthProvider'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'
import '~/styles/fonts.css'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MantineProvider>
        <Notifications position="top-center" />
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  )
}
