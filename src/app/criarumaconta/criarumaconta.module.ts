import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarumacontaPageRoutingModule } from './criarumaconta-routing.module';

import { CriarumacontaPage } from './criarumaconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarumacontaPageRoutingModule
  ],
  declarations: [CriarumacontaPage]
})
export class CriarumacontaPageModule {}
