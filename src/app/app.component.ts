import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/admin" routerLinkActive="active">Admin</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/logout" routerLinkActive="active">Logout</a>
  </nav>
  <div style='border-top: 1px solid gray'></div>
  <router-outlet></router-outlet>
`,
})
export class AppComponent  {
   title = 'My App Angular'; 
  }
