import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { DetailsComponent } from './components/details/details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "shop",
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
