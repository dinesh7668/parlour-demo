import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonCard: React.FC<{ count?: number }> = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card-base p-6 space-y-4">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-2/3"
          />
        </div>
      ))}
    </>
  );
};

export const SkeletonImage: React.FC<{ count?: number }> = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"
        />
      ))}
    </>
  );
};

export default SkeletonCard;
