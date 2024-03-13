import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import { ClerkProvider } from "@clerk/nextjs";
import BootstrapClient from "@/components/BootstrapClient";
import MyNavbar from "@/components/MyNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Next.js/Bootstrap site",
  description: "Site to test to limits of my programming knowledge",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <MyNavbar/>
        {children}
        </body>
      <BootstrapClient/>
    </html>
    </ClerkProvider>
  );
}
