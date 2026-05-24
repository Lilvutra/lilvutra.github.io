export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between">
      <h1 className="font-bold text-xl">Trang Vu</h1>

      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}