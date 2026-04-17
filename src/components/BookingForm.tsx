import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { validateBookingForm } from '../utils/validation';
import { getTimeSlots } from '../utils/formatters';
import { useBooking } from '../hooks/useBooking';
import { services } from '../data/services';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  onSuccess?: () => void;
  showAdmin?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const { addBooking } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: null as Date | null,
    time: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = getTimeSlots();
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, date }));
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    try {
      addBooking({
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        date: formData.date!.toISOString().split('T')[0],
        time: formData.time,
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: null,
        time: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onSuccess?.();
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-Bold text-green-800 dark:text-green-300 mb-2">
          Booking Confirmed!
        </h3>
        <p className="text-green-700 dark:text-green-400 mb-4">
          Thank you for booking with us. We'll send you a confirmation soon.
        </p>
        <p className="text-sm text-green-600 dark:text-green-500">
          Redirecting in a moment...
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Your full name"
        />
        {errors.name && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.name}
          </div>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-input ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.phone}
          </div>
        )}
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Select Service *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`form-input ${errors.service ? 'border-red-500 focus:ring-red-500' : ''}`}
        >
          <option value="">Choose a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name} - ${service.price}
            </option>
          ))}
        </select>
        {errors.service && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.service}
          </div>
        )}
      </div>

      {/* Date Picker */}
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Preferred Date *
        </label>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat="MMM dd, yyyy"
          placeholderText="Select a date"
          className={`form-input ${errors.date ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.date && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.date}
          </div>
        )}
      </div>

      {/* Time Selection */}
      <div>
        <label htmlFor="time" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Preferred Time *
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={`form-input ${errors.time ? 'border-red-500 focus:ring-red-500' : ''}`}
        >
          <option value="">Choose a time...</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.time}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Processing...' : 'Confirm Booking'}
      </motion.button>
    </form>
  );
};

export default BookingForm;
