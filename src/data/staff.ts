import staffImage1 from '../assets/staff-images/staff_1.png';
import staffImage2 from '../assets/staff-images/staff_2.png';
import staffImage3 from '../assets/staff-images/staff_3.png';
import staffImage4 from '../assets/staff-images/staff_4.png';
import staffImage5 from '../assets/staff-images/staff_5.png';

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  experience: number; // years
  image: string;
  specialties: string[];
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Lead Makeup Artist',
    experience: 8,
    image: staffImage1,
    specialties: ['Bridal Makeup', 'Party Makeup', 'HD Makeup'],
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '2',
    name: 'Ashu Patel',
    role: 'Senior Hair Stylist',
    experience: 6,
    image: staffImage2,
    specialties: ['Hair Styling', 'Hair Color', 'Bridal Hair'],
    social: {
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    role: 'Skincare Specialist',
    experience: 5,
    image: staffImage3,
    specialties: ['Facial Treatment', 'Skincare Consultation', 'Anti-Aging'],
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '4',
    name: 'Emily Thompson',
    role: 'Makeup Artist',
    experience: 4,
    image: staffImage4,
    specialties: ['Party Makeup', 'Makeup Trial', 'Makeup Application'],
    social: {
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '5',
    name: 'David Chen',
    role: 'Hair & Styling Expert',
    experience: 7,
    image: staffImage5,
    specialties: ['Men\'s Grooming', 'Hair Color', 'Styling'],
    social: {
      facebook: 'https://facebook.com',
    },
  },
];
