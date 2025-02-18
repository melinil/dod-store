import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent implements OnInit {
  allProducts: Product[] = [];
  searchText: string = '';
  sortBy: string = '';
  selectedCategory: any = '';
  categories: any;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.fetchProducts().subscribe((response: Product[]) => {
      this.allProducts = response;
      this.getAllCategories();
      console.log(this.allProducts);
    });
  }

  getAllCategories() {
    this.categories = [
      ...new Set(this.allProducts.map((item) => item.category)),
    ];
  }

  filteredItems() {
    return this.allProducts
      .filter((item) =>
        item.title!.toLowerCase().includes(this.searchText.toLowerCase())
      )
      .filter((item) =>
        this.selectedCategory ? item.category === this.selectedCategory : true
      )
      .sort((a, b) =>
        this.sortBy === 'price'
          ? a.price! - b.price!
          : this.sortBy === 'name'
          ? a.title!.localeCompare(b.title!)
          : 0
      );
  }
}
