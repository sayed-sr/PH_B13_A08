import courses from "@/data/courses.json"
import Link from "next/link"

export default function PopularCourses() {
  
  const topCourses = [...courses]
  
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Popular Courses 🔥
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

      {topCourses.map((course) => (
          <div
           key={course.id}
    className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            <img
              src={course.image}
       alt={course.title}
              className="h-40 sm:h-44 md:h-48 w-full object-cover"
            />

   <div className="p-4 sm:p-5 space-y-2 flex flex-col flex-1">

              <h3 className="font-bold text-base sm:text-lg line-clamp-1">
       {course.title}
              </h3>

    <p className="text-xs sm:text-sm text-gray-500">
                Instructor: {course.instructor}
          </p>

  <div className="flex justify-between items-center text-sm">

                <span className="text-yellow-500 font-semibold">
        ⭐ {course.rating}
                </span>

     <span className="text-xs px-2 py-1 bg-gray-100 rounded">
              {course.level}
      </span>

            </div>

      <Link
                href={`/courses/${course.id}`}
 className="mt-auto block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
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