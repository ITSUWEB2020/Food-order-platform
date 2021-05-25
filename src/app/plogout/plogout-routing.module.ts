import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlogoutComponent} from './plogout.component';


const routes: Routes = [
  {path: 'registration', component: PlogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlogoutRoutingModule { }
