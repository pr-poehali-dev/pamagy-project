import RainbowTitle from "@/components/RainbowTitle";
import ImageGallery from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
        <RainbowTitle>Сашок</RainbowTitle>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Онлайн-маркетплейс уникальных изображений
        </p>
      </header>

      <main>
        <ImageGallery title="Посейдон" />
        <ImageGallery title="Кламс" />
      </main>
    </div>
  );
};

export default Index;
