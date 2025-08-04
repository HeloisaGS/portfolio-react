function CardProjeto({ image, title, description, repoLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-xs w-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ver repositório
        </a>
      </div>
    </div>
  );
}

export default CardProjeto;
