import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { AdminComponent }  from './admin.component';
import { LoginComponent }  from './login/login.component';


import {AppRoutingModule} from './routing/app-routing.module'
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './security/auth-guard.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, DashboardComponent, AdminComponent, LoginComponent ],
  providers: [AuthService, AuthGuardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
