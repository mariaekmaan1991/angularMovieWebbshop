import { Product } from '../models/Product';
import { Subject } from 'rxjs';

export class IProductService {
  getData(): void {}
  productData: Subject<Product[]>;
}
