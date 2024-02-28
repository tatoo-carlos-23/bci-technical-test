import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './s-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { SActionsComponent } from './components/s-actions/s-actions.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    STableComponent,
    SActionsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    STableComponent
  ]
})
export class STableModule { }
