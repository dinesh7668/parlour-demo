import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Bridal Makeup', path: '/services' },
        { name: 'Party Makeup', path: '/services' },
        { name: 'Hair Styling', path: '/services' },
        { name: 'Skincare', path: '/services' },
      ],
    },
  ];

  const contactInfo = [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@glamourparlour.com', href: 'mailto:info@glamourparlour.com' },
    { icon: MapPin, text: '123 Beauty Street, Fashion City', href: '#' },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'Facebook' },
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-bold mb-4">Glamour</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your destination for professional beauty and makeup services with a touch of luxury.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-primary-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-primary-400">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.text}
                    href={info.href}
                    className="flex items-start gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    <Icon size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent my-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Glamour Makeup Parlour. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
