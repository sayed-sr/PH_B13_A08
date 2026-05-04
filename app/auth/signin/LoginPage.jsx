"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const redirect = params.get("redirect") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.signIn.email(
      { email, password },
      {
        onSuccess: () => {
          setLoading(false);
          toast.success("Welcome back!");
          router.push(redirect);
          router.refresh();
        },
        onError: () => {
          setLoading(false);
          toast.error("Invalid email or password");
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white 
                      p-6 sm:p-8 md:p-10 
                      rounded-2xl shadow-xl border">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold 
                       text-center mb-6 sm:mb-8 text-slate-800">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 
                       transition text-white 
                       py-3 sm:py-4 rounded-xl font-bold
                       text-sm sm:text-base"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={() => toast("Google login is disabled for demo")}
          className="w-full mt-4 border py-3 sm:py-4 rounded-xl 
                     font-semibold text-sm sm:text-base
                     hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-xs sm:text-sm">
          New here?{" "}
          <Link href="/auth/signup" className="text-blue-600 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}