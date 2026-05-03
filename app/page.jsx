import Hero from "./components/home/Hero"
import PopularCourses from "./components/home/PopularCourses"
import LearningTips from "./components/home/LearningTips"
import TopInstructors from "./components/home/TopInstructors"
import TrendingCourses from "./components/home/TrendingCourses"

export default function HomePage() {
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