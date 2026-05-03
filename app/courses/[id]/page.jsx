"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import courses from "@/data/courses.json"
import toast from "react-hot-toast"


export default function CourseDetails() {
  const { id } = useParams()
  const router = useRouter()

  const { data: session, isPending } = authClient.useSession()

  const course = courses.find((c) => c.id == id)

  // 🔒 Protected Route + redirect back logic
  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/auth/signin?redirect=/courses/${id}`)
    }
  }, [session, isPending, router, id])

  if (isPending) {
    return (
      <p className="text-center py-20">
        Loading course...
      </p>
    )
  }

  if (!session) return null

  if (!course) {
    return (
      <p className="text-center py-20">
        Course not found
      </p>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {course.title}
      </h1>

      {/* Image */}
      <img
        src={course.image}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Info */}
      <div className="space-y-2 mb-8">
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Rating:</strong> ⭐ {course.rating}</p>
        <p className="text-gray-600">{course.description}</p>
      </div>

      {/* Curriculum (Static requirement) */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">
          Course Curriculum
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Introduction & Setup</li>
          <li>Core Concepts</li>
          <li>Hands-on Projects</li>
          <li>Final Assessment</li>
        </ul>
      </div>

    </div>
  )
}