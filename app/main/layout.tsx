import CheckLogin from "@/components/checkLogin"
import Footer from "../../components/shared/Footer"
import Header from "../../components/shared/Header"
import React from "react"

export default function RoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen h-screen flex flex-col bg-[#E0F9FF] overflow-hidden">
      <CheckLogin />
      <Header />
      <div className="flex-1 flex flex-col py-1 md:py-4 lg:py-5 px-1 md:px-4 lg:px-14 overflow-auto">
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}
