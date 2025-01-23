// import { Geist, Geist_Mono } from "next/font/google";
import NavbarServer from "@/Components/NavbarServer";
import "./globals.css";
import { AuthProvider } from "@/app/AuthProvider";

//className={`${geistSans.variable} ${geistMono.variable} antialiased`}

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Blog Viewer App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="light">
        <body >
          <nav className="bg-gray-300">
            <NavbarServer></NavbarServer>
          </nav>
          <hr />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
