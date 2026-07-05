import { motion } from "framer-motion"

const certifications = [
  {
    title: "TryHackMe Learning path Jr Penetration Tester",
    issuer: "TryHackMe",
    description:
      "Completed multiple cybersecurity learning paths focused on penetration testing, Linux, networking, web security, and privilege escalation.",
    extra:
      "Cybersecurity Labs • Hands-on Practice • Ethical Hacking",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JDMVGXHDNW.pdf",
  },

  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco",
    description:
      "Completed ethical hacking training covering reconnaissance, enumeration, vulnerability assessment, and penetration testing.",
    extra:
      "Certification Completed",
    link: "#",
  },

  {
    title: "Advent of Cyber",
    issuer: "TryHackMe",
    description:
      "Participated in hands-on cybersecurity challenges involving OSINT, malware analysis, web exploitation, and networking labs.",
    extra:
      "Security Challenges • Practical Labs",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-V8HKGLBXNE.pdf",
  },
]

function Certifications() {
  return (
    <section className="py-24 px-6 bg-[#050505]">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-green-400 tracking-[0.3em] mb-4">
            CERTIFICATIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Learning &
            <span className="text-green-400"> Achievements</span>
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-black border border-green-500/20 rounded-2xl p-8 hover:border-green-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-3 text-green-400">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {cert.issuer}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {cert.description}
              </p>

              <p className="text-green-400 text-sm mt-4 mb-4">
                {cert.extra}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-4 py-2 rounded-lg transition"
              >
                View Certificate
              </a>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications
