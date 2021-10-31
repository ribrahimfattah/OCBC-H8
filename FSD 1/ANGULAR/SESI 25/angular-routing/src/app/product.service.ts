import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './models/products';
import { PRODUCTS } from './models/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = of(PRODUCTS);

  constructor() { }

  getProducts(): Observable<Product[]> {

    return this.products;
  }

  getOneProduct(id: number): Observable<Product> {
    return this.products
      .pipe(
        map(
          products => products.find(product => product.id == id)!
        )
      )
  }
}
