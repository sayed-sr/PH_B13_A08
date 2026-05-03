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
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Learning Tips 📘
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2 text-blue-600">
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