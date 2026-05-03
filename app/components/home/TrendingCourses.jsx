import courses from "@/data/courses.json"
import Link from "next/link"

export default function TrendingCourses() {
  // simulate trending: take mid-high rated courses
  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(3, 7)

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Trending Courses 🔥
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {trending.map((course) => (
          <div
            key={course.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            
            <img
              src={course.image}
              alt={course.title}
              className="h-32 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-sm line-clamp-1">
                {course.title}
              </h3>

              <p className="text-xs text-gray-500">
                {course.instructor}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-yellow-500 text-sm">
                  ⭐ {course.rating}
                </span>

                <Link
                  href={`/courses/${course.id}`}
                  className="text-xs text-blue-600 font-semibold"
                >
                  View
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}