import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              About Me
            </h2>

            <p className="mb-4 leading-relaxed">
              I am an aspiring{" "}
              <span className="text-blue-400">Java & Full Stack Developer</span>{" "}
              with hands-on experience in building backend applications
              using Spring Boot and modern frontend interfaces using React.
            </p>

            <p className="mb-2 leading-relaxed">
              I completed my{" "}
              <span className="text-blue-400">
                B.Tech in Computer Science & Engineering
              </span>{" "}
              from{" "}
              <span className="text-blue-400">
                KIPM-College of Engineering & Technology, Gorakhpur (AKTU University)
              </span>.
            </p>

            {/* Year Duration */}
            <p className="mb-4 text-sm text-gray-400">
              Academic Duration: <span className="text-gray-300">2022– 2026</span>
            </p>

            <p className="leading-relaxed">
              During my internship, I worked on real-time backend modules,
              REST API development, database integration, and debugging,
              which helped me understand scalable application design
              and industry best practices.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-400">Java</h3>
              <p className="mt-2 text-sm">Backend Development</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-400">Spring Boot</h3>
              <p className="mt-2 text-sm">REST APIs</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-400">React</h3>
              <p className="mt-2 text-sm">Frontend UI</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-blue-400">MySQL</h3>
              <p className="mt-2 text-sm">Database</p>
            </div>
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;
