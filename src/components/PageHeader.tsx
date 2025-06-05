
import { Recycle, MapPin } from 'lucide-react';

interface PageHeaderProps {
  postcode?: string;
  area?: string;
}

export const PageHeader = ({ postcode, area }: PageHeaderProps) => {
  return (
    <div className="text-center space-y-6 mb-12">
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full">
          <Recycle className="w-12 h-12" style={{ color: '#0C319F' }} />
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #0C319F, #1E40AF)' }}>
          Choose Your Skip Size
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the perfect skip size for your garden waste disposal needs. 
          We offer competitive prices and reliable service.
        </p>
      </div>

      {(postcode || area) && (
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">
            Delivery to: {area && `${area}, `}{postcode}
          </span>
        </div>
      )}
    </div>
  );
};
