import React from 'react';
import { motion } from 'framer-motion';
import StaffCard from '../components/StaffCard';
import { staffMembers } from '../data/staff';

const Staff: React.FC = () => {
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
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          Meet the talented professionals behind your beauty transformation
        </motion.p>
      </section>

      {/* Team Grid */}
      <section className="section-container pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {staffMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <StaffCard
                name={member.name}
                role={member.role}
                experience={member.experience}
                image={member.image}
                specialties={member.specialties}
                social={member.social}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Staff;
