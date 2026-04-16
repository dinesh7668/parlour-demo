import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized for excellence in beauty and makeup artistry',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your satisfaction and comfort are our top priorities',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Using only the finest products and techniques',
    },
  ];

  return (
    <div className="overflow-x-hidden pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-16 dark:from-gray-900 dark:to-gray-800 sm:pt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
                alt="Beauty Studio"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h1 className="mb-5 text-3xl font-serif font-bold gradient-text sm:mb-6 sm:text-5xl">
              About Glamour
            </h1>
            <p className="mb-4 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
              Glamour is a premier beauty and makeup parlour dedicated to enhancing your
              natural beauty and making you feel confident.
            </p>
            <p className="mb-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
              With over 15 years of experience, our team of professional makeup artists,
              hair stylists, and skincare specialists are committed to delivering
              exceptional service and stunning results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Mission */}
          <motion.div variants={itemVariants} className="card-base p-8">
            <h2 className="text-2xl font-serif font-bold mb-4 gradient-text">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide exceptional beauty services that empower individuals to express
              their unique style and feel confident in their own skin. We're committed to
              using premium products, staying updated with latest trends, and treating
              every client like family.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="card-base p-8">
            <h2 className="text-2xl font-serif font-bold mb-4 gradient-text">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the most trusted and beloved beauty destination in the city,
              recognized for our artistic excellence, innovation, and outstanding customer
              care. We aspire to create a community where beauty, confidence, and
              self-love flourish.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-serif font-bold sm:text-4xl">
            Why Choose Glamour
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            What sets us apart from the rest
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="card-base p-8 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
                >
                  <Icon className="text-primary-600 dark:text-primary-400" size={30} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Team Stats */}
      <section className="section-container rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4 lg:gap-8"
        >
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Team Members' },
            { number: '5000+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-2 text-3xl font-bold sm:text-4xl"
              >
                {stat.number}
              </motion.p>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
