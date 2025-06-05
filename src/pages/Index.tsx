
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SkipCard } from '@/components/SkipCard';
import { PageHeader } from '@/components/PageHeader';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { SelectionSummary } from '@/components/SelectionSummary';
import { Skip } from '@/types/skip';
import { fetchSkips } from '@/lib/api';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['skips', 'NR32', 'Lowestoft'],
    queryFn: () => fetchSkips('NR32', 'Lowestoft'),
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading skip data",
        description: "Using sample data for demonstration",
        variant: "destructive",
      });
    }
  }, [error]);

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
    setShowSummary(true);
    toast({
      title: "Skip selected!",
      description: `You've selected the ${skip.name} (${skip.size})`,
    });
  };

  const handleProceed = () => {
    toast({
      title: "Proceeding to booking",
      description: "Redirecting to booking page...",
    });
    // В реальном приложении здесь был бы переход на страницу бронирования
  };

  const handleChangeSelection = () => {
    setShowSummary(false);
    setSelectedSkip(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 py-8">
          <PageHeader />
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <PageHeader 
          postcode={data?.location.postcode} 
          area={data?.location.area}
        />

        {showSummary && selectedSkip ? (
          <div className="space-y-8">
            <SelectionSummary
              selectedSkip={selectedSkip}
              onProceed={handleProceed}
              onChange={handleChangeSelection}
            />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Available Skip Sizes
              </h2>
              <p className="text-gray-600">
                Click on any skip to select it for your garden waste disposal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  onSelect={handleSkipSelect}
                  isSelected={selectedSkip?.id === skip.id}
                />
              ))}
            </div>

            {data?.skips.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No skip sizes available for this location.</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Need help choosing? Call us at 0800 123 4567 for expert advice</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
