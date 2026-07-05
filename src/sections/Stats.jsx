import { motion } from "framer-motion"

const stats = [
  {
    number: "Top 1%",
    label: "TryHackMe Rank",
  },

  {
    number: "208+",
    label: "Rooms Completed",
  },

  {
    number: "125+",
    label: "Day Streak",
  },

  {
    number: "25",
    label: "Badges Earned",
  },
]

function Stats() {
  return (
    <section id="stats" className="py-20 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-green-400 tracking-[0.3em] mb-4">
            CYBER STATS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Security
            <span className="text-green-400"> Journey</span>
          </h2>

        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#050505] border border-green-500/20 rounded-2xl p-8 text-center hover:border-green-400 transition"
            >

              <h3 className="text-4xl font-bold text-green-400 mb-3">
                {stat.number}
              </h3>

              <p className="text-gray-400">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* TryHackMe Button */}
        <div className="text-center mt-12">

          <a
            href="https://tryhackme.com/p/rishikeshreddy.m"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-green-500/20"
          >
            View TryHackMe Profile
          </a>

        </div>

      </div>

    </section>
  )
}

export default Stats
