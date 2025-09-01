import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';
import restaurantDining from '@/assets/restaurant-dining.jpg';

const Restaurant = () => {
  const menuCategories = [
    {
      title: "Bavarian Classics",
      description: "Traditional dishes from the heart of Bavaria",
      dishes: [
        { name: "Wiener Schnitzel", description: "Breaded veal cutlet with potato salad", price: "€18.50" },
        { name: "Sauerbraten", description: "Marinated roast beef with red cabbage", price: "€22.00" },
        { name: "Schweinshaxe", description: "Roasted pork knuckle with sauerkraut", price: "€24.00" },
        { name: "Bratwurst Platter", description: "Assorted sausages with mustard and bread", price: "€16.50" }
      ]
    },
    {
      title: "Fresh Seasonal",
      description: "Chef's selection of seasonal specialties", 
      dishes: [
        { name: "Pan-seared Trout", description: "Local trout with herbs and vegetables", price: "€19.00" },
        { name: "Wild Game Goulash", description: "Tender venison in rich sauce", price: "€26.00" },
        { name: "Mushroom Risotto", description: "Creamy risotto with forest mushrooms", price: "€17.50" },
        { name: "Roasted Duck Breast", description: "With orange glaze and seasonal sides", price: "€28.00" }
      ]
    },
    {
      title: "Desserts",
      description: "Traditional sweet endings to your meal",
      dishes: [
        { name: "Apple Strudel", description: "Warm pastry with vanilla sauce", price: "€8.50" },
        { name: "Black Forest Cake", description: "Classic chocolate cherry cake", price: "€9.00" },
        { name: "Kaiserschmarrn", description: "Shredded pancake with plum compote", price: "€10.50" },
        { name: "Ice Cream Selection", description: "Three scoops of seasonal flavors", price: "€7.50" }
      ]
    }
  ];

  const beverages = [
    { category: "Local Beers", items: ["Augustiner Helles", "Spaten Weissbier", "Löwenbräu Original"] },
    { category: "German Wines", items: ["Riesling Kabinett", "Pinot Noir Spätburgunder", "Gewürztraminer"] },
    { category: "Non-Alcoholic", items: ["Fresh Apple Juice", "Elderflower Lemonade", "Mineral Water"] }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="relative h-64 mb-12 overflow-hidden">
        <img 
          src={restaurantDining} 
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-5xl font-bold mb-4">Restaurant</h1>
            <p className="text-xl font-light">Authentic German Cuisine</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Restaurant Info */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our restaurant serves traditional German cuisine prepared with fresh, locally sourced ingredients. 
            Experience the authentic flavors of Bavaria in our warm and welcoming atmosphere.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Opening Hours</h3>
                <p className="text-sm text-muted-foreground">Daily: 12:00 - 22:00</p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Capacity</h3>
                <p className="text-sm text-muted-foreground">80 seats indoor + terrace</p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <ChefHat className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Chef's Special</h3>
                <p className="text-sm text-muted-foreground">Daily changing menu</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-semibold text-primary mb-3">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.dishes.map((dish, dishIndex) => (
                  <Card key={dishIndex} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display text-lg font-semibold text-primary">
                          {dish.name}
                        </h3>
                        <Badge variant="outline" className="text-gold border-gold">
                          {dish.price}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {dish.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Beverages Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-primary mb-3">
              Beverages
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully selected wines, local beers, and refreshing drinks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beverages.map((beverage, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary text-center">
                    {beverage.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {beverage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <Utensils className="w-4 h-4 text-gold" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card className="shadow-elegant border-0 gradient-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">
                Reserve Your Table
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us for an unforgettable dining experience. Book your table today 
                and let us prepare something special for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="booking" size="lg">
                  Call +49 123 456 789
                </Button>
                <Button variant="outline" size="lg">
                  Online Reservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;