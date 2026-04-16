import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageCircle } from 'lucide-react';

interface StaffCardProps {
  name: string;
  role: string;
  experience: number;
  image: string;
  specialties: string[];
  social?: {
    instagram?: string;
    facebook?: string;
  };
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  role,
  experience,
  image,
  specialties,
  social,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-base overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-800">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
          {role}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {experience} Years Experience
        </p>

        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Specialties:
          </p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, i) => (
              <span
                key={i}
                className="text-xs bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {social?.instagram && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Camera size={20} />
            </motion.a>
          )}
          {social?.facebook && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <MessageCircle size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;
