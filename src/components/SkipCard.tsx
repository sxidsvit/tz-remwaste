
import { Check, Truck, Ruler } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skip } from '@/types/skip';

interface SkipCardProps {
  skip: Skip;
  onSelect: (skip: Skip) => void;
  isSelected?: boolean;
}

export const SkipCard = ({ skip, onSelect, isSelected = false }: SkipCardProps) => {
  return (
    <Card 
      className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group ${
        isSelected 
          ? 'ring-2 shadow-lg' 
          : 'hover:shadow-lg'
      }`}
      style={{
        ringColor: isSelected ? '#0C319F' : undefined,
        backgroundColor: isSelected ? '#EBF4FF' : undefined,
        borderColor: !isSelected ? '#0C319F20' : undefined
      }}
      onClick={() => onSelect(skip)}
    >
      {skip.popular && (
        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          Most Popular
        </Badge>
      )}
      
      {isSelected && (
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0C319F' }}>
          <Check className="w-4 h-4 text-white" />
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-xl font-bold text-gray-800 group-hover:transition-colors`} style={{ color: isSelected ? '#0C319F' : undefined }}>
            {skip.name}
          </CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: '#0C319F' }}>
              £{skip.price}
            </div>
            <div className="text-sm text-gray-500">inc. VAT</div>
          </div>
        </div>
        <CardDescription className="text-gray-600 mt-2">
          {skip.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Truck className="w-4 h-4" style={{ color: '#0C319F' }} />
          <span className="font-medium">Size: {skip.size}</span>
        </div>

        {skip.capacity && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Capacity:</span> {skip.capacity}
          </div>
        )}

        {skip.dimensions && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Ruler className="w-4 h-4" style={{ color: '#0C319F' }} />
            <span>
              {skip.dimensions.length}m × {skip.dimensions.width}m × {skip.dimensions.height}m
            </span>
          </div>
        )}

        <Button 
          className="w-full mt-4 transition-all duration-200 text-white"
          style={{
            backgroundColor: isSelected ? '#0C319F' : '#0C319F',
            ':hover': {
              backgroundColor: '#083A7F'
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip);
          }}
        >
          {isSelected ? 'Selected' : 'Choose This Skip'}
        </Button>
      </CardContent>
    </Card>
  );
};
