import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <body className={clsx("h-screen", isDev() && "debug-screens")}> */}
      {/* <body className="h-screen debug-screens"> */}
      <body className="h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
