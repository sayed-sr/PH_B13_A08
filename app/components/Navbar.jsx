"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/auth/signin");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          SkillSphere
        </Link>
        
        <div className="flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        <div>
          {session ? (
            <div className="flex items-center gap-4">
              <span className="font-semibold text-sm">{session.user.name}</span>
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold border border-blue-200">
                {session.user.name?.charAt(0)}
              </div>
              <button onClick={handleLogout} className="text-red-500 text-sm font-bold hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/auth/signin" className="px-5 py-2 border rounded-xl hover:bg-gray-50">
                Sign In
              </Link>
              <Link href="/auth/signup" className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}