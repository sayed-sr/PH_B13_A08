export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">SkillSphere</h3>
          <p>Empowering learners worldwide with industry-led online education.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact: support@skillsphere.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-slate-800 pt-6 text-sm">
        © 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}