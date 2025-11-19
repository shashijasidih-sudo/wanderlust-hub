import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import phiPhi1 from "@/assets/phi-phi-1.jpg";
import phiPhi2 from "@/assets/phi-phi-2.jpg";
import phiPhi3 from "@/assets/phi-phi-3.jpg";
import phiPhi4 from "@/assets/phi-phi-4.jpg";
import phiPhi5 from "@/assets/phi-phi-5.jpg";
import phiPhi6 from "@/assets/phi-phi-6.jpg";
import phiPhi7 from "@/assets/phi-phi-7.jpg";
import phiPhi8 from "@/assets/phi-phi-8.jpg";
import phiPhi9 from "@/assets/phi-phi-9.jpg";
import phiPhi10 from "@/assets/phi-phi-10.jpg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    { src: phiPhi1, alt: "Aerial view of Phi Phi Islands with turquoise waters" },
    { src: phiPhi2, alt: "Maya Bay with limestone cliffs and crystal waters" },
    { src: phiPhi3, alt: "Underwater snorkeling with colorful coral and fish" },
    { src: phiPhi4, alt: "Sunset over Phi Phi Islands" },
    { src: phiPhi5, alt: "Viking Cave with emerald waters" },
    { src: phiPhi6, alt: "Viewpoint panorama of twin bays" },
    { src: phiPhi7, alt: "Monkey Beach with limestone cliffs" },
    { src: phiPhi8, alt: "Bamboo Island pristine beach" },
    { src: phiPhi9, alt: "Big boat ferry approaching Phi Phi" },
    { src: phiPhi10, alt: "Loh Samah Bay secluded lagoon" },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Photo Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
