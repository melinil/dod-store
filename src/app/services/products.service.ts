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
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

  getBestSellingItems(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://fakestoreapi.com/products?sort=desc&limit=4'
    );
  }

  getItemById(id: string): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products/' + id);
  }
}
