import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBagsPage } from './my-bags';

@NgModule({
  declarations: [
    MyBagsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBagsPage),
  ],
})
export class MyBagsPageModule {}
