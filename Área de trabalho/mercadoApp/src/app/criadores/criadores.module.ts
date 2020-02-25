import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriadoresPageRoutingModule } from './criadores-routing.module';

import { CriadoresPage } from './criadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriadoresPageRoutingModule
  ],
  declarations: [CriadoresPage]
})
export class CriadoresPageModule {}
