/* eslint-disable @typescript-eslint/naming-convention */
import type { AppProps } from 'next/app'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
