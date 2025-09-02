// Booking system configuration
export const bookingConfig = {
  // RoomRaccoon Hotel Booking Configuration
  roomRaccoon: {
    enabled: true,
    // Replace with your actual RoomRaccoon property ID
    propertyId: process.env.VITE_ROOMRACCOON_PROPERTY_ID || 'your-property-id',
    // RoomRaccoon booking widget URL
    bookingUrl: process.env.VITE_ROOMRACCOON_BOOKING_URL || 'https://booking.roomraccoon.com/your-property-id',
    // API endpoint for availability checks
    apiUrl: process.env.VITE_ROOMRACCOON_API_URL || 'https://api.roomraccoon.com/v1',
    // API key for RoomRaccoon (if needed for custom integrations)
    apiKey: process.env.VITE_ROOMRACCOON_API_KEY || '',
  },
  
  // allO/POS Table Reservation Configuration
  alloPos: {
    enabled: true,
    // Replace with your actual allO/POS restaurant ID
    restaurantId: process.env.VITE_ALLO_POS_RESTAURANT_ID || 'your-restaurant-id',
    // allO/POS booking widget URL
    bookingUrl: process.env.VITE_ALLO_POS_BOOKING_URL || 'https://booking.allo-pos.com/your-restaurant-id',
    // API endpoint for table availability
    apiUrl: process.env.VITE_ALLO_POS_API_URL || 'https://api.allo-pos.com/v1',
    // API key for allO/POS (if needed for custom integrations)
    apiKey: process.env.VITE_ALLO_POS_API_KEY || '',
  },
  
  // General booking settings
  settings: {
    // Default check-in/check-out times
    defaultCheckIn: '15:00',
    defaultCheckOut: '11:00',
    // Minimum advance booking time (in hours)
    minAdvanceBooking: 2,
    // Maximum advance booking time (in days)
    maxAdvanceBooking: 365,
    // Default party size for restaurant
    defaultPartySize: 2,
    // Maximum party size
    maxPartySize: 20,
  }
};

// Room types configuration
export const roomTypes = [
  {
    id: 'comfort-single',
    name: 'Comfort Single',
    description: 'Cozy single room with city view',
    basePrice: 89,
    maxGuests: 1,
    features: ['Free WiFi', 'En-suite bathroom', 'City view', 'Air conditioning'],
    image: '/images/rooms/comfort-single.jpg'
  },
  {
    id: 'double-deluxe',
    name: 'Double Deluxe',
    description: 'Spacious double room with premium amenities',
    basePrice: 129,
    maxGuests: 2,
    features: ['King bed', 'Balcony', 'Premium amenities', 'City view', 'Air conditioning'],
    image: '/images/rooms/double-deluxe.jpg'
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Large family suite with separate living area',
    basePrice: 189,
    maxGuests: 4,
    features: ['2 bedrooms', 'Living area', 'Garden view', 'Kitchenette', 'Air conditioning'],
    image: '/images/rooms/family-suite.jpg'
  }
];

// Restaurant configuration
export const restaurantConfig = {
  name: 'Gasthof Ritter St. Georg Restaurant',
  capacity: 80,
  operatingHours: {
    monday: { open: '12:00', close: '22:00' },
    tuesday: { open: '12:00', close: '22:00' },
    wednesday: { open: '12:00', close: '22:00' },
    thursday: { open: '12:00', close: '22:00' },
    friday: { open: '12:00', close: '23:00' },
    saturday: { open: '12:00', close: '23:00' },
    sunday: { open: '12:00', close: '22:00' }
  },
  tableSizes: [2, 4, 6, 8, 10],
  specialOccasions: ['Birthday', 'Anniversary', 'Business Meeting', 'Family Gathering', 'Romantic Dinner']
};
