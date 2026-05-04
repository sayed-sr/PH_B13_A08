import courses from "@/app/data/courses.json"

export async function getCourses() {
  
  
  await new Promise(res => setTimeout(res, 500))
  return courses
}