import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* Add more sections as needed */}
    </main>
  );
}
