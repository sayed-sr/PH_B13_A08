"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        setLoading(false);
        toast.success("Welcome back!");
        router.push("/courses");
        router.refresh();
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error("Account not found. Please sign up first.");
        
        setTimeout(() => {
          router.push("/auth/signup");
        }, 1500);
      }
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition" 
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 shadow-lg transition transform active:scale-95"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>

        <div className="mt-8 text-center border-t pt-6">
          <p className="text-sm text-gray-600">
            Never been here before?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-bold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}