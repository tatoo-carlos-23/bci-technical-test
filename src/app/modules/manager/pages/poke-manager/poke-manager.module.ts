import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeManagerRoutingModule } from './poke-manager-routing.module';
import { PokeManagerComponent } from './poke-manager.component';
import { TableComponent } from './components/table/table.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PokeManagerComponent,
    TableComponent,
    AddUpdateComponent
  ],
  imports: [
    CommonModule,
    PokeManagerRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class PokeManagerModule { }
