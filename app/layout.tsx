import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import styles from "./layout.module.css";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./components/Navigation"), {
  ssr: false,
});
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Florin Dobinciuc - Full Stack Engineer",
  description:
    "Personal website and blog of Florin Dobinciuc, Full Stack Engineer",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <div className={styles.container}>
          <Navigation />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
