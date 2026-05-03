import courses from "@/app/data/courses.json"

export async function getCourses() {
  // simulate fetching delay (for loader requirement later)
  await new Promise(res => setTimeout(res, 500))
  return courses
}