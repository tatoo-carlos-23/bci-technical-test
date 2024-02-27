import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeManagerComponent } from './poke-manager.component';

const routes: Routes = [
  {
    path:'',
    component:PokeManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeManagerRoutingModule { }
