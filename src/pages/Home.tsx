import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Carousel from '../components/Carousel';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
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

  const featuredServices = services.slice(0, 3);

  const testimonialCarousel = testimonials.map((testimonial) => (
    <div key={testimonial.id} className="p-8">
      <TestimonialCard {...testimonial} />
    </div>
  ));

  return (
    <div className="overflow-x-hidden pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white pt-16 dark:from-gray-900 dark:to-gray-800 sm:pt-20">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-2 sm:mb-6"
          >
            <Sparkles className="text-primary-600 dark:text-primary-400" size={24} />
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 sm:text-base">
              Welcome to Glamour
            </p>
          </motion.div>

          <h1 className="mx-auto mb-5 max-w-[10ch] text-4xl font-serif font-bold leading-none sm:mb-6 sm:max-w-none sm:text-6xl lg:text-7xl">
            Your{' '}
            <span className="gradient-text">Beauty Destination</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-xl">
            Experience luxury beauty services with professional makeup artists, hair
            stylists, and skincare specialists dedicated to making you look and feel
            your absolute best.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/booking"
              className="group inline-flex w-full items-center justify-center rounded-lg bg-primary-400 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-500 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Book Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-primary-400 px-6 py-3.5 text-base font-semibold text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-gray-800 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-serif font-bold sm:text-4xl">
            Our Featured Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Discover our most popular beauty and makeup services
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {featuredServices.map((service) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-semibold"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container -mx-4 bg-gradient-to-br from-gray-50 to-white px-4 dark:from-gray-800 dark:to-gray-900 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-serif font-bold sm:text-4xl">
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Real reviews from our happy clients
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Carousel items={testimonialCarousel} autoPlay interval={4000} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 py-14 text-white sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-serif font-bold sm:text-4xl">
            Ready to Look Your Best?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base opacity-90 sm:text-xl">
            Book your appointment today and experience the Glamour difference.
          </p>
          <Link
            to="/booking"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary-600 transition-colors hover:bg-gray-100 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            Schedule Your Appointment
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
