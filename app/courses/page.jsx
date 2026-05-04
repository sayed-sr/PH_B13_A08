"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"


import courses from "@/data/courses.json"
import CourseCard from "@/app/components/CourseCard"

export default function AllCourses() {
  const router = useRouter()

  const { data: session, isPending } = authClient.useSession()

  const [query, setQuery] = useState("")

  useEffect(() => {
    if (!isPending && !session) {



      router.push("/auth/signin?redirect=/courses")
    }
  }, [session, isPending, router])

  if (isPending) {


    return (
      <div className="flex items-center justify-center py-20 px-4">


  <p className="text-center text-sm sm:text-base">
       Loading...
   </p>
      </div>
    )
  }

  if (!session) return null

  const filteredCourses = courses.filter((course) =>


    course.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        All Courses 
      </h1>

      
      <div className="flex justify-center mb-8 sm:mb-10">
        <input
          type="text"
    placeholder="Search courses..."
 value={query}


    onChange={(e) => setQuery(e.target.value)}


    className="w-full max-w-md p-3 sm:p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
 {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  )
}