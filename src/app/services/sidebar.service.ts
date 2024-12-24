import { Injectable } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
@Injectable({
  providedIn: 'root'
  
})
export class SidebarService {
  
  // public currentUser  = localStorage.getItem('rol');
  // public currentUser  = credentialsService.rol;
 //creación de menus por nfor    
  menu: any[] = [{

    submenu: [
      { titulo: 'Prestamos', url: 'borrow',icono:'nav-icon fa-solid fa-right-left',user:'ROLE_USER' },
      { titulo: 'Solicitudes', url: 'request',icono:'nav-icon fa-regular fa-bell', user:'ROLE_ADMIN'},
      { titulo: 'Libros', url: 'book',icono:'nav-icon fa-solid fa-solid fa-book' ,user:'ROLE_USER'},
      { titulo: 'Usuarios', url: 'users',icono:'nav-icon fa-solid fa-solid fa-users', user:'ROLE_ADMIN'},
    


      
      // { titulo: 'Mis datos personales', url: '',icono:'fas fa-user-circle nav-icon' },
      // { titulo: 'Preguntas Frecuentes', url: '',icono:'fas fa-question-circle nav-icon' }
    ]

  }];


  menuReport: any[] = [{

    titulo: 'Reportes',
    icono: '"nav-icon fa-solid fa-chart-simple',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Access Point', url: 'reportcars' },
      { titulo: 'Switch', url: 'reportperson' },
      ]

  }];

  constructor(
    
  ) { }
  
}
