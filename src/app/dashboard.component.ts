import {Component, OnInit} from '@angular/core';



@Component({
moduleId: module.id,
selector: 'dashDetail',
template: `<div>{{title}}</div>`
})
export class DashboardComponent implements OnInit{

    title = ' ';

    ngOnInit(): void{
        this.title = 'Hello from DashboardComponent';
    }
}