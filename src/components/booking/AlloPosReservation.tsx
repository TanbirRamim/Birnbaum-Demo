import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, Clock, Utensils, MessageSquare } from 'lucide-react';
import { bookingConfig, restaurantConfig } from '@/config/booking';

interface AlloPosReservationProps {
  onReservationComplete?: (reservationData: any) => void;
}

const AlloPosReservation = ({ onReservationComplete }: AlloPosReservationProps) => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    partySize: 2,
    occasion: '',
    specialRequests: '',
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState<any>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Generate available time slots
  const generateTimeSlots = (date: string) => {
    if (!date) return [];

    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.toLocaleLowerCase().slice(0, 3);
    const hours = restaurantConfig.operatingHours[dayOfWeek as keyof typeof restaurantConfig.operatingHours];
    
    if (!hours) return [];

    const slots = [];
    const openTime = parseInt(hours.open.split(':')[0]);
    const closeTime = parseInt(hours.close.split(':')[0]);
    
    for (let hour = openTime; hour < closeTime; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    
    return slots;
  };

  // Check table availability
  const checkAvailability = async () => {
    if (!reservationData.date || !reservationData.time || !reservationData.partySize) {
      return;
    }

    setIsLoading(true);
    try {
      // In a real implementation, you would call allO/POS API here
      // For now, we'll simulate the response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAvailability({
        available: true,
        tableSize: Math.ceil(reservationData.partySize / 2) * 2, // Round up to nearest even number
        estimatedDuration: '2 hours'
      });
    } catch (error) {
      console.error('Error checking availability:', error);
      setAvailability({ available: false, error: 'Unable to check availability' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle reservation
  const handleReservation = () => {
    if (!availability?.available) return;

    // Open allO/POS booking widget in new window
    const bookingUrl = new URL(bookingConfig.alloPos.bookingUrl);
    bookingUrl.searchParams.set('date', reservationData.date);
    bookingUrl.searchParams.set('time', reservationData.time);
    bookingUrl.searchParams.set('party_size', reservationData.partySize.toString());
    bookingUrl.searchParams.set('occasion', reservationData.occasion);
    bookingUrl.searchParams.set('name', reservationData.customerName);
    bookingUrl.searchParams.set('email', reservationData.customerEmail);
    bookingUrl.searchParams.set('phone', reservationData.customerPhone);

    window.open(bookingUrl.toString(), '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

    // Call completion callback if provided
    if (onReservationComplete) {
      onReservationComplete({
        type: 'restaurant',
        data: reservationData,
        availability
      });
    }
  };

  // Update available times when date changes
  useEffect(() => {
    if (reservationData.date) {
      const times = generateTimeSlots(reservationData.date);
      setAvailableTimes(times);
      // Reset time if current selection is not available
      if (reservationData.time && !times.includes(reservationData.time)) {
        setReservationData(prev => ({ ...prev, time: '' }));
      }
    }
  }, [reservationData.date]);

  // Check availability when form data changes
  useEffect(() => {
    if (reservationData.date && reservationData.time && reservationData.partySize) {
      checkAvailability();
    }
  }, [reservationData.date, reservationData.time, reservationData.partySize]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-primary" />
          Table Reservation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Reservation Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                value={reservationData.date}
                onChange={(e) => setReservationData(prev => ({ ...prev, date: e.target.value }))}
                className="pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select
                value={reservationData.time}
                onValueChange={(value) => setReservationData(prev => ({ ...prev, time: value }))}
                disabled={!reservationData.date}
              >
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map(time => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Party Size and Occasion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="partySize">Party Size</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select
                value={reservationData.partySize.toString()}
                onValueChange={(value) => setReservationData(prev => ({ ...prev, partySize: parseInt(value) }))}
              >
                <SelectTrigger className="pl-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="occasion">Special Occasion (Optional)</Label>
            <Select
              value={reservationData.occasion}
              onValueChange={(value) => setReservationData(prev => ({ ...prev, occasion: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                {restaurantConfig.specialOccasions.map(occasion => (
                  <SelectItem key={occasion} value={occasion}>
                    {occasion}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Customer Information */}
        <div className="space-y-4">
          <h4 className="font-medium">Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                value={reservationData.customerName}
                onChange={(e) => setReservationData(prev => ({ ...prev, customerName: e.target.value }))}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customerEmail">Email *</Label>
              <Input
                id="customerEmail"
                type="email"
                value={reservationData.customerEmail}
                onChange={(e) => setReservationData(prev => ({ ...prev, customerEmail: e.target.value }))}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerPhone">Phone Number *</Label>
            <Input
              id="customerPhone"
              type="tel"
              value={reservationData.customerPhone}
              onChange={(e) => setReservationData(prev => ({ ...prev, customerPhone: e.target.value }))}
              placeholder="+49 123 456 789"
              required
            />
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-2">
          <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Textarea
              id="specialRequests"
              value={reservationData.specialRequests}
              onChange={(e) => setReservationData(prev => ({ ...prev, specialRequests: e.target.value }))}
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              className="pl-10 min-h-[80px]"
            />
          </div>
        </div>

        {/* Availability and Confirmation */}
        {availability && (
          <div className="p-4 bg-muted rounded-lg">
            {availability.available ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Table Available</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Table for {availability.tableSize} • Estimated duration: {availability.estimatedDuration}
                </div>
              </div>
            ) : (
              <div className="text-red-600">
                {availability.error || 'No tables available for selected time'}
              </div>
            )}
          </div>
        )}

        {/* Reservation Button */}
        <Button
          onClick={handleReservation}
          disabled={!availability?.available || isLoading || !reservationData.customerName || !reservationData.customerEmail || !reservationData.customerPhone}
          className="w-full"
          size="lg"
        >
          {isLoading ? 'Checking Availability...' : 'Reserve Table with allO/POS'}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Powered by allO/POS • Secure reservation system
        </p>
      </CardContent>
    </Card>
  );
};

export default AlloPosReservation;
