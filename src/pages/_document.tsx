import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Naxt Amazone</title>
      </Head>
      <body className="antialiased box-border">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
