"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import courses from "@/data/courses.json";
import { Button } from "@heroui/react";

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const displayCourses = courses.slice(0, 3);

  const handleExploreAll = () => {
    if (session) {
      router.push("/courses");
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="h-[500px] bg-slate-900 text-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-black mb-4">Master Your Future 🚀</h1>
        <p className="text-gray-400 text-xl max-w-lg">High-quality courses from the best in the industry.</p>
      </section>

      {/* Popular Courses (First 3) */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCourses.map(course => (
            <div key={course.id} className="border rounded-3xl p-4 bg-white shadow-sm">
              <img src={course.image} className="w-full h-48 object-cover rounded-2xl mb-4" />
              <h3 className="font-bold text-xl">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4">Instructor: {course.instructor}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-yellow-500">⭐ {course.rating}</span>
                <Button onClick={() => setSelectedCourse(course)} variant="flat" color="primary">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" color="secondary" onClick={handleExploreAll}>
            Explore All Courses
          </Button>
        </div>
      </section>

      {/* Pop-up Detail Card */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 relative">
            <button onClick={() => setSelectedCourse(null)} className="absolute top-4 right-4 text-2xl">×</button>
            <img src={selectedCourse.image} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
            <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
            <Button fullWidth color="primary" size="lg" onClick={() => setSelectedCourse(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}