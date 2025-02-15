import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/products.json');
  }

  getBestSellingItems(): Observable<any[]> {
    return this.http
      .get<any[]>('../../assets/products.json')
      .pipe(
        map((products) =>
          products.sort((a, b) => b.unitsSold - a.unitsSold).slice(0, 4)
        )
      );
  }

  getItemById(id: string): Observable<any> {
    return this.http
      .get<any>('../../assets/products.json')
      .pipe(
        map((products) =>
          products.find((element: any) => element.id===id)
        )
      );
  }
}
