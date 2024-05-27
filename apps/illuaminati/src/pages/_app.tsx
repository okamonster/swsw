/* eslint-disable @typescript-eslint/naming-convention */
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { AuthProvider } from '~/providers/AuthProvider'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  )
}
