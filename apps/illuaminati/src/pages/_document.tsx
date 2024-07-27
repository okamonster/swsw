import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head title="スワンスワンズ イルアミナティデジタル会員証">
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="スワンスワンズ イルアミナティデジタル会員証"
        />
        <meta
          property="og:title"
          content="スワンスワンズ イルアミナティデジタル会員証"
        />
        <meta
          property="og:description"
          content="スワンスワンズ イルアミナティデジタル会員証"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_TWITTER_SHARE_URL}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_TWITTER_SHARE_URL}/images/OGP.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SWAN_SWANS_" />
        <meta
          name="twitter:title"
          content="スワンスワンズ イルアミナティデジタル会員証"
        />
        <meta
          name="twitter:description"
          content="スワンスワンズ イルアミナティデジタル会員証"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_TWITTER_SHARE_URL}/images/OGP.png`}
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
