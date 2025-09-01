import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-hotel.jpg';
import hotelRoom from '@/assets/hotel-room.jpg';
import restaurantDining from '@/assets/restaurant-dining.jpg';

const Gallery = () => {
  const galleryCategories = [
    { name: "All", filter: "all", count: 9 },
    { name: "Hotel", filter: "hotel", count: 4 },
    { name: "Restaurant", filter: "restaurant", count: 3 },
    { name: "Events", filter: "events", count: 2 },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Hotel Exterior",
      category: "hotel",
      image: heroImage,
      description: "Beautiful traditional architecture with modern comforts"
    },
    {
      id: 2,
      title: "Comfort Room",
      category: "hotel",
      image: hotelRoom,
      description: "Cozy and elegant guest rooms with modern amenities"
    },
    {
      id: 3,
      title: "Restaurant Dining",
      category: "restaurant",
      image: restaurantDining,
      description: "Warm and inviting dining atmosphere"
    },
    {
      id: 4,
      title: "Deluxe Suite",
      category: "hotel",
      image: hotelRoom,
      description: "Spacious suites for a luxurious stay"
    },
    {
      id: 5,
      title: "Private Dining",
      category: "restaurant",
      image: restaurantDining,
      description: "Intimate dining spaces for special occasions"
    },
    {
      id: 6,
      title: "Wedding Setup",
      category: "events",
      image: restaurantDining,
      description: "Elegant wedding celebrations in our event space"
    },
    {
      id: 7,
      title: "Family Room",
      category: "hotel",
      image: hotelRoom,
      description: "Perfect accommodations for families"
    },
    {
      id: 8,
      title: "Bar Area",
      category: "restaurant",
      image: restaurantDining,
      description: "Cozy bar with extensive beverage selection"
    },
    {
      id: 9,
      title: "Corporate Event",
      category: "events",
      image: restaurantDining,
      description: "Professional event spaces for business meetings"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take a visual journey through our hotel, restaurant, and event spaces. 
            Experience the charm and elegance that awaits you at Gasthof Ritter St. Georg.
          </p>
        </div>
      </div>

      {/* Filter Badges */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {galleryCategories.map((category) => (
            <Badge 
              key={category.filter} 
              variant="outline" 
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden shadow-card border-0 hover:shadow-elegant transition-smooth cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="capitalize">
                    {item.category}
                  </Badge>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Info Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold text-primary">
              More Than Just Photos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our gallery showcases the authentic atmosphere and attention to detail that makes 
              Gasthof Ritter St. Georg a special place. From our comfortable guest rooms to our 
              warm restaurant ambiance, every space is designed with your comfort in mind.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Traditional Architecture</h4>
                  <p className="text-muted-foreground">Historic charm preserved with modern updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Elegant Interiors</h4>
                  <p className="text-muted-foreground">Carefully designed spaces for comfort and style</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Versatile Spaces</h4>
                  <p className="text-muted-foreground">Perfect for business, leisure, and special events</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-elegant border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-primary-foreground">📸</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We'd love to see your photos from your stay! Tag us on social media 
                and become part of our guest gallery.
              </p>
              <div className="space-y-3 text-sm">
                <p className="text-primary font-medium">#GasthofRitterStGeorg</p>
                <p className="text-muted-foreground">@ritterstgeorg on Instagram</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;