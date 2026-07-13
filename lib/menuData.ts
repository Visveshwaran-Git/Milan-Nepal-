export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Salads",
    subtitle: "Fresh beginnings",
    items: [
      { name: "Green Salad", description: "Feta, tomato, cucumber, onion, carrot, fresh greens", price: "9.90", isVegetarian: true },
      { name: "Prawn Salad", description: "Juicy prawns on a bed of crisp greens with house dressing", price: "10.90" },
      { name: "Salmon Salad", description: "Salmon fillet, feta, cucumber, olive, onion, tomato, paprika", price: "16.90" },
      { name: "Chicken Tikka", description: "Herb & yoghurt-marinated chicken, tandoori-grilled, peppers & onion", price: "12.90" },
      { name: "Lamb Tikka", description: "Marinated lamb tenderloin, tandoori-grilled, peppers & onion", price: "13.90" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Specials",
    subtitle: "Weekdays 10:30 – 15:00",
    items: [
      { name: "Saag Tofu", description: "Tofu in spinach coconut cream curry", price: "13.50", isVegetarian: true },
      { name: "Veg Kofta", description: "Vegetable balls in onion-tomato cream curry", price: "13.90", isVegetarian: true },
      { name: "Butter Chicken", description: "Tandoori chicken in tomato butter cream sauce", price: "13.90" },
      { name: "Fish Chili", description: "Tilapia, onion, garlic, ginger, paprika, chili soy sauce", price: "13.90", isSpicy: true },
      { name: "Lamb Masala", description: "Lamb, ginger, coriander, onion, tomato, spicy masala", price: "15.90", isSpicy: true },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian Mains",
    subtitle: "Garden of flavors",
    items: [
      { name: "Paneer Tikka Masala", description: "Tandoori-grilled cottage cheese in rich tomato-cream sauce", price: "14.90", isVegetarian: true },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with butter, cream & aromatic spices", price: "13.90", isVegetarian: true },
      { name: "Aloo Gobi", description: "Potato & cauliflower tempered with cumin, turmeric & fresh herbs", price: "13.50", isVegetarian: true },
      { name: "Chana Masala", description: "Chickpeas simmered in a bold onion-tomato masala", price: "13.50", isVegetarian: true, isSpicy: true },
    ],
  },
  {
    id: "sizzlers",
    title: "Sizzlers",
    subtitle: "Served on a sizzling hot plate",
    items: [
      { name: "Chicken Sizzler", description: "Grilled chicken breast with peppers, onion & sizzler sauce on a hot plate", price: "18.90" },
      { name: "Lamb Sizzler", description: "Tender lamb pieces with bell peppers, mushrooms & spiced gravy", price: "19.90" },
      { name: "Paneer Sizzler", description: "Grilled paneer with vegetables, peppers & tangy sizzler sauce", price: "17.90", isVegetarian: true },
      { name: "Prawn Sizzler", description: "Jumbo prawns with garlic butter, peppers & onion on a hot plate", price: "21.90" },
    ],
  },
  {
    id: "chicken",
    title: "Chicken Mains",
    subtitle: "From the tandoor & kitchen",
    items: [
      { name: "Chicken Korma", description: "Tender chicken in mild cashew, coconut & cream sauce", price: "15.90" },
      { name: "Chicken Vindaloo", description: "Fiery Goan-style chicken with potatoes, vinegar & hot spices", price: "15.90", isSpicy: true },
      { name: "Chicken Saag", description: "Chicken pieces in creamy spinach sauce with garlic & ginger", price: "15.90" },
      { name: "Tandoori Chicken", description: "Half chicken marinated overnight, charcoal-grilled in tandoor", price: "16.90" },
    ],
  },
  {
    id: "lamb",
    title: "Lamb Mains",
    subtitle: "Tender & aromatic",
    items: [
      { name: "Lamb Rogan Josh", description: "Slow-braised lamb in rich Kashmiri chili & yoghurt sauce", price: "17.90", isSpicy: true },
      { name: "Lamb Saag", description: "Lamb pieces cooked in fresh spinach with ginger & garlic", price: "17.90" },
      { name: "Lamb Korma", description: "Tender lamb in velvety cashew, almond & cream sauce", price: "17.90" },
      { name: "Nepali Lamb Curry", description: "Traditional Nepali-style lamb with timur pepper & jimbu herbs", price: "18.90", isSpicy: true },
    ],
  },
  {
    id: "fish",
    title: "Fish & Seafood",
    subtitle: "From the waters",
    items: [
      { name: "Fish Tikka Masala", description: "Tandoori-grilled fish in creamy tomato-fenugreek sauce", price: "17.90" },
      { name: "Prawn Masala", description: "King prawns in aromatic onion-tomato masala with curry leaves", price: "19.90" },
      { name: "Fish Curry", description: "Tilapia fillet in mild coconut & turmeric curry", price: "16.90" },
    ],
  },
  {
    id: "thali",
    title: "Thali Sets",
    subtitle: "A complete Nepali experience",
    items: [
      { name: "Vegetarian Thali", description: "Dal, paneer curry, aloo gobi, rice, naan, raita, salad & dessert", price: "19.90", isVegetarian: true },
      { name: "Chicken Thali", description: "Dal, chicken curry, rice, naan, achar, raita, salad & dessert", price: "21.90" },
      { name: "Lamb Thali", description: "Dal, lamb curry, rice, naan, achar, raita, salad & dessert", price: "23.90" },
      { name: "Royal Saptarangi Thali", description: "Premium selection of seven curries, rice, naan, raita, achar & dessert", price: "29.90" },
    ],
  },
  {
    id: "chowmein",
    title: "Chowmein & Noodles",
    subtitle: "Wok-tossed Himalayan style",
    items: [
      { name: "Vegetable Chowmein", description: "Stir-fried noodles with seasonal vegetables & soy-ginger sauce", price: "13.50", isVegetarian: true },
      { name: "Chicken Chowmein", description: "Wok-tossed noodles with chicken, peppers & Nepali spices", price: "14.90" },
      { name: "Lamb Chowmein", description: "Noodles with tender lamb strips, onion & chili-garlic sauce", price: "15.90" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    subtitle: "Fragrant basmati rice",
    items: [
      { name: "Vegetable Biryani", description: "Basmati rice layered with spiced vegetables, saffron & fried onions", price: "14.90", isVegetarian: true },
      { name: "Chicken Biryani", description: "Aromatic basmati with tender chicken, saffron, rose water & whole spices", price: "16.90" },
      { name: "Lamb Biryani", description: "Slow-cooked lamb with fragrant rice, cardamom, cinnamon & crispy onions", price: "18.90" },
    ],
  },
  {
    id: "kids",
    title: "Kids' Menu",
    subtitle: "For our little guests",
    items: [
      { name: "Chicken Nuggets & Fries", description: "Golden crispy nuggets with fries & ketchup", price: "9.90" },
      { name: "Butter Chicken (Mild)", description: "Mild & creamy butter chicken with rice — kid-friendly", price: "10.90" },
      { name: "Cheese Naan & Dal", description: "Cheesy naan bread with mild yellow lentil soup", price: "8.90", isVegetarian: true },
    ],
  },
];
