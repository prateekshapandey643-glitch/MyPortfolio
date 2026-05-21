import ScrollReveal from "../components/ScrollReveal";

function Skills() {
  const backendSkills = [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
  ];

  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
  ];

  const databaseSkills = [
    "MySQL",
    "MongoDB (Basic)",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "Maven",
    "Eclipse / IntelliJ",
  ];

  return (
    <ScrollReveal>
      <section
        id="skills"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Backend */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm
                               hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm
                               hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Database
              </h3>
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm
                               hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Tools & Build
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm
                               hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;
