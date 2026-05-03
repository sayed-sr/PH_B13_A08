export default function Hero() {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-xl mb-8">
          Learn from Industry Experts and build your dream career with SkillSphere.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/courses"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Browse Courses
          </a>

          <a
            href="/register"
            className="bg-black/30 px-6 py-3 rounded-lg font-semibold hover:bg-black/50 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}