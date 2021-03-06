export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  quantity: number;
  productCategory: [
    { categoryId: number; category: null },
    { categoryId: number; category: null }
  ];
}
