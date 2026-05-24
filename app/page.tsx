import Navbar from "@/components/Navbar"  
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <h1>Hello</h1>
    </main>
  )
}