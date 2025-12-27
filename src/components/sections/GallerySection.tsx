"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium Sportwagen",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop",
    alt: "Luxus Limousine",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    alt: "Moderner SUV",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegante Karosserie",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    alt: "Sportwagen Detail",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium Interior",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Klassiker",
    category: "Fahrzeuge"
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    alt: "Muscle Car",
    category: "Fahrzeuge"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-[#ffffff]/20 text-[#ffffff] text-sm font-semibold 
                           tracking-widest uppercase rounded-full mb-4">
              Galerie
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              IMPRESSIONEN
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                       hover:bg-[#ffffff] transition-colors group"
              aria-label="Zurück scrollen"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                       hover:bg-[#ffffff] transition-colors group"
              aria-label="Weiter scrollen"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Gallery Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-8 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 group cursor-pointer"
            style={{ scrollSnapAlign: "start" }}
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 
                         group-hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                           transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center 
                             justify-center transform scale-0 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm 
                               rounded-full border border-white/20">
                  {image.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center 
                       justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full 
                       flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full 
                       flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-center text-white/70 mt-4">
                {galleryImages[selectedImage].alt}
              </p>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 
                         backdrop-blur-sm rounded-full text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
