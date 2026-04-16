export interface GalleryImage {
  id: string;
  url: string;
  category: 'bridal' | 'party' | 'skincare' | 'hair' | 'before-after';
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.comimg/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
    category: 'bridal',
    title: 'Elegant Bridal Look',
    description: 'Classic bridal makeup with gold accents and soft contours',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1552108565-b0fbb1d7a4a2?w=600&h=600&fit=crop',
    category: 'party',
    title: 'Glamorous Party Makeup',
    description: 'Bold evening makeup for a special celebration',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1607746882042-f3564b3628888?w=600&h=600&fit=crop',
    category: 'bridal',
    title: 'Radiant Bride',
    description: 'Natural yet stunning bridal makeup for a garden wedding',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1555746733956-db3269c7dee5?w=600&h=600&fit=crop',
    category: 'skincare',
    title: 'Glowing Complexion',
    description: 'After facial treatment - healthy and glowing skin',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1631214174585-fe5695592868?w=600&h=600&fit=crop',
    category: 'makeup',
    title: 'Artistic Makeup',
    description: 'Creative and artistic makeup for fashion events',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1521879411892-e112862cb942?w=600&h=600&fit=crop',
    category: 'hair',
    title: 'Elegant Hair Styling',
    description: 'Sophisticated updo for a formal event',
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1610991897912-11d0d5b6b57b?w=600&h=600&fit=crop',
    category: 'party',
    title: 'HD Party Makeup',
    description: 'High-definition makeup perfect for photography',
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
    category: 'before-after',
    title: 'Transformation - Before & After',
    description: 'Amazing transformation with professional makeup',
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1552108565-b0fbb1d7a4a2?w=600&h=600&fit=crop',
    category: 'bridal',
    title: 'Wedding Day Beauty',
    description: 'Bride looking stunning for her big day',
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
    category: 'hair',
    title: 'Hair Color & Styling',
    description: 'Beautiful hair transformation with color treatment',
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1607746882042-f3564b3628888?w=600&h=600&fit=crop',
    category: 'makeup',
    title: 'Professional Makeup Look',
    description: 'Corporate makeup for professional events',
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1555746733956-db3269c7dee5?w=600&h=600&fit=crop',
    category: 'skincare',
    title: 'Skincare Results',
    description: 'Visible improvements after professional skincare treatment',
  },
];
