import { Archivo } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florin Dobinciuc - Frontend Developer & Deep Work Practitioner",
  description:
    "Frontend Developer with 3+ years of experience in React and Next.js. Passionate about deep work and productivity in software development.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Deep Work",
    "Productivity",
    "Web Development",
  ],
  authors: [{ name: "Florin Dobinciuc" }],
  openGraph: {
    title: "Florin Dobinciuc - Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in React and Next.js, with a focus on deep work practices.",
    url: "https://florindobinciuc.xyz",
    siteName: "Florin Dobinciuc Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Florin Dobinciuc - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
