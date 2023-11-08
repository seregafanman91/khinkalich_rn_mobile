import { type ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  img: ImageSourcePropType;
  categoryId: string;
  categoryName: string;
}
