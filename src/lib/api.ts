
import { ApiResponse, ApiSkip, Skip } from '@/types/skip';

const skipNames = {
  4: "Mini Skip",
  6: "Midi Skip", 
  8: "Builder's Skip",
  10: "Large Skip",
  12: "Maxi Skip",
  14: "Extra Large Skip",
  16: "Jumbo Skip",
  20: "Roll-on Roll-off",
  40: "Large Roll-on Roll-off"
};

const skipDescriptions = {
  4: "Perfect for small garden clearances and household waste",
  6: "Ideal for medium-sized garden projects and home renovations",
  8: "Great for larger garden clearances and construction waste", 
  10: "Perfect for major garden overhauls and large projects",
  12: "Excellent for extensive garden renovations",
  14: "Ideal for large-scale garden clearances",
  16: "Perfect for major landscaping projects",
  20: "Suitable for large commercial garden waste",
  40: "Industrial-scale garden waste disposal"
};

function transformApiSkip(apiSkip: ApiSkip): Skip {
  const totalPrice = Math.round(apiSkip.price_before_vat * (1 + apiSkip.vat / 100));
  
  return {
    id: apiSkip.id,
    name: skipNames[apiSkip.size as keyof typeof skipNames] || `${apiSkip.size} Yard Skip`,
    size: `${apiSkip.size} cubic yards`,
    price: totalPrice,
    description: skipDescriptions[apiSkip.size as keyof typeof skipDescriptions] || `${apiSkip.size} cubic yard skip for garden waste`,
    capacity: `Holds approximately ${apiSkip.size * 10}-${apiSkip.size * 15} bin bags`,
    popular: apiSkip.size === 6 // Mark 6 yard as most popular
  };
}

export async function fetchSkips(postcode: string = 'NR32', area: string = 'Lowestoft'): Promise<ApiResponse> {
  try {
    const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch skips data');
    }
    
    const apiSkips: ApiSkip[] = await response.json();
    
    // Transform API data to our expected format
    const transformedSkips = apiSkips.map(transformApiSkip);
    
    return {
      skips: transformedSkips,
      location: {
        postcode: postcode,
        area: area
      }
    };
  } catch (error) {
    console.error('Error fetching skips:', error);
    
    // Возвращаем mock данные в случае ошибки
    return {
      skips: [
        {
          id: 1,
          name: "Mini Skip",
          size: "2-3 cubic yards",
          price: 150,
          description: "Perfect for small garden clearances and household waste",
          capacity: "Holds approximately 25-35 bin bags",
          dimensions: { length: 1.8, width: 1.2, height: 0.9 },
          popular: false
        },
        {
          id: 2,
          name: "Midi Skip",
          size: "4-5 cubic yards",
          price: 180,
          description: "Ideal for medium-sized garden projects and home renovations",
          capacity: "Holds approximately 35-45 bin bags",
          dimensions: { length: 2.4, width: 1.4, height: 1.0 },
          popular: true
        },
        {
          id: 3,
          name: "Builder's Skip",
          size: "6-8 cubic yards",
          price: 220,
          description: "Great for larger garden clearances and construction waste",
          capacity: "Holds approximately 60-80 bin bags",
          dimensions: { length: 3.7, width: 1.8, height: 1.2 },
          popular: false
        },
        {
          id: 4,
          name: "Large Skip",
          size: "12-14 cubic yards",
          price: 280,
          description: "Perfect for major garden overhauls and large projects",
          capacity: "Holds approximately 120-140 bin bags",
          dimensions: { length: 4.6, width: 1.8, height: 1.5 },
          popular: false
        }
      ],
      location: {
        postcode: postcode,
        area: area
      }
    };
  }
}
