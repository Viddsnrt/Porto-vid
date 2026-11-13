import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills, { SkillMarquee } from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Organizations from "@/components/Organizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";

// Mengecek gambar proyek yang benar-benar ada di folder public/
const fileExists = (p) => !!p && fs.existsSync(path.join(process.cwd(), "public", p));

// Urutan bagian di halaman. Pindahkan / hapus baris untuk mengubah susunan.
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Experience />
        <Skills />
        <SkillMarquee />
        <Projects availableImages={projects.map((p) => p.image).filter(fileExists)} />
        <Achievements />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
