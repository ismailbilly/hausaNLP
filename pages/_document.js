import { Html, Head, Main, NextScript } from 'next/document'
//import Navigation from './components/Navigation'
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet">
        </link>
      </Head>
      <body>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
