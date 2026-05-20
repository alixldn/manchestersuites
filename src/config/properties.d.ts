export interface Property {
  id: string;
  name: string;
  apt: string;
  tagline: string;
  image: string;
  guests: number;
  beds: number;
  baths: number;
  size: string;
  features: string[];
  wId: string;
  wTkn: string;
}
export const properties: Property[];
export const shuffleProperties: () => Property[];
export const buildBookingUrl: (wId: string, wTkn: string) => string;