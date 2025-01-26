import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any = [];
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
}
