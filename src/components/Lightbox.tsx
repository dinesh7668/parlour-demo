import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
  images: Array<{ url: string; title: string }>;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
          />

          {/* Lightbox container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Main image container */}
            <div className="relative w-full max-w-4xl">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              />

              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={40} />
              </button>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={40} />
              </button>

              {/* Image counter and title */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">{images[currentIndex].title}</p>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>

              {/* Thumbnail navigation */}
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentIndex
                        ? 'border-primary-400'
                        : 'border-transparent hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
