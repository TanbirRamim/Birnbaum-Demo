import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Car, Wifi, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're here to help make your stay perfect. Get in touch with us for reservations, 
            inquiries, or any assistance you may need.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Hauptstraße 123<br />
                      12345 Musterstadt<br />
                      Bavaria, Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">+49 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">info@ritter-stgeorg.de</p>
                    <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Reception Hours</h3>
                    <p className="text-muted-foreground">24/7 Available</p>
                    <p className="text-sm text-muted-foreground">Restaurant: 12:00 - 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities & Services */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary">Services & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-gold" />
                    <span className="text-sm">Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-gold" />
                    <span className="text-sm">Free Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-5 h-5 text-gold" />
                    <span className="text-sm">Central Location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gold" />
                    <span className="text-sm">24/7 Reception</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your inquiry about?" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in Date (Optional)</Label>
                    <Input id="checkin" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out Date (Optional)</Label>
                    <Input id="checkout" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please share any additional details or special requests..." 
                    rows={5}
                  />
                </div>

                <Button variant="booking" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16">
          <Card className="shadow-card border-0">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-muted-foreground">
                    Hauptstraße 123, 12345 Musterstadt, Bavaria, Germany
                  </p>
                  <Button variant="outline" className="mt-4">
                    Open in Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-primary mb-8">
            Ready to Book Your Stay?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="booking" size="lg">
              Book Now - Best Rates Guaranteed
            </Button>
            <Button variant="elegant" size="lg">
              Call +49 123 456 789
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;