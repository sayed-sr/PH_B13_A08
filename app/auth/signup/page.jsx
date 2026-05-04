"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    await authClient.signUp.email(form, {
      onRequest: () => toast.loading("Creating account..."),
      onSuccess: () => {
        toast.dismiss();
        toast.success("Account created! Please login.");
        router.push("/auth/signin");
      },
      onError: (ctx) => {
        toast.dismiss();
        toast.error(ctx.error.message || "Registration failed");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* Name */}
          <input
            placeholder="Full Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />

          {/* Image */}
          <input
            type="url"
            placeholder="Photo URL"
            required
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />

          {/* Password with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full p-3 border rounded-lg pr-12"
            />

            {/* Eye Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Password Rule Instruction */}
          <p className="text-xs text-gray-500 -mt-2">
            Password must be at least 8 characters and include only
            uppercase letters, lowercase letters, and numbers.
          </p>

          {/* Submit */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Register
          </button>
        </form>

        {/* Google Button (UI only) */}
        <button
          onClick={() => toast("Google login is disabled for demo")}
          className="w-full mt-4 border py-3 rounded-xl font-semibold hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}