import { Glory, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const glory = Glory({ subsets: ["latin"]})

export const metadata = {
  title: "BOAST",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={glory.className}>{children}</body>
    </html>
  );
}
