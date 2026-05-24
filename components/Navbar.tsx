export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center">
      
      <h1 className="text-1xl font-bold">
        Trang Vu
      </h1>

      <div className="flex items-center gap-8">
        <a
          href="#about"
          className="text-white hover:text-zinc-400 transition"
        >
          About
        </a>

        <a
          href="#projects"
          className="text-white hover:text-zinc-400 transition"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-white hover:text-zinc-400 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}