import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Reviews: React.FC = () => {
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

  const testimonialCarouselItems = testimonials.map((testimonial) => (
    <div key={testimonial.id} className="p-4 sm:p-8">
      <TestimonialCard {...testimonial} />
    </div>
  ));

  return (
    <div className="overflow-x-hidden pt-16 sm:pt-20">
      <section className="section-container py-14 text-center sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-3xl font-serif font-bold gradient-text sm:text-5xl"
        >
          Client Reviews
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          Hear what our satisfied clients have to say about us
        </motion.p>
      </section>

      <section className="section-container mb-8 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <Carousel items={testimonialCarouselItems} autoPlay interval={4000} />
        </div>
      </section>

      <section className="section-container pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-container rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 py-12 text-white sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4 lg:gap-8"
        >
          {[
            { number: '5000+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '4.9+', label: 'Average Rating' },
            { number: '2000+', label: 'Reviews' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <p className="mb-2 text-3xl font-bold sm:text-4xl">{stat.number}</p>
              <p className="text-sm text-white/80 sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Reviews;
