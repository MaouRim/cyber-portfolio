import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-green-400 tracking-[0.3em] mb-4">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Secure
            <span className="text-green-400"> Digital Systems</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I am a B.Tech Cybersecurity student passionate about ethical hacking,
            penetration testing, network security, and secure application development.
            I enjoy solving security challenges, exploring vulnerabilities,
            and continuously learning modern cybersecurity technologies.
          </p>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >

          <div className="bg-black border border-green-500/20 p-6 rounded-2xl">
            <h3 className="text-green-400 text-xl font-bold mb-2">Networking</h3>
            <p className="text-gray-400 text-sm">
              TCP/IP, DNS, Routing, Wireshark
            </p>
          </div>

          <div className="bg-black border border-green-500/20 p-6 rounded-2xl">
            <h3 className="text-green-400 text-xl font-bold mb-2">Web Security</h3>
            <p className="text-gray-400 text-sm">
              XSS, SQLi, Burp Suite
            </p>
          </div>

          <div className="bg-black border border-green-500/20 p-6 rounded-2xl">
            <h3 className="text-green-400 text-xl font-bold mb-2">Linux</h3>
            <p className="text-gray-400 text-sm">
              Kali Linux, Ubuntu, Shell
            </p>
          </div>

          <div className="bg-black border border-green-500/20 p-6 rounded-2xl">
            <h3 className="text-green-400 text-xl font-bold mb-2">Programming</h3>
            <p className="text-gray-400 text-sm">
              Python, JavaScript, C
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About
