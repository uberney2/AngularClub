import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit {


  constructor() { }

  items : MenuItem[] = [];
  ngOnInit() {
    this.items = [
        {
            label:'Home',
            icon:'pi pi-fw pi-file',
            routerLink:'home'

        },


        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink:'createUser'

                },

                {
                    label:'Search',
                    icon:'pi pi-fw pi-eye',
                    routerLink:'users'

                },
                {
                    label:'Invoice',
                    icon:'pi pi-fw pi-dollar',
                    routerLink:'invoice'

                },

            ]
        },


    ];
}
}
