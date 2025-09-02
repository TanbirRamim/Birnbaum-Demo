import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Star, Wifi, Car, Utensils } from 'lucide-react';
import RoomRaccoonBooking from '@/components/booking/RoomRaccoonBooking';
import AlloPosReservation from '@/components/booking/AlloPosReservation';

const Booking = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const handleBookingComplete = (bookingData: any) => {
    console.log('Booking completed:', bookingData);
    // You can add additional logic here, such as:
    // - Show success message
    // - Send confirmation email
    // - Update analytics
    // - Redirect to confirmation page
  };

  const hotelFeatures = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Car, title: "Free Parking", description: "Secure parking for all guests" },
    { icon: Utensils, title: "Restaurant", description: "Traditional German cuisine" },
    { icon: Star, title: "4.8/5 Rating", description: "Excellent guest reviews" },
  ];

  const restaurantFeatures = [
    { icon: Utensils, title: "Authentic Cuisine", description: "Traditional German dishes" },
    { icon: Clock, title: "Open Daily", description: "12:00 - 22:00 (Fri-Sat until 23:00)" },
    { icon: Star, title: "80 Seats", description: "Spacious dining area" },
    { icon: MapPin, title: "Central Location", description: "Easy to find and access" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Book Your Stay & Table
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Experience authentic German hospitality with our seamless booking system. 
            Reserve your room and table in one place.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+49 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ritter-stgeorg.de</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hauptstraße 123, Musterstadt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="hotel" className="text-base">
                🏨 Hotel Booking
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="text-base">
                🍽️ Table Reservation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hotel" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <RoomRaccoonBooking onBookingComplete={handleBookingComplete} />
                </div>

                {/* Hotel Features */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-gold" />
                        Why Choose Our Hotel?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {hotelFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{feature.title}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Policies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Check-in:</span>
                        <span className="font-medium">15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-out:</span>
                        <span className="font-medium">11:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cancellation:</span>
                        <span className="font-medium">Free until 24h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment:</span>
                        <span className="font-medium">Credit card</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="restaurant" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Reservation Form */}
                <div className="lg:col-span-2">
                  <AlloPosReservation onReservationComplete={handleBookingComplete} />
                </div>

                {/* Restaurant Features */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-gold" />
                        Restaurant Highlights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {restaurantFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{feature.title}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Reservation Policies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Advance booking:</span>
                        <span className="font-medium">2 hours minimum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Max party size:</span>
                        <span className="font-medium">20 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cancellation:</span>
                        <span className="font-medium">Free until 2h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dress code:</span>
                        <span className="font-medium">Smart casual</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Popular Dishes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="mr-2 mb-2">Wiener Schnitzel</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Sauerbraten</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Apfelstrudel</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Bratwurst</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Pretzel</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Beer Selection</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold mb-8">
            Trusted by Thousands of Guests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Guest Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
