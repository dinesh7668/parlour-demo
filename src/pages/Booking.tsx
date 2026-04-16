import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

const Booking: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-primary-50 to-white pt-16 dark:from-gray-900 dark:to-gray-800 sm:pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mb-4 text-3xl font-serif font-bold gradient-text sm:text-5xl">
              Book Your Appointment
            </h1>
            <p className="mb-8 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Reserve your slot with one of our professional makeup artists, hair
              stylists, or skincare specialists. We look forward to pampering you.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Easy Booking',
                  description: 'Simple and quick appointment scheduling',
                },
                {
                  title: 'Professional Team',
                  description: 'Experienced experts ready to serve you',
                },
                {
                  title: 'Premium Services',
                  description: 'High-quality beauty treatments guaranteed',
                },
                {
                  title: 'Flexible Hours',
                  description: 'Choose from convenient time slots',
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-400 text-sm font-bold text-white">
                    +
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-base p-5 sm:p-8 lg:sticky lg:top-28"
          >
            <BookingForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;
