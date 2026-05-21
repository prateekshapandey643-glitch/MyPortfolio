// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (Main Sections)
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certification from "./pages/Certification";

function App() {
  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Certification />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
