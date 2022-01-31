import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoatOrderDetailsPage } from './boat-order-details';

@NgModule({
  declarations: [
    BoatOrderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BoatOrderDetailsPage),
  ],
})
export class BoatOrderDetailsPageModule {}
