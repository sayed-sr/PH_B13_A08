"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

 const handleLogout = async () => {
  await authClient.signOut();
  toast.success("Logged out successfully");
  router.push("/auth/signin");
};

  // Small loader while checking session (prevents flicker)
  if (isPending) {
    return (
      <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="animate-pulse h-6 w-32 bg-gray-200 rounded"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          SkillSphere
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/profile">My Profile</Link>
        </div>

       
       {/* Auth Section */}
<div>
  {session?.user ? (
    <div className="flex items-center gap-4">

      {/* User Name */}
      <span className="font-semibold text-sm hidden md:block">
        {session.user.name ?? "User"}
      </span>

      {/* Avatar */}
      {session.user.image ? (
        <img
          src={session.user.image}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold border">
          {session.user.name?.charAt(0) ?? "U"}
        </div>
      )}

      <button
        onClick={handleLogout}
        className="text-red-500 text-sm font-bold hover:underline"
      >
        Logout
      </button>

    </div>
  ) : (
    <div className="flex gap-4">
      <Link href="/auth/signin" className="px-5 py-2 border rounded-xl hover:bg-gray-50">
        Login
      </Link>
      <Link href="/auth/signup" className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Register
      </Link>
    </div>
  )}
</div>

      </div>
    </nav>
  );
}