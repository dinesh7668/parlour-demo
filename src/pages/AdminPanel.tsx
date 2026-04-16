import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Download, Eye, EyeOff, Lock } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';
import { formatDate, formatTime } from '../utils/formatters';

const AdminPanel: React.FC = () => {
  const { bookings, deleteBooking, updateBooking } = useBooking();
  const [filterStatus, setFilterStatus] = useState<'all' | 'confirmed' | 'completed' | 'cancelled'>('all');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple demo password
  const DEMO_PASSWORD = 'admin123';

  const handleAuthenticate = () => {
    if (password === DEMO_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password. Use: admin123');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-base p-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6">
            <Lock className="text-primary-600 dark:text-primary-400" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center mb-2">Admin Panel</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Enter password to access
          </p>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAuthenticate()}
                placeholder="Enter admin password"
                className="form-input pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Demo password: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">admin123</code>
            </p>
            <button
              onClick={handleAuthenticate}
              className="w-full py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors font-semibold"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const filteredBookings =
    filterStatus === 'all'
      ? bookings
      : bookings.filter((booking) => booking.status === filterStatus);

  const handleExport = () => {
    const dataStr = JSON.stringify(bookings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bookings_${new Date().toISOString()}.json`;
    link.click();
  };

  return (
    <div className="pt-20 pb-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-serif font-bold gradient-text mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage all customer bookings
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-3 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors font-semibold"
          >
            <Download size={20} />
            Export
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Total Bookings', value: bookings.length, color: 'blue' },
            {
              label: 'Confirmed',
              value: bookings.filter((b) => b.status === 'confirmed').length,
              color: 'green',
            },
            {
              label: 'Completed',
              value: bookings.filter((b) => b.status === 'completed').length,
              color: 'purple',
            },
            {
              label: 'Cancelled',
              value: bookings.filter((b) => b.status === 'cancelled').length,
              color: 'red',
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-base p-6"
            >
              <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['all', 'confirmed', 'completed', 'cancelled'].map((status) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilterStatus(status as typeof filterStatus)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                filterStatus === status
                  ? 'bg-primary-400 text-white shadow-glow'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {status}
            </motion.button>
          ))}
        </div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card-base overflow-hidden"
        >
          {filteredBookings.length === 0 ? (
            <div className="p-8 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg font-semibold mb-2">No bookings found</p>
              <p>There are currently no {filterStatus !== 'all' ? filterStatus : ''} bookings</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Phone</th>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <motion.tr
                      key={booking.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-6 py-4">{booking.name}</td>
                      <td className="px-6 py-4">{booking.phone}</td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4">{formatDate(new Date(booking.date))}</td>
                      <td className="px-6 py-4">{formatTime(booking.time)}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : booking.status === 'completed'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
        >
          <p className="text-blue-800 dark:text-blue-300 text-sm">
            💡 <strong>Demo Info:</strong> All bookings are stored in browser localStorage.
            They will persist across page refreshes but will be cleared if you clear your
            browser cache.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
