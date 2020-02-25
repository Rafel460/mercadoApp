import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriadoresPage } from './criadores.page';

const routes: Routes = [
  {
    path: '',
    component: CriadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriadoresPageRoutingModule {}
