import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { validateContactForm } from '../utils/validation';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onSuccess?.();
      }, 3000);
    } catch (error) {
      console.error('Contact form error:', error);
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
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700 dark:text-green-400">
          Thank you for contacting us. We'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
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

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.email}
          </div>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-input"
          placeholder="How can we help?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`form-input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Tell us more..."
        />
        {errors.message && (
          <div className="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={16} /> {errors.message}
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
        {isLoading ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
};

export default ContactForm;
