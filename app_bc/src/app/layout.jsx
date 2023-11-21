import { Lato } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/components/Dashboard";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
        {children}
      </body>
    </html>
  );
}
