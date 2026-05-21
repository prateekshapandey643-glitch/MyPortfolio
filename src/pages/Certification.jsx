import ScrollReveal from "../components/ScrollReveal";
import CertificationCard from "../components/CertificationCard";

function Certification() {
  return (
    <ScrollReveal>
      <section
        id="certifications"
        className="bg-gray-900 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <CertificationCard
              title="Full Stack Development Training"
              provider="Jspider"
              duration="6 Months"
              description="Hands-on training in Java, Spring Boot, Hibernate, SQL, Web Development, Testing, and Competitive Programming."
             // link="https://production-resume-builder.s3.ap-south-1.amazonaws.com/certificates/KODI63CRG-SANDEEP%20KUMAR%20MEHTA/certificate.pdf"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Certification;
