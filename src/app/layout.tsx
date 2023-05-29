import { ReactNode } from "react";
import { cookies } from "next/headers";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJam,
} from "next/font/google";
import "./globals.css";

import Hero from "../components/Hero";
import Profile from "../components/Profile";
import SignIn from "../components/SignIn";
import Copyright from "../components/Copyright";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "500",
});

const baiJam = BaiJam({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jam",
});

export const metadata = {
  title: "Space Time",
  description: "A time capsle with react nextJS and TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has("token");
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJam.variable}
          bg-gray-900 font-sans text-gray-100`}
      >
        <main className="min-h-screen flex-col  md:grid md:grid-cols-2  ">
          {/** left */}
          <div className="relative flex max-h-[100vh]  flex-col justify-between space-y-4 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-10 py-16 lg:px-28">
            {/** blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2  rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/** stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />
            <Copyright />
          </div>

          {/** right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-10  md:p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
