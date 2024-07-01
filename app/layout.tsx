import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Server from "@/components/serverStart"
import ReactQueryProvider from "@/components/ReactQueryProvider"

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "MediConnect",
  description: "Application de gestion des dossiers medicals",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
