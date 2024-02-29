import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeManagerRoutingModule } from './poke-manager-routing.module';
import { PokeManagerComponent } from './poke-manager.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { MatButtonModule } from '@angular/material/button';
import { STableModule } from '@shared-components';
import { DeleteComponent } from './components/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    PokeManagerComponent,
    AddUpdateComponent,
    DeleteComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PokeManagerRoutingModule,
    MatButtonModule,
    STableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class PokeManagerModule { }
