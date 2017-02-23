import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';
import { Router }            from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login',
    template: `<div>Página para realizar el login.</div>
    <div><button (click)="autoLogin()" >Iniciar sesión</button></div>`
})
export class LoginComponent{

    constructor(private authService: AuthService,
    private router: Router){}

    autoLogin(): void{
        this.authService.login().subscribe(result => {
            console.log('login correcto: ', result )
            this.authService.isLoggedIn = true;
            this.gotoAdmin();
        });
        
    }

    gotoAdmin(): void {
        let link = ['/admin'];
        this.router.navigate(link);
    }
}