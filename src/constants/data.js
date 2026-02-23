export const PLACEHOLDER_IMAGES = {
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  yoga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
  boxing: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80',
  running: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  pilates: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  cardio: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
  trainer1: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
  trainer2: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  trainer3: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&q=80',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  gymInterior: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
  mobility: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80',
  strength: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
};

export const WORKOUT_PROGRAMS = [
  {
    id: '1',
    title: 'Yoga',
    duration: '21 min',
    calories: '120 kcal',
    image: PLACEHOLDER_IMAGES.yoga,
    price: '$210',
    sessions: '12 ses',
  },
  {
    id: '2',
    title: 'Boxing',
    duration: '45 min',
    calories: '340 kcal',
    image: PLACEHOLDER_IMAGES.boxing,
    price: '$180',
    sessions: '10 ses',
  },
  {
    id: '3',
    title: 'Pilates',
    duration: '30 min',
    calories: '200 kcal',
    image: PLACEHOLDER_IMAGES.pilates,
    price: '$150',
    sessions: '8 ses',
  },
  {
    id: '4',
    title: 'Cardio',
    duration: '35 min',
    calories: '280 kcal',
    image: PLACEHOLDER_IMAGES.cardio,
    price: '$160',
    sessions: '15 ses',
  },
];

export const CATEGORIES = ['All Type', 'Pilates', 'Cardio', 'Boxing', 'Yoga'];

export const TRAINERS = [
  {
    id: '1',
    name: 'Joly Rodger',
    specialties: ['Strength', 'Gym', 'Cardio'],
    bio: 'Joly believes that by unlocking the body and the mind through a regular strength practice everything else in life becomes...',
    image: PLACEHOLDER_IMAGES.trainer1,
    rating: 4.8,
    courses: 12,
  },
  {
    id: '2',
    name: 'Sarah Miles',
    specialties: ['Yoga', 'Pilates', 'Flexibility'],
    bio: 'Sarah is a certified yoga instructor with 10+ years of experience helping students find balance and strength...',
    image: PLACEHOLDER_IMAGES.trainer2,
    rating: 4.9,
    courses: 15,
  },
  {
    id: '3',
    name: 'Mike Chen',
    specialties: ['Boxing', 'HIIT', 'Cardio'],
    bio: 'Mike brings high energy to every session, combining boxing fundamentals with intense cardio workouts...',
    image: PLACEHOLDER_IMAGES.trainer3,
    rating: 4.7,
    courses: 8,
  },
];

export const GYM_DATA = {
  name: 'Disana Fitness',
  rating: 4.5,
  reviews: 124,
  address: '60 Chelsea Piers, New York 10011, United States',
  description: 'Big complex with an indoor pool & track, sports courts, waterfront sundeck & cafe, by membership/open party future...',
  amenities: [
    { icon: 'water', name: 'Showers' },
    { icon: 'lock-closed', name: 'Lockers' },
    { icon: 'fitness', name: 'Swimming pool' },
    { icon: 'bicycle', name: 'Free Wi-Fi' },
  ],
  images: [
    PLACEHOLDER_IMAGES.gym,
    PLACEHOLDER_IMAGES.gymInterior,
  ],
};

export const SCHEDULE_DATA = [
  {
    id: '1',
    title: 'High 45',
    time: '5:00 pm',
    duration: '45 min',
    calories: '250 kcal',
    type: 'Cardio',
  },
  {
    id: '2',
    title: 'Mobility',
    time: '6:30 pm',
    duration: '30 min',
    calories: '180 kcal',
    type: 'Flexibility',
  },
  {
    id: '3',
    title: 'Power Lift',
    time: '8:00 pm',
    duration: '60 min',
    calories: '400 kcal',
    type: 'Strength',
  },
];
