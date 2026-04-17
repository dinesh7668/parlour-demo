import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/formatters';

interface ServiceCardProps {
  id: string;
  icon: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  name,
  description,
  price,
  duration,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="card-base p-6 cursor-pointer group"
    >
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-2xl font-bold gradient-text">{formatCurrency(price)}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{duration} min</span>
      </div>
      <button className="w-full bg-primary-400 text-white py-2 rounded-lg hover:bg-primary-500 transition-colors font-semibold text-sm">
        Learn More
      </button>
    </motion.div>
  );
};

export default ServiceCard;
