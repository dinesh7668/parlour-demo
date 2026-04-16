import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import { SkeletonImage } from '../components/SkeletonLoading';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';

type FilterCategory = 'all' | 'bridal' | 'party' | 'skincare' | 'hair' | 'before-after' | 'makeup';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const categories: Array<{ value: FilterCategory; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'bridal', label: 'Bridal' },
    { value: 'party', label: 'Party' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'hair', label: 'Hair' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'before-after', label: 'Before & After' },
  ];

  const filteredImages: GalleryImage[] =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setLightboxIndex(index);
      setLightboxOpen(true);
      setIsLoading(false);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="overflow-x-hidden pt-16 sm:pt-20">
      {/* Hero */}
      <section className="section-container py-14 text-center sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-3xl font-serif font-bold gradient-text sm:text-5xl"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          Explore our portfolio of beautiful transformations
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section className="section-container mb-10 flex flex-wrap justify-center gap-3 overflow-x-auto sm:mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.value)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all sm:px-5 sm:text-base ${
              selectedCategory === category.value
                ? 'bg-primary-400 text-white shadow-glow'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="section-container pb-20">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <SkeletonImage count={6} />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => handleImageClick(index)}
                className="cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl sm:h-72">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-start p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold">{image.title}</p>
                      <p className="text-white/80 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map((img) => ({
          url: img.url,
          title: img.title,
        }))}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default Gallery;
