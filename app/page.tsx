import Navbar from "@/components/Navbar"  
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Rants from "@/components/Eventnote"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Rants />
      <h1>I made this on an evening of my last day of school</h1>
    </main>
  )
}