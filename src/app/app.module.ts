import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { PrintOneProductComponent } from './component/print-one-product/print-one-product.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrintOneProductCheckoutComponent } from './component/print-one-product-checkout/print-one-product-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CheckoutComponent,
    NotfoundComponent,
    DetailProductComponent,
    PrintOneProductComponent,
    PrintOneProductCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
