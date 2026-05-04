"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name:"",
    email:"",
    image:"",
    password:""
  });

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    await authClient.signUp.email(
      form,
      {
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
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white 
                      p-6 sm:p-8 md:p-10 
                      rounded-2xl shadow-xl border">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">
          <input 
            placeholder="Full Name"
            required
            onChange={(e)=>setForm({...form,name:e.target.value})}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="email"
            placeholder="Email"
            required
            onChange={(e)=>setForm({...form,email:e.target.value})}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="url"
            placeholder="Photo URL"
            required
            onChange={(e)=>setForm({...form,image:e.target.value})}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="password"
            placeholder="Password"
            required
            onChange={(e)=>setForm({...form,password:e.target.value})}
            className="w-full p-3 sm:p-4 border rounded-xl 
                       text-sm sm:text-base
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition
                             text-white py-3 sm:py-4 rounded-xl font-bold
                             text-sm sm:text-base">
            Register
          </button>
        </form>

        <button
          onClick={()=>toast("Google login is disabled for demo")}
          className="w-full mt-4 border py-3 sm:py-4 rounded-xl 
                     font-semibold text-sm sm:text-base
                     hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-xs sm:text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-600 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}