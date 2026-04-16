export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number; // 1-5
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'The team made me feel beautiful and confident on my wedding day. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emma Davis',
    role: 'Event Attendee',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Professional service, amazing makeup, and wonderful customer care. Will definitely return!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michelle Brown',
    role: 'Corporate Client',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Perfect for my corporate event. The styling lasted all day and looked flawless in photos.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jessica Wilson',
    role: 'Party Makeup Client',
    image: 'https://images.unsplash.com/photo-1512453491856-5ffbfe4a5f21?w=150&h=150&fit=crop',
    text: 'Great attention to detail. The makeup was exactly what I wanted. Thank you!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Rachel Taylor',
    role: 'Groom\'s Mother',
    image: 'https://images.unsplash.com/photo-1520880457614-2c6260a0646e?w=150&h=150&fit=crop',
    text: 'Fantastic experience! The team was professional and made the wedding day special.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    role: 'Fashion Show Participant',
    image: 'https://images.unsplash.com/photo-1499952127939-9f40511600c7?w=150&h=150&fit=crop',
    text: 'The makeup artistry is incredible. Highly skilled team!',
    rating: 5,
  },
];
