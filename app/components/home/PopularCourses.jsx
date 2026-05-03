import courses from "@/data/courses.json"
import Link from "next/link"

export default function PopularCourses() {
  // sort by rating (highest first) then take top 3
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <section className="max-w-6xl mx-auto px-6">
      
      <h2 className="text-3xl font-bold mb-8 text-center">
        Popular Courses 🔥
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {topCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            
            <img
              src={course.image}
              alt={course.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg line-clamp-1">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500">
                Instructor: {course.instructor}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {course.rating}
                </span>

                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {course.level}
                </span>
              </div>

              <Link
                href={`/courses/${course.id}`}
                className="block text-center mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}