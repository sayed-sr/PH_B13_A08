import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SkillSphere | Upgrade Your Skills",
  description: "Learn from industry experts",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body suppressHydrationWarning className="bg-gray-50 text-slate-900 flex flex-col min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}