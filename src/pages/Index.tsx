import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Users, Wifi, Car, Utensils, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-hotel.jpg';
import hotelRoom from '@/assets/hotel-room.jpg';
import restaurantDining from '@/assets/restaurant-dining.jpg';

const Index = () => {
  const features = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Car, title: "Free Parking", description: "Secure parking for all guests" },
    { icon: Utensils, title: "Restaurant", description: "Traditional German cuisine" },
    { icon: Coffee, title: "Bar & Lounge", description: "Relax with drinks & snacks" },
  ];

  const rooms = [
    {
      name: "Comfort Single",
      price: "€89",
      features: ["Free WiFi", "En-suite bathroom", "City view"],
      image: hotelRoom
    },
    {
      name: "Double Deluxe",
      price: "€129",
      features: ["King bed", "Balcony", "Premium amenities"],
      image: hotelRoom
    },
    {
      name: "Family Suite",
      price: "€189",
      features: ["2 bedrooms", "Living area", "Garden view"],
      image: hotelRoom
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Gasthof Ritter St. Georg
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-light">
            Traditional German Hospitality
          </p>
          <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Experience authentic comfort in our charming hotel and restaurant, 
            where tradition meets modern elegance in the heart of Germany.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="hero" asChild>
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-primary-dark" asChild>
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 mt-12 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold" />
              <span>4.8/5 Guest Rating</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Central Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gold" />
              <span>Family Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              Experience Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy our carefully curated amenities designed to make your stay memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card border-0 bg-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              Our Comfortable Rooms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each room combines traditional charm with modern comfort for an unforgettable stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden shadow-card border-0 hover:shadow-elegant transition-smooth">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gold">{room.price}</span>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="elegant" className="w-full" asChild>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="booking" size="lg" asChild>
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-primary mb-6">
                Authentic German Cuisine
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Savor traditional German dishes prepared with locally sourced ingredients 
                in our warm and inviting restaurant atmosphere.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Traditional Bavarian specialties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Fresh, locally sourced ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Extensive wine and beer selection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Warm, family-friendly atmosphere</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="booking" size="lg" asChild>
                  <Link to="/restaurant">View Menu</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/booking">Reserve Table</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={restaurantDining} 
                alt="Restaurant dining room"
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Open Daily</p>
                  <p className="text-sm opacity-90">12:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
