import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-elegant">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-elegant border-0 text-center">
          <CardContent className="p-12">
            <div className="mb-8">
              <h1 className="font-display text-9xl font-bold text-primary mb-4">404</h1>
              <h2 className="font-display text-3xl font-semibold text-primary mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Oops! The page you're looking for seems to have wandered off. 
                Let's get you back to exploring our hotel and restaurant.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="booking" size="lg">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/rooms">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  View Our Rooms
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>If you believe this is an error, please contact us at:</p>
              <p className="text-primary font-medium mt-2">+49 123 456 789</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
