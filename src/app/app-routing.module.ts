import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PlogoutComponent} from './plogout/plogout.component';
import {OrderComponent} from './order/order.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AddfoodpComponent} from './addfoodp/addfoodp.component';
import {FoodaddComponent} from './foodadd/foodadd.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'plogout', component: PlogoutComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'food', component: AddfoodpComponent},
  {path: 'foodadd', component: FoodaddComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


