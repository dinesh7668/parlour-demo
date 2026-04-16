// Utility functions for formatting and data manipulation

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const h = String(hour).padStart(2, '0');
      const m = String(min).padStart(2, '0');
      slots.push(`${h}:${m}`);
    }
  }
  return slots;
};

export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime()) && date > new Date();
};

export const generateBookingId = (): string => {
  return `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
