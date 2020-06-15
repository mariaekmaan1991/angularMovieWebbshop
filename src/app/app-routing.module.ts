import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
