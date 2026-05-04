export default function Hero() {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
          Learn from Industry Experts and build your dream career with SkillSphere.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          
          <a
            href="/courses"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold 
                       hover:bg-gray-200 transition text-sm sm:text-base w-full sm:w-auto"
          >
            Browse Courses
          </a>

          <a
            href="/register"
            className="bg-black/30 px-6 py-3 rounded-lg font-semibold 
                       hover:bg-black/50 transition text-sm sm:text-base w-full sm:w-auto"
          >
            Join Now
          </a>

        </div>

      </div>
    </section>
  )
}