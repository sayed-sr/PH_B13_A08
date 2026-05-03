import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">SkillSphere</h2>
          <p className="mt-3 text-gray-400">
            Upgrade your skills with industry level courses.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@skillsphere.com</p>
          <p className="text-gray-400">Phone: +880 1234-567890</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 pb-6">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  )
}