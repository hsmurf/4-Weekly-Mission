import { Inter } from 'next/font/google';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>Linkbrary</title>
        <meta property="og:title" content="Linkbrary" />
        <meta
          name="description"
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          key="description"
        />
        <meta
          property="og:image"
          content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          key="image"
        />
        <meta property="og:url" content="https://comfy-gingersnap-041ffa.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@linkbrary" />
        <meta name="twitter:title" content="Linkbrary" />
        <meta name="twitter:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
        <meta name="twitter:image" content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
