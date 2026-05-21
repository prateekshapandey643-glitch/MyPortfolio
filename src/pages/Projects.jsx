import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        className="bg-gray-900 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <Card
              title="Decentralized NFT Marketplace – Blockchain Based "
              description="Build a decentralized NFT Marketplace enabling artists to mint, list, and trade digital artwork securely."
              tech="Java, Spring Boot, Hibernate, MySQL, React, blockchain tools"
             
            />

            {/* Project 2 */}
            <Card
              title="From Surplus to Support – E-Commerce Application"
              description="Full-stack e-commerce application with authentication, cart, product management, and secure payment workflow."
              tech="Java, Spring Boot, Hibernate, MySQL, React"
              github="https://github.com/prateekshapandey643-glitch/From-Surplus-To-Support.git"
            />
            

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;
