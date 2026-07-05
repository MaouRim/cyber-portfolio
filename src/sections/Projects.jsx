import { motion } from "framer-motion"

const projects = [
  {
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity tool designed to detect common web vulnerabilities such as SQL Injection, XSS, insecure headers, and exposed sensitive files through automated scanning.",
    tech: "Python • Flask • Cybersecurity • Web Security",
    github: "https://github.com/MaouRim/web-vuln-scanner",
   
  },

  {
    title: "Password Strength Checker",
    description:
      "Tool that analyzes password complexity and suggests secure password improvements.",
    tech: "Python • Cybersecurity",
    github: "https://github.com/MaouRim/passowrd_checker",
  
  },

  {
    title: "Packet Sniffer",
    description:
      "Network traffic monitoring tool using packet capturing techniques and protocol analysis.",
    tech: "Python • Wireshark • TCP/IP",
    github: "#",
    demo: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-green-400 tracking-[0.3em] mb-4">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured
            <span className="text-green-400"> Work</span>
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#050505] border border-green-500/20 rounded-2xl p-8 hover:border-green-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4 text-green-400">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-lg font-semibold transition"
                >
                  GitHub
                </a>

                

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
