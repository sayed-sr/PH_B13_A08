"use client"

import { useEffect, useState } from "react"
import Hero from "./components/home/Hero"
import PopularCourses from "./components/home/PopularCourses"
import LearningTips from "./components/home/LearningTips"
import TopInstructors from "./components/home/TopInstructors"
import TrendingCourses from "./components/home/TrendingCourses"
import Spinner from "./components/Spinner"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800) // simulated loading

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Spinner />

  return (
    <main className="space-y-20 pb-20">
      <Hero />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </main>
  )
}