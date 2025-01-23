import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/AuthProvider";
import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Navbar from "@/Components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Viewer App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav className="bg-gray-300">
           {/* <ul className="flex gap-5"> */}
            {/* <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
           </ul>
           <ul className="flex gap-5">
            <li><LoginLink >Sign in</LoginLink></li>
            <li><RegisterLink>Sign up</RegisterLink></li>
            <li><LogoutLink>Log out</LogoutLink></li> */}
             <Navbar></Navbar>
                        
            
                      

           {/* </ul> */}
          </nav>
          <hr />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
