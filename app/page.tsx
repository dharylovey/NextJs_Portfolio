import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from '@/components/About'
import MySkills from "@/components/MySkills";
// import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="">
      <section className="xl:padding-l xl:padding-r wide:padding-r padding-b w-full">
        <Navbar />
        <Hero />
        <About />
        <MySkills />
        {/* <Experience /> */}
        {/* <Project /> */}
        <Contact />
      </section>
    </main>
  );
}
