import { useEffect, useState } from "react";
import profile from "/images/MineImage.jpeg";

const sections = ["home", "about", "skills", "experience", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo with Photo */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Prateeksha Pandey"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
          />
          <span className="text-white font-semibold text-lg hidden sm:block">
            Prateeksha
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition cursor-pointer
                  ${
                    active === item
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-4">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block capitalize transition
                ${
                  active === item
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
