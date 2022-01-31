import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaypalSubsccriptionPage } from './paypal-subsccription';

@NgModule({
  declarations: [
    PaypalSubsccriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PaypalSubsccriptionPage),
  ],
})
export class PaypalSubsccriptionPageModule {}
