export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center">
      <h1 className="text-5xl font-bold">
        Trang Vu
      </h1>

      <div className="flex gap-8 text-lg">
        <a href="#about" className="hover:text-zinc-400 transition">
          About
        </a>

        <a href="#projects" className="hover:text-zinc-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-zinc-400 transition">
          Contact
        </a>
      </div>
    </nav>
  )
}