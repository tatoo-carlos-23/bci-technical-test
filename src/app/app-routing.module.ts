import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manager',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import("./modules/home/home.module").then(r => r.HomeModule)
  },
  {
    path: 'manager',
    loadChildren: () => import("./modules/manager/manager.module").then(r => r.ManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
