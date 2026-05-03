import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "SkillSphere",
  description: "Upgrade your skills with industry experts",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-4">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}