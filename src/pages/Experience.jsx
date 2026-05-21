import ScrollReveal from "../components/ScrollReveal";

function Experience() {
  return (
    <ScrollReveal>
      <section
        id="experience"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-white mb-10">
            Internship Experience
          </h2>

          {/* Experience Card */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg
                          hover:shadow-xl transition max-w-3xl">

            {/* Role & Company */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-400">
                Java Development Intern
              </h3>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">
                Jul 2025 – Dec 2025
              </span>
            </div>

            <p className="text-gray-400 mb-4">
              JSpiders / QSpiders, Noida
            </p>

            {/* Responsibilities */}
            <ul className="list-disc list-inside space-y-2">
              <li>Worked on Core Java and Spring Boot backend modules</li>
              <li>Developed REST APIs with complete CRUD operations</li>
              <li>Integrated backend APIs with frontend and MySQL database</li>
              <li>Improved debugging skills and understanding of backend workflows</li>
            </ul>

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Experience;
