import { useState } from "react";

interface ImageGalleryProps {
  title: string;
}

const ImageGallery = ({ title }: ImageGalleryProps) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Разные наборы изображений для разных галерей
  const getImages = (galleryTitle: string) => {
    if (galleryTitle === "Посейдон") {
      return [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      ];
    } else if (galleryTitle === "Кламс") {
      return [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop",
      ];
    }
    return [];
  };

  const images = getImages(title);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {title}
        </h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={src}
                alt={`${title} изображение ${index + 1}`}
                className={`w-full h-64 object-cover transition-transform duration-500 ${
                  hoveredImage === index ? "scale-110" : "scale-100"
                }`}
              />

              {hoveredImage === index && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">Посмотреть</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
