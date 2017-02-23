import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from '../dashboard.component';
import { AdminComponent }  from '../admin.component';
import { LoginComponent }  from '../login/login.component';

import { AuthGuardService } from '../security/auth-guard.service';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }   
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule {}