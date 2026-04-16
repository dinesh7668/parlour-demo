export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: 'makeup' | 'hair' | 'skincare' | 'bridal';
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Bridal Makeup',
    description: 'Complete bridal makeup package including trial and touch-ups',
    price: 150,
    duration: 90,
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1607746882042-f3564b3628888?w=500&h=500&fit=crop',
    icon: '💄',
  },
  {
    id: '2',
    name: 'Party Makeup',
    description: 'Glamorous evening makeup for special occasions',
    price: 80,
    duration: 60,
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1552108565-b0fbb1d7a4a2?w=500&h=500&fit=crop',
    icon: '✨',
  },
  {
    id: '3',
    name: 'Hair Styling',
    description: 'Professional hair styling for any occasion',
    price: 65,
    duration: 60,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1521879411892-e112862cb942?w=500&h=500&fit=crop',
    icon: '💇‍♀️',
  },
  {
    id: '4',
    name: 'Bridal Hair & Makeup',
    description: 'Complete bridal package with hair and makeup',
    price: 200,
    duration: 120,
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
    icon: '👑',
  },
  {
    id: '5',
    name: 'Facial Treatment',
    description: 'Rejuvenating facial with premium products',
    price: 70,
    duration: 60,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1555746733956-db3269c7dee5?w=500&h=500&fit=crop',
    icon: '🧴',
  },
  {
    id: '6',
    name: 'Makeup Trial',
    description: 'Pre-event makeup trial and consultation',
    price: 50,
    duration: 45,
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1631214174585-fe5695592868?w=500&h=500&fit=crop',
    icon: '🎨',
  },
  {
    id: '7',
    name: 'HD Makeup',
    description: 'High-definition makeup for photography and events',
    price: 95,
    duration: 75,
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1610991897912-11d0d5b6b57b?w=500&h=500&fit=crop',
    icon: '📸',
  },
  {
    id: '8',
    name: 'Hair Color & Style',
    description: 'Complete hair coloring and styling package',
    price: 120,
    duration: 120,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    icon: '🎨',
  },
];
