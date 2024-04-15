import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background-primary w-full min-h-screen text-text-primary-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
