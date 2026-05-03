export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      role: "Full Stack Developer",
      expertise: "Web Development"
    },
    {
      name: "Sarah Smith",
      role: "React Expert",
      expertise: "Frontend Development"
    },
    {
      name: "Michael Brown",
      role: "UI/UX Designer",
      expertise: "Design Systems"
    },
    {
      name: "Emma Wilson",
      role: "Digital Marketer",
      expertise: "SEO & Ads"
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Instructors 👨‍🏫
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {instructors.map((ins, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
          >
            
            {/* Avatar (initial-based) */}
            <div className="w-16 h-16 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-xl font-bold mb-4">
              {ins.name.charAt(0)}
            </div>

            <h3 className="font-bold">{ins.name}</h3>

            <p className="text-sm text-gray-500">
              {ins.role}
            </p>

            <span className="inline-block mt-3 text-xs bg-gray-100 px-3 py-1 rounded-full">
              {ins.expertise}
            </span>

          </div>
        ))}
      </div>
    </section>
  )
}