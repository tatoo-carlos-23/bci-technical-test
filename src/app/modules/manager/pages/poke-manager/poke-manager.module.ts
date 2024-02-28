import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeManagerRoutingModule } from './poke-manager-routing.module';
import { PokeManagerComponent } from './poke-manager.component'; 
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { MatButtonModule } from '@angular/material/button';
import { STableModule } from '@shared-components';

@NgModule({
  declarations: [
    PokeManagerComponent, 
    AddUpdateComponent
  ],
  imports: [
    CommonModule,
    PokeManagerRoutingModule,
    MatButtonModule, 
    STableModule
  ]
})
export class PokeManagerModule { }
