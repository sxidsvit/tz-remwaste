
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" style={{ color: '#0C319F' }} />
        <p className="text-gray-600">Loading skip options...</p>
      </div>
    </div>
  );
};
