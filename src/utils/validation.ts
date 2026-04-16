// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const re = /^[0-9\-\+\(\)\s]{7,}$/;
  return re.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateBookingForm = (data: any) => {
  const errors: Record<string, string> = {};

  if (!validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (!data.service) {
    errors.service = 'Please select a service';
  }
  if (!data.date) {
    errors.date = 'Please select a date';
  }
  if (!data.time) {
    errors.time = 'Please select a time';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

export const validateContactForm = (data: any) => {
  const errors: Record<string, string> = {};

  if (!validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};
