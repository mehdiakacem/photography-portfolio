import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
		<div className="flex-col h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover">
        	<Main />
        	<NextScript />
		</div>
      </body>
    </Html>
  );
}
