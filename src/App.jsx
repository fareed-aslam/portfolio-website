import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased ">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Testimonial />
        <Contact />
        {/* <button
          onClick={() => {
            throw new Error("This is your first error!");
          }}
        >
          Break the world
        </button> */}
      </div>
    </main>
  );
};

export default App;
