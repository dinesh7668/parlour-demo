import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  text,
  rating,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card-base p-6 h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }
          />
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
        "{text}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
