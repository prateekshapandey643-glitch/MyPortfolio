function Card({ title, description, tech, github, live }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-400">
        {title}
      </h3>

      <p className="mt-3">
        {description}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Tech: {tech}
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href={github}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <span className="text-gray-500">|</span>

        {live ? (
          <a
            href={live}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        ) : (
          <span className="text-gray-400">
            Live Demo (Coming Soon)
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
