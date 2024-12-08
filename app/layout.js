import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google'
export const metadata = {
  title: "AI LMS",
  description: "AI LMS",
};

const outfit = Outfit({subsets:['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
