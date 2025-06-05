
import { Check, Calendar, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skip } from '@/types/skip';

interface SelectionSummaryProps {
  selectedSkip: Skip;
  onProceed: () => void;
  onChange: () => void;
}

export const SelectionSummary = ({ selectedSkip, onProceed, onChange }: SelectionSummaryProps) => {
  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
      <CardHeader className="text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0C319F' }}>
          <Check className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl" style={{ color: '#0C319F' }}>
          Perfect Choice!
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center">
          <h3 className="font-bold text-lg text-gray-800">{selectedSkip.name}</h3>
          <p className="font-semibold" style={{ color: '#0C319F' }}>{selectedSkip.size}</p>
          <p className="text-2xl font-bold mt-2" style={{ color: '#0C319F' }}>£{selectedSkip.price}</p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4" style={{ color: '#0C319F' }} />
            <span>Free delivery included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" style={{ color: '#0C319F' }} />
            <span>Available for next-day delivery</span>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <Button 
            onClick={onProceed}
            className="w-full text-white"
            style={{ backgroundColor: '#0C319F' }}
          >
            Proceed to Booking
          </Button>
          <Button 
            onClick={onChange}
            variant="outline" 
            className="w-full text-blue-600 hover:bg-blue-50"
            style={{ borderColor: '#0C319F20', color: '#0C319F' }}
          >
            Change Selection
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
