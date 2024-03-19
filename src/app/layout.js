import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "B&J | Nuestra Boda",
  description: "Nos casamos!! Jacqueline & Brandon ",
  image: "/novios-icono.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
