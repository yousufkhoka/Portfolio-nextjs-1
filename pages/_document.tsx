import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
       <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>

      <body className='bg-gradient-to-r from-green-500 to-blue-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}