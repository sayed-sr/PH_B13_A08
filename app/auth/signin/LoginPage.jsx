"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          {/* Password with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Login Button */}
          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={() => toast("Google login is disabled for demo")}
          className="w-full mt-4 border py-3 rounded-xl font-semibold hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-sm">
          New here?{" "}
          <Link href="/auth/signup" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}