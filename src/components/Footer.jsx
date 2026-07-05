function Footer() {
  return (
    <footer className="border-t border-green-500/10 bg-black py-8">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-green-400 mb-3">
          Rishikesh
        </h2>

        <p className="text-gray-400 mb-4">
          Cybersecurity Student | Ethical Hacking | Web Security
        </p>

        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/MaouRim"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/m-rishikeshreddy-5775a034b"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rishikeshreddy.m@gmail.com"
            className="text-gray-400 hover:text-green-400 transition"
          >
            Email
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 Rishikesh. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer
