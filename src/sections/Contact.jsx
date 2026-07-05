import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">

      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-green-400 tracking-[0.3em] mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's
            <span className="text-green-400"> Connect</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Open to internships, collaborations, cybersecurity projects,
            and networking opportunities.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 items-center mb-10 text-gray-300">

            <a
              href="mailto:rishikeshreddy.m@gmail.com"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaEnvelope />
              rishikeshreddy.m@gmail.com
            </a>

            <a
              href="tel:9535215137"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaPhone />
              +91 9535215137
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-3xl">

            <a
              href="https://github.com/MaouRim"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/m-rishikeshreddy-5775a034b"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact
