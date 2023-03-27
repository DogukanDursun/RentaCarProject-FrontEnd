export interface CarDetailsDto {
    id: number; 
    brandId: number; 
    colorId: number; 
    carName: string; 
    colorName: string;
    brandName: string;
    modelYear: number;
    model: string;
    dailyPrice: number;
    description: string;
    imagePath: string[];
  }