import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Tv, Coffee, Bath, Car, Users, Bed, Square } from 'lucide-react';
import hotelRoom from '@/assets/hotel-room.jpg';

const Rooms = () => {
  const amenities = {
    wifi: { icon: Wifi, label: "Free WiFi" },
    tv: { icon: Tv, label: "Flat Screen TV" },
    coffee: { icon: Coffee, label: "Coffee/Tea" },
    bath: { icon: Bath, label: "Private Bath" },
    parking: { icon: Car, label: "Free Parking" },
  };

  const rooms = [
    {
      id: 1,
      name: "Comfort Single Room",
      price: "€89",
      size: "18 m²",
      guests: 1,
      beds: "1 Single Bed",
      description: "Cozy single room perfect for business travelers or solo adventurers. Features modern amenities in a traditional setting.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: true
    },
    {
      id: 2,
      name: "Standard Double Room",
      price: "€129",
      size: "22 m²",
      guests: 2,
      beds: "1 Double Bed",
      description: "Comfortable double room with elegant furnishings and all modern conveniences for a relaxing stay.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: true
    },
    {
      id: 3,
      name: "Deluxe Double Room",
      price: "€159",
      size: "28 m²",
      guests: 2,
      beds: "1 King Bed",
      description: "Spacious deluxe room featuring premium amenities, a seating area, and beautiful views of the surrounding area.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: true
    },
    {
      id: 4,
      name: "Twin Room",
      price: "€139",
      size: "24 m²",
      guests: 2,
      beds: "2 Single Beds",
      description: "Perfect for friends or colleagues traveling together. Two comfortable single beds with shared amenities.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: false
    },
    {
      id: 5,
      name: "Family Suite",
      price: "€219",
      size: "45 m²",
      guests: 4,
      beds: "1 Double + 2 Single",
      description: "Spacious family suite with separate bedroom, living area, and additional sleeping space for children.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: true
    },
    {
      id: 6,
      name: "Superior Suite",
      price: "€289",
      size: "52 m²",
      guests: 3,
      beds: "1 King + Sofa Bed",
      description: "Our most luxurious accommodation featuring a king bed, living area, premium amenities, and stunning views.",
      amenities: ["wifi", "tv", "coffee", "bath", "parking"],
      image: hotelRoom,
      available: true
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">Our Rooms</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from our selection of comfortable and elegantly appointed rooms, 
            each designed to provide you with a memorable stay experience.
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden shadow-card border-0 hover:shadow-elegant transition-smooth">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Room Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  {!room.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        Fully Booked
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold">
                      {room.price}/night
                    </div>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6 flex flex-col">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-display text-2xl text-primary mb-2">
                      {room.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{room.guests} guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{room.beds}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenityKey) => {
                          const amenity = amenities[amenityKey as keyof typeof amenities];
                          return (
                            <div key={amenityKey} className="flex items-center gap-2 text-sm">
                              <amenity.icon className="w-4 h-4 text-gold" />
                              <span>{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Booking Button */}
                    <Button 
                      variant={room.available ? "booking" : "secondary"} 
                      className="w-full"
                      disabled={!room.available}
                    >
                      {room.available ? "Book This Room" : "Not Available"}
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Booking Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">
                Ready to Book Your Stay?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Contact us directly for the best rates and special offers. Our friendly staff 
                will help you find the perfect room for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="booking" size="lg">
                  Call +49 123 456 789
                </Button>
                <Button variant="outline" size="lg">
                  Email Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rooms;