"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Profile() {
  const { data: session } = authClient.useSession();

  if (!session) return <div className="py-20 text-center">Please log in to view profile.</div>;

  return (
    <div className="max-w-md mx-auto py-24 px-4 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl border relative">
        {/* Placeholder for name initial since photo is removed */}
 <div className="mx-auto -mt-20 mb-6">
  {session.user.image ? (
    <img
      src={session.user.image}
      className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto"
    />
  ) : (
    <div className="w-24 h-24 bg-blue-600 text-white text-4xl font-bold rounded-full flex items-center justify-center shadow-lg mx-auto">
      {session.user.name?.charAt(0)}
    </div>
  )}
</div>
        <h2 className="text-3xl font-bold mb-1">{session.user.name}</h2>
        <p className="text-gray-500 mb-8">{session.user.email}</p>
        <Link href="/profile/update" className="block w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
          Update Profile Name
        </Link>
      </div>
    </div>
  );
}