interface HeroCollageProps {
  images: { src: string; title: string; alt?: string }[];
}

/**
 * 4-image collage hero used in place of the single-image HeroSlider
 * on activities that need richer above-the-fold imagery.
 */
const HeroCollage = ({ images }: HeroCollageProps) => {
  const imgs = images.slice(0, 4);
  while (imgs.length < 4 && images.length > 0) imgs.push(images[0]);

  return (
    <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
        {imgs.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={img.src}
              alt={img.alt || img.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
