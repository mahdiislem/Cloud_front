import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { user } from 'src/app/api/user';
import { AppMainComponent } from 'src/app/app.main.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu-back-office',
  templateUrl: './menu-back-office.component.html'
})
export class MenuBackOfficeComponent implements OnInit {
  models: any[];
  constructor(private userService:UserService,public appMain: AppMainComponent) { }
  routeItems: MenuItem[];
  user:user;
  ngOnInit(): void {
    // this.userService.getByid(15).subscribe(data=>{
    //  this.user= data;
    //  console.log(this.user);
    // })

    this.models = [
        {
          label: 'Bienvenue',
          items:[
              {label:"islem,mahdi",icon: 'pi pi-sign-in', }
          ]
      },
      {
        label: 'Home',
        items:[
            {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/menu-back-office/statistique']}
        ]
    },
    {
        label: 'les Actions',
        items: [
            {label: 'Gestion des utlisateurs', icon: 'pi pi-fw pi-users', routerLink: ['/pages/users']},
            {label: 'Gestion des fournisseurs', icon: 'pi pi-fw pi-users', routerLink: ['/pages/fournisseurs']},
            {label:'Gestion des véhicules',icon:'pi pi-fw pi-car',routerLink:['/pages/produits']},
             //{label: 'Gestion des Clients', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/formlayout']},
            {label: 'Les demandes de leasing', icon: 'pi pi-fw pi-check-square', routerLink: ['/pages/demandesDeLeasing']},
           // {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
           // {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
           // {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
            //{label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
            //{label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
           // {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
            //{label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
          //  {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
           // {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
            //{label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true},
            //{label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
           // {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
            //{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
            //{label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc']}
        ]
    },
    {
        // label:'Prime Blocks',
        // items:[
        //     {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},
        //     {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
        // ]
    },
    // {label:'Utilities',
    //     items:[
    //         {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/icons']},
    //         {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     items: [
    //         {label: 'Crud', icon: 'pi pi-fw pi-user-edit', routerLink: ['/pages/crud']},
    //         {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
    //         {label: 'Landing', icon: 'pi pi-fw pi-globe', routerLink: ['pages/landing']},
    //         {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['pages/login']},
    //         {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['pages/error']},
    //         {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['pages/notfound']},
    //         {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['pages/access']},
    //         {label: 'Empty', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/empty']}
    //     ]
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
    //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
    //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
    //                         {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
    //                     ]
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label:'Get Started',
    //     items:[
    //         {
    //             label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
    //         },
    //         {
    //             label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
    //         }
    //     ]
    // }
       ];

      
  
}

onKeydown(event: KeyboardEvent) {
  const nodeElement = (<HTMLDivElement> event.target);
  if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
  }
}
}
  
