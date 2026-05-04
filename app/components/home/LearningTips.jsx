export default function LearningTips() {
  const tips = [
    {
      title: "Study Consistently",
      desc: "Study a little every day instead of cramming. Consistency builds long-term memory."
    },
    {
      title: "Use Active Learning",
      desc: "Practice coding instead of just watching tutorials. Build small projects."
    },
    {
      title: "Time Management",
      desc: "Use Pomodoro technique: 25 min focus, 5 min break."
    },
    {
      title: "Take Notes",
      desc: "Write down key concepts in your own words to improve understanding."
    }
  ]

  return (
  <section className="max-w-6xl mx-auto px-4 sm:px-6">

    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
      Learning Tips 📘
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

      {tips.map((tip, index) => (
        <div
          key={index}
       className="bg-white border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
        >

  <h3 className="font-bold text-base sm:text-lg mb-2 text-blue-600">
         {tip.title}
          </h3>

     <p className="text-gray-600 text-sm">
            {tip.desc}
      </p>

    </div>
      ))}

    </div>
  </section>
)
}