function CertificationCard({
  title,
  provider,
  duration,
  description,
  link
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-blue-400">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        {provider} • {duration}
      </p>

      <p className="mt-3 text-gray-300">
        {description}
      </p>

      {/* Certificate Link */}
      {link && (
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:underline"
          >
            View Certificate →
          </a>
        </div>
      )}
    </div>
  );
}

export default CertificationCard;
