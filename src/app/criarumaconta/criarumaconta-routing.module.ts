import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarumacontaPage } from './criarumaconta.page';

const routes: Routes = [
  {
    path: '',
    component: CriarumacontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarumacontaPageRoutingModule {}
