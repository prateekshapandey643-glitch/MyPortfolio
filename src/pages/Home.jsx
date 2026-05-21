import resume from "../assets/Pratikshaa.pdf";
import profile from "/images/MineImage.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-white animate-fadeUp">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-400">Prateeksha Pandey</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Java & Full Stack Developer
          </p>

          <p className="mt-4 text-gray-400">
            I build scalable backend systems using Java & Spring Boot
            and modern frontend applications using React.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href={resume}
              download
              className="px-6 py-3 bg-blue-500 rounded-lg
                         hover:bg-blue-600 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-500 rounded-lg
                         hover:border-blue-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Prateeksha Pandey"
            className="
              w-64 h-64 md:w-80 md:h-80
              rounded-full object-cover
              border-4 border-blue-400
              shadow-xl
              animate-float
              hover:scale-105 hover:shadow-blue-500/50
              transition duration-300
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
