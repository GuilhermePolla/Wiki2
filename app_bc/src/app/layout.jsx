import { Lato } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/components/Dashboard";
import BackgroundImage from "@/components/BackgroundImage";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Base de Conhecimento",
  description: "BC - Base de Conhecimento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={lato.className} suppressHydrationWarning={true}>
        <Dashboard />
        <BackgroundImage />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
