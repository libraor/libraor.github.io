import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
