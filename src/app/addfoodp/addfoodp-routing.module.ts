import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddfoodpComponent} from './addfoodp.component';



const routes: Routes = [
  {path: 'food', component: AddfoodpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
