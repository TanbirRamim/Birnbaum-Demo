import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { bookingConfig, roomTypes } from '@/config/booking';

interface RoomRaccoonBookingProps {
  onBookingComplete?: (bookingData: any) => void;
}

const RoomRaccoonBooking = ({ onBookingComplete }: RoomRaccoonBookingProps) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    roomType: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState<any>(null);

  // Calculate number of nights
  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkInDate = new Date(bookingData.checkIn);
      const checkOutDate = new Date(bookingData.checkOut);
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  // Get selected room details
  const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);

  // Check availability
  const checkAvailability = async () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType) {
      return;
    }

    setIsLoading(true);
    try {
      // In a real implementation, you would call RoomRaccoon API here
      // For now, we'll simulate the response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAvailability({
        available: true,
        price: selectedRoom?.basePrice || 0,
        nights: calculateNights(),
        totalPrice: (selectedRoom?.basePrice || 0) * calculateNights() * bookingData.rooms
      });
    } catch (error) {
      console.error('Error checking availability:', error);
      setAvailability({ available: false, error: 'Unable to check availability' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle booking
  const handleBooking = () => {
    if (!availability?.available) return;

    // Open RoomRaccoon booking widget in new window
    const bookingUrl = new URL(bookingConfig.roomRaccoon.bookingUrl);
    bookingUrl.searchParams.set('checkin', bookingData.checkIn);
    bookingUrl.searchParams.set('checkout', bookingData.checkOut);
    bookingUrl.searchParams.set('guests', bookingData.guests.toString());
    bookingUrl.searchParams.set('rooms', bookingData.rooms.toString());
    bookingUrl.searchParams.set('room_type', bookingData.roomType);

    window.open(bookingUrl.toString(), '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

    // Call completion callback if provided
    if (onBookingComplete) {
      onBookingComplete({
        type: 'hotel',
        data: bookingData,
        availability
      });
    }
  };

  // Check availability when form data changes
  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut && bookingData.roomType) {
      checkAvailability();
    }
  }, [bookingData.checkIn, bookingData.checkOut, bookingData.roomType, bookingData.rooms]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Hotel Room Booking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Check-in/Check-out Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkin">Check-in Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkin"
                type="date"
                value={bookingData.checkIn}
                onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                className="pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout">Check-out Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkout"
                type="date"
                value={bookingData.checkOut}
                onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                className="pl-10"
                min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>

        {/* Guests and Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select
                value={bookingData.guests.toString()}
                onValueChange={(value) => setBookingData(prev => ({ ...prev, guests: parseInt(value) }))}
              >
                <SelectTrigger className="pl-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rooms">Number of Rooms</Label>
            <Select
              value={bookingData.rooms.toString()}
              onValueChange={(value) => setBookingData(prev => ({ ...prev, rooms: parseInt(value) }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 5 }, (_, i) => i + 1).map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="roomType">Room Type</Label>
          <Select
            value={bookingData.roomType}
            onValueChange={(value) => setBookingData(prev => ({ ...prev, roomType: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              {roomTypes.map(room => (
                <SelectItem key={room.id} value={room.id}>
                  {room.name} - €{room.basePrice}/night
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Availability and Pricing */}
        {availability && (
          <div className="p-4 bg-muted rounded-lg">
            {availability.available ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Available</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {availability.nights} night{availability.nights !== 1 ? 's' : ''} • 
                  {bookingData.rooms} room{bookingData.rooms !== 1 ? 's' : ''}
                </div>
                <div className="text-lg font-semibold">
                  Total: €{availability.totalPrice}
                </div>
              </div>
            ) : (
              <div className="text-red-600">
                {availability.error || 'Not available for selected dates'}
              </div>
            )}
          </div>
        )}

        {/* Booking Button */}
        <Button
          onClick={handleBooking}
          disabled={!availability?.available || isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading ? 'Checking Availability...' : 'Book Now with RoomRaccoon'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Powered by RoomRaccoon • Secure booking system
        </p>
      </CardContent>
    </Card>
  );
};

export default RoomRaccoonBooking;
