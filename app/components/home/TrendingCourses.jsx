import courses from "@/data/courses.json"
import Link from "next/link"

export default function TrendingCourses() {
 
  const trending = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(3, 7)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
  Trending Courses 
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">

        {trending.map((course) => (
          <div
      key={course.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >

            <img
              src={course.image}
              alt={course.title}
              className="h-36 sm:h-32 w-full object-cover"
       />

            <div className="p-3 sm:p-4 space-y-2 flex flex-col flex-1">

    <h3 className="font-semibold text-sm line-clamp-1">
     {course.title}
              </h3>

    <p className="text-xs text-gray-500">
                {course.instructor}
         </p>

              <div className="flex justify-between items-center mt-auto">

                <span className="text-yellow-500 text-sm">
                  ⭐ {course.rating}
     </span>

                <Link
                  href={`/courses/${course.id}`}
     className="text-xs text-blue-600 font-semibold hover:underline"
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