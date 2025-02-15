import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from '../components/shop-page/shop-page.component';
import { DetailsComponent } from '../components/details/details.component';
const routes: Routes = [
  {
    path: "",
    component: ShopPageComponent
  },
  {
    path: "product/:id",
    component: DetailsComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
