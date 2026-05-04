export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      role: "Full Stack Developer",
      expertise: "Web Development",
      image: "https://as1.ftcdn.net/jpg/01/91/67/52/1000_F_191675274_IebQK5pVaGmgZvprpIevKIPTovsRZZJi.jpg"
    },
    {
      name: "Sarah Smith",
      role: "React Expert",
      expertise: "Frontend Development",
      image: "https://as2.ftcdn.net/jpg/01/71/44/27/1000_F_171442790_HWVGc8kbnGTSyZcSHspZxXe2Y7fQeBXm.jpg"
    },
    {
      name: "Michael Brown",
      role: "UI/UX Designer",
      expertise: "Design Systems",
      image: "https://as1.ftcdn.net/jpg/02/23/61/36/1000_F_223613686_2LXNahDJdD6i7TBGi8qKWxNhbaJKD116.jpg"
    },
    {
      name: "Emma Wilson",
      role: "Digital Marketer",
      expertise: "SEO & Ads",
      image: "https://as1.ftcdn.net/jpg/03/07/57/54/1000_F_307575473_NaZ8XNxe1BBt5Z0fKgMZWJgb1JIzDuYR.jpg"
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        Top Instructors 👨‍🏫
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

        {instructors.map((ins, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
          >

            {/* Avatar Image (UPDATED) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <img
                src={ins.image}
                alt={ins.name}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>

            <h3 className="font-bold text-sm sm:text-base">
              {ins.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500">
              {ins.role}
            </p>

            <span className="inline-block mt-2 sm:mt-3 text-xs bg-gray-100 px-3 py-1 rounded-full">
              {ins.expertise}
            </span>

          </div>
        ))}

      </div>
    </section>
  )
}