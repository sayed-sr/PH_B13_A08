"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";
import { useState } from "react";

export default function Navbar() {



  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {

    await authClient.signOut();



    toast.success("Logged out successfully");
    router.push("/auth/signin");
  };

  if (isPending) {
    return (
      <nav className="bg-white border-b sticky top-0 z-50 px-4 sm:px-6 py-4">
        
        
        
        
        <div className="max-w-7xl mx-auto flex justify-between">
                   <div className="animate-pulse h-6 w-32 bg-gray-200 rounded"></div>
        </div>
      </nav>
    );
  }

  return (
       <nav className="bg-white border-b sticky top-0 z-50 px-4 sm:px-6 py-4">

  
  <div className="max-w-7xl mx-auto flex items-center justify-between">

      
        <Link
          href="/"
          className="text-xl sm:text-2xl font-black text-blue-600 tracking-tighter"
        >
          SkillSphere
        </Link>

        
    <div className="hidden md:flex gap-8 font-medium">
   <Link href="/">Home</Link>
          <Link href="/courses">All Courses</Link>
   <Link href="/profile">My Profile</Link>
        </div>

       
        <button
      onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        
   <div className="hidden md:block">
          {session?.user ? (
 <div className="flex items-center gap-4">

              <span className="font-semibold text-sm">
    {session.user.name ?? "User"}
              </span>

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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 px-2 pb-4">

 <div className="flex flex-col gap-3 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
<Link href="/courses" onClick={() => setOpen(false)}>All Courses</Link>
            <Link href="/profile" onClick={() => setOpen(false)}>My Profile</Link>
          </div>

          <hr />

          <div>
    {session?.user ? (
              <div className="flex flex-col gap-3">

                <span className="text-sm font-semibold">
     {session.user.name ?? "User"}
                </span>

        <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
    className="text-red-500 font-bold text-sm text-left"
                >
                  Logout
                </button>

              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
       href="/auth/signin"
                  onClick={() => setOpen(false)}
   className="px-4 py-2 border rounded-xl text-center"
                >
                  Login
                </Link>

                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
   className="px-4 py-2 bg-blue-600 text-white rounded-xl text-center"
                >
                  Register
     </Link>
       </div>
       )}
    </div>

   </div>
      )}

    </nav>
  );
}