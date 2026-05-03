"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import courses from "@/data/courses.json";
import CourseCard from "@/app/components/CourseCard";

export default function AllCourses() {
  const [query, setQuery] = useState("");
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  // Redirect logic
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/signup");
    }
  }, [session, isPending, router]);

  // Show a loading state while checking authentication
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Prevent flashing content before redirect
  if (!session) return null;

  const filtered = courses.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h1 className="text-4xl font-bold">Discover Courses</h1>
        <div className="w-full md:w-96 relative">
          <input 
            type="text" 
            placeholder="Search by title..." 
            className="w-full p-4 pl-12 border rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="absolute left-4 top-4 opacity-40 text-xl">🔍</span>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">No courses match your search.</p>
        </div>
      )}
    </div>
  );
}