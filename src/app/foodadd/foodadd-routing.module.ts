import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodaddComponent} from './foodadd.component';


const routes: Routes = [
  {path: 'foodadd', component: FoodaddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
