import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDatetimePage } from './select-datetime';

@NgModule({
  declarations: [
    SelectDatetimePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDatetimePage),
  ],
})
export class SelectDatetimePageModule {}
