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
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    specialties: ['Bridal Makeup', 'Party Makeup', 'HD Makeup'],
    social: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '2',
    name: 'Aisha Patel',
    role: 'Senior Hair Stylist',
    experience: 6,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1512453491856-5ffbfe4a5f21?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    specialties: ['Men\'s Grooming', 'Hair Color', 'Styling'],
    social: {
      facebook: 'https://facebook.com',
    },
  },
];
