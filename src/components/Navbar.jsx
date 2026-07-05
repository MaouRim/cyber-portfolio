function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-green-500/20 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">
          MaouRim
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a
              href="#about"
              className="hover:text-green-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#stats"
              className="hover:text-green-400 transition"
            >
              Stats
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-green-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar
