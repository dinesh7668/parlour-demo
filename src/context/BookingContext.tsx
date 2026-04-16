import React, { createContext, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface Booking {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  notes?: string;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => Booking;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  cancelBooking: (id: string) => void;
  getBooking: (id: string) => Booking | undefined;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useLocalStorage<Booking[]>('makeup-bookings', []);

  const addBooking = useCallback(
    (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
      const newBooking: Booking = {
        ...booking,
        id: `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      };
      setBookings((prev) => [...prev, newBooking]);
      return newBooking;
    },
    [setBookings]
  );

  const updateBooking = useCallback(
    (id: string, updates: Partial<Booking>) => {
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, ...updates } : booking
        )
      );
    },
    [setBookings]
  );

  const deleteBooking = useCallback(
    (id: string) => {
      setBookings((prev) => prev.filter((booking) => booking.id !== id));
    },
    [setBookings]
  );

  const cancelBooking = useCallback(
    (id: string) => {
      updateBooking(id, { status: 'cancelled' });
    },
    [updateBooking]
  );

  const getBooking = useCallback(
    (id: string) => {
      return bookings.find((booking) => booking.id === id);
    },
    [bookings]
  );

  const value: BookingContextType = {
    bookings,
    addBooking,
    updateBooking,
    deleteBooking,
    cancelBooking,
    getBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
