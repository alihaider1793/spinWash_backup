import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailProductsPage } from './retail-products';

@NgModule({
  declarations: [
    RetailProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailProductsPage),
  ],
})
export class RetailProductsPageModule {}
