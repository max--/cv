import clsx from "clsx"
import { Html, Head, Main, NextScript } from "next/document"
import { isDev } from "@/env"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={clsx("h-screen", "-debug-screens")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
