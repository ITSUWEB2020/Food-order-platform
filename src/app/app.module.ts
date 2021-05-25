import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {RegistrationModule} from './registration/registration.module';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PlogoutComponent } from './plogout/plogout.component';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {AuthenticationService} from './services/authentication.service';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderComponent } from './order/order.component';
import {AddfoodpComponent} from './addfoodp/addfoodp.component';
import { FoodaddComponent } from './foodadd/foodadd.component';
import {BasicAuthHtppInterceptorService} from './services/basic-auth-htpp-interceptor.service';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PlogoutComponent,
    CartComponent,
    HomepageComponent,
    OrderComponent,
    AddfoodpComponent,
    FoodaddComponent,
  ],
  imports: [
    FormsModule,
    RegistrationModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers:
    [
      {
        provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
      },
    UserService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
