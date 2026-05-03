import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-3">By {course.instructor}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 font-bold">⭐ {course.rating}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium">{course.level}</span>
        </div>
        <Link href={`/courses/${course.id}`} className="block text-center bg-blue-50 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
          View Details
        </Link>
      </div>
    </div>
  );
}