export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Starters" | "Main Course" | "Biryani" | "Drinks" | "Desserts";
  featured?: boolean;
}

export const DISHES: Dish[] = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Cottage cheese cubes marinated in spices and grilled in a tandoor.",
    price: 280,
    category: "Starters",
    image: "https://picsum.photos/id/1080/600/400",
    featured: true
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    price: 350,
    category: "Biryani",
    image: "https://picsum.photos/id/292/600/400",
    featured: true
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich tomato and butter gravy.",
    price: 380,
    category: "Main Course",
    image: "https://picsum.photos/id/835/600/400",
    featured: true
  },
  {
    id: 4,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with sweet mango pulp.",
    price: 120,
    category: "Drinks",
    image: "https://picsum.photos/id/431/600/400",
    featured: false
  },
  {
    id: 5,
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup.",
    price: 100,
    category: "Desserts",
    image: "https://picsum.photos/id/493/600/400",
    featured: false
  },
  {
    id: 6,
    name: "Mutton Rogan Josh",
    description: "Traditional Kashmiri lamb curry with vibrant spices.",
    price: 450,
    category: "Main Course",
    image: "https://picsum.photos/id/292/600/400",
    featured: false
  },
  {
    id: 7,
    name: "Crispy Corn",
    description: "Sweet corn kernels fried to perfection with spices.",
    price: 220,
    category: "Starters",
    image: "https://picsum.photos/id/30/600/400",
    featured: false
  },
  {
    id: 8,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea.",
    price: 60,
    category: "Drinks",
    image: "https://picsum.photos/id/225/600/400",
    featured: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "The best Biryani I've had in years! The spices were perfectly balanced.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    text: "Loved the ambience and the fast service. Butter chicken is a must-try!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    text: "Great place for family dinner. Highly hygienic and authentic taste.",
    rating: 4
  }
];

export const GALLERY_IMAGES = [
  { src: "https://picsum.photos/id/42/800/600", category: "Ambience" },
  { src: "https://picsum.photos/id/292/800/600", category: "Food" },
  { src: "https://picsum.photos/id/163/800/800", category: "Events" },
  { src: "https://picsum.photos/id/225/800/600", category: "Food" },
  { src: "https://picsum.photos/id/431/800/800", category: "Ambience" },
  { src: "https://picsum.photos/id/30/800/600", category: "Food" },
];