import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeManagerRoutingModule } from './poke-manager-routing.module';
import { PokeManagerComponent } from './poke-manager.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { MatButtonModule } from '@angular/material/button';
import { STableModule } from '@shared-components';
import { DeleteComponent } from './components/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PokeManagerComponent,
    AddUpdateComponent, DeleteComponent
  ],
  imports: [
    CommonModule,
    PokeManagerRoutingModule,
    MatButtonModule,
    STableModule,
    MatDialogModule
  ]
})
export class PokeManagerModule { }
