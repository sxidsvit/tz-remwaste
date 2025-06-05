
export interface Skip {
  id: number;
  name: string;
  size: string;
  price: number;
  description?: string;
  capacity?: string;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  image?: string;
  popular?: boolean;
}

export interface ApiSkip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface ApiResponse {
  skips: Skip[];
  location: {
    postcode: string;
    area: string;
  };
}
