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

  // 🔒 Protect entire courses page
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/signin?redirect=/courses")
    }
  }, [session, isPending, router])

  if (isPending) {
    return (
      <p className="text-center py-20">
        Loading...
      </p>
    )
  }

  if (!session) return null

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Courses 📚
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md p-3 border rounded-xl"
        />
      </div>

      {/* Courses */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  )
}