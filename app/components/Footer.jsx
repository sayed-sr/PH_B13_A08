import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 sm:mt-20">

  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Brand */}
    <div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
            SkillSphere
          </h2>

   <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Upgrade your skills with industry level courses.
          </p>
        </div>

    
        <div>
  <h3 className="font-semibold mb-3 text-sm sm:text-base">
        Contact
          </h3>

   <p className="text-sm sm:text-base text-gray-400">
            Email: support@skillsphere.com
      </p>

  <p className="text-sm sm:text-base text-gray-400">
         Phone: +880 1234-567890
          </p>
        </div>

       
        <div>
    <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Legal
          </h3>

      <div className="flex flex-col gap-2 text-sm sm:text-base text-gray-400">

<Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>

        <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

    <a href="#" className="hover:text-white transition">
              Facebook
            </a>

     <a href="#" className="hover:text-white transition">
              Twitter
            </a>

         <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

</div>
        </div>

  </div>

      <div className="text-center text-xs sm:text-sm text-gray-500 pb-6 px-4">
    © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>

    </footer>
  )
}