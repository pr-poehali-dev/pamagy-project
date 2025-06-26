interface ImageGalleryProps {
  title: string;
  images?: string[];
}

const ImageGallery = ({ title, images = [] }: ImageGalleryProps) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {title}
      </h2>

      {images.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-lg p-12 border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">
              Изображения будут добавлены сюда
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
