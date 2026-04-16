import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

type ServiceCategory = 'all' | 'makeup' | 'hair' | 'skincare' | 'bridal';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const categories: Array<{ value: ServiceCategory; label: string }> = [
    { value: 'all', label: 'All Services' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'hair', label: 'Hair' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'bridal', label: 'Bridal' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          Discover our full range of professional beauty and makeup services
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section className="section-container mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 sm:gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              selectedCategory === category.value
                ? 'bg-primary-400 text-white shadow-glow'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </section>

      {/* Services Grid */}
      <section className="section-container pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                id={service.id}
                icon={service.icon}
                name={service.name}
                description={service.description}
                price={service.price}
                duration={service.duration}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
