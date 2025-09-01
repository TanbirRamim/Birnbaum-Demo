import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Music, Heart, Briefcase, PartyPopper } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Oktoberfest Celebration",
      date: "October 15, 2024",
      time: "18:00 - 23:00",
      description: "Join us for an authentic Bavarian Oktoberfest celebration with traditional music, dancing, and hearty German cuisine.",
      capacity: "80 guests",
      price: "€45 per person",
      category: "Cultural",
      icon: Music,
      available: true
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      date: "November 8, 2024",
      time: "19:00 - 22:00",
      description: "Discover exceptional German wines paired with carefully selected local cheeses and delicacies.",
      capacity: "30 guests",
      price: "€35 per person",
      category: "Culinary",
      icon: Users,
      available: true
    },
    {
      id: 3,
      title: "Christmas Market Preview",
      date: "December 1, 2024",
      time: "16:00 - 21:00",
      description: "Experience the magic of Christmas with traditional crafts, mulled wine, and festive atmosphere.",
      capacity: "60 guests",
      price: "€25 per person",
      category: "Seasonal",
      icon: PartyPopper,
      available: false
    }
  ];

  const eventServices = [
    {
      title: "Weddings",
      icon: Heart,
      description: "Create your perfect wedding day in our romantic setting with customized menus and elegant decor.",
      features: ["Bridal suite", "Custom menus", "Floral arrangements", "Photography assistance"],
      capacity: "Up to 80 guests"
    },
    {
      title: "Corporate Events",
      icon: Briefcase,
      description: "Professional meeting spaces with catering services for business conferences and team events.",
      features: ["Meeting rooms", "AV equipment", "Business lunch", "Team building activities"],
      capacity: "10-50 participants"
    },
    {
      title: "Private Parties",
      icon: PartyPopper,
      description: "Celebrate special occasions with personalized service and customized entertainment options.",
      features: ["Private dining", "Custom decorations", "Live music", "Special menus"],
      capacity: "20-80 guests"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-primary mb-6">Events & Celebrations</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From intimate gatherings to grand celebrations, make your special moments unforgettable 
            at Gasthof Ritter St. Georg.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us for these special events throughout the year
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardHeader className="gradient-elegant">
                <div className="flex items-center justify-between mb-4">
                  <event.icon className="w-8 h-8 text-primary" />
                  <Badge variant={event.available ? "default" : "secondary"}>
                    {event.available ? "Available" : "Sold Out"}
                  </Badge>
                </div>
                <CardTitle className="font-display text-xl text-primary mb-2">
                  {event.title}
                </CardTitle>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.capacity}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="text-gold border-gold">
                    {event.category}
                  </Badge>
                  <span className="text-lg font-semibold text-primary">{event.price}</span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p><strong>Time:</strong> {event.time}</p>
                </div>

                <Button 
                  variant={event.available ? "booking" : "secondary"} 
                  className="w-full"
                  disabled={!event.available}
                >
                  {event.available ? "Reserve Now" : "Sold Out"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Services */}
      <div className="gradient-elegant py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-primary mb-4">
              Private Event Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let us help you create the perfect event with our comprehensive planning and catering services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-primary">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-gold rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center p-4 bg-primary/5 rounded-lg mb-6">
                    <p className="font-semibold text-primary">{service.capacity}</p>
                  </div>

                  <Button variant="elegant" className="w-full">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact for Events */}
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto shadow-elegant border-0">
          <CardContent className="p-8 text-center">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Plan Your Perfect Event
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our experienced event planning team is ready to help you create a memorable experience. 
              Contact us to discuss your vision and receive a personalized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="booking" size="lg">
                Call +49 123 456 789
              </Button>
              <Button variant="outline" size="lg">
                Send Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;