import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@glamourparlour.com',
      href: 'mailto:info@glamourparlour.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Beauty Street, Fashion City, CA 90001',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Sun: 10 AM - 8 PM',
      href: '#',
    },
  ];

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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          Get in touch with us for any inquiries or questions
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="section-container mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.label}
                href={info.href}
                variants={itemVariants}
                className="card-base p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors"
                >
                  <Icon className="text-primary-600 dark:text-primary-400" size={28} />
                </motion.div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{info.value}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-container grid grid-cols-1 gap-8 pb-20 lg:grid-cols-2 lg:gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-2xl font-serif font-bold sm:mb-8 sm:text-3xl">Send us a Message</h2>
          <ContactForm />
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-base flex h-full flex-col justify-center p-5 sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-serif font-bold sm:text-3xl">Visit Us</h2>
          <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-primary-300 bg-gradient-to-br from-primary-100 to-primary-200 dark:border-primary-700 dark:from-gray-700 dark:to-gray-800 sm:h-96">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                Google Map Placeholder
              </p>
              <p className="text-sm text-gray-500 mt-2">
                123 Beauty Street, Fashion City, CA
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                <li>Monday - Friday: 10 AM - 8 PM</li>
                <li>Saturday: 10 AM - 9 PM</li>
                <li>Sunday: 12 PM - 8 PM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
