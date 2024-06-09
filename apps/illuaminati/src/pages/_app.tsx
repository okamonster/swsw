/* eslint-disable @typescript-eslint/naming-convention */
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

// eslint-disable-next-line import/order
import { AuthProvider } from '~/providers/AuthProvider'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'

// eslint-disable-next-line import/order
import '@mantine/core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  )
}
