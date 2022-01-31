import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectClothesPage } from './select-clothes';

@NgModule({
  declarations: [
    SelectClothesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectClothesPage),
  ],
})
export class SelectClothesPageModule {}
