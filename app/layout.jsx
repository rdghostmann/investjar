import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iDAN | Investor",
  description: "Simplify your cryptocurrency journey with a powerful platform designed for efficiency and growth. Easily manage investments, monitor portfolio value, and track real-time ROI to make informed decisions. Experience smooth payment and withdrawal processes while buying and selling crypto securely. Join the future of investing, where your assets work as hard as you do.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        <main> {children} </main>
      </body>
    </html>
  );
}
