import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTerminal } from "react-icons/fa"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >

        <div className="flex justify-center mb-6">
          <FaTerminal className="text-green-400 text-5xl" />
        </div>

        <p className="text-green-400 tracking-[0.3em] mb-4">
          CYBERSECURITY STUDENT
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm
          <span className="text-green-400"> M Rishikesh Reddy </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Passionate about ethical hacking, penetration testing,
          digital security, and building secure systems.
        </p>

        

      </motion.div>

    </section>
  )
}

export default Hero
