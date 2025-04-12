import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-10 animate-fadeIn">
        <Header />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
