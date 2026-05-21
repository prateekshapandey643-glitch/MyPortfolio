import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400 py-10 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">

        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © {year} Prateeksha Pandey. All rights reserved.
        </p>

        {/* Center: Footer Navigation */}
        <ul className="flex justify-center gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-xl">
          <a
            href="https://github.com/Prateekshapandey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transform hover:scale-125
                       hover:drop-shadow-[0_0_8px_#60a5fa]
                       transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prateeksha-pandey-659783293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transform hover:scale-125
                       hover:drop-shadow-[0_0_8px_#60a5fa]
                       transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:prateekshpandey.tech@zohomail.in"
            aria-label="Email"
            className="hover:text-blue-400 transform hover:scale-125
                       hover:drop-shadow-[0_0_8px_#60a5fa]
                       transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="absolute right-6 bottom-6 bg-blue-500 text-white p-3
                   rounded-full shadow-lg hover:bg-blue-600
                   hover:scale-110 transition duration-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
