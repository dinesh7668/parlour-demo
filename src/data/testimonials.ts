import reviewerImage1 from '../assets/reviewers/reviewer_1.png';
import reviewerImage2 from '../assets/reviewers/reviewer_2.png';
import reviewerImage3 from '../assets/reviewers/reviewer_3.png';
import reviewerImage4 from '../assets/reviewers/reviewer_4.png';
import reviewerImage5 from '../assets/reviewers/reviewer_5.png';
import reviewerImage6 from '../assets/reviewers/reviewer_6.png';

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
    image: reviewerImage1,
    text: 'The team made me feel beautiful and confident on my wedding day. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Lama Davis',
    role: 'Event Attendee',
    image: reviewerImage2,
    text: 'Professional service, amazing makeup, and wonderful customer care. Will definitely return!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michelle Brown',
    role: 'Corporate Client',
    image: reviewerImage3,
    text: 'Perfect for my corporate event. The styling lasted all day and looked flawless in photos.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jessica Wilson',
    role: 'Party Makeup Client',
    image: reviewerImage4,
    text: 'Great attention to detail. The makeup was exactly what I wanted. Thank you!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Rachel Taylor',
    role: 'Groom\'s Mother',
    image: reviewerImage5,
    text: 'Fantastic experience! The team was professional and made the wedding day special.',
    rating: 5,
  },
  {
    id: '6',
    name: 'john Anderson',
    role: 'Fashion Show Participant',
    image: reviewerImage6,
    text: 'The makeup artistry is incredible. Highly skilled team!',
    rating: 5,
  },
];
