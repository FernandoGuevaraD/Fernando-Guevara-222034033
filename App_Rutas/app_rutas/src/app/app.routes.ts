import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    {
        path:'', // esta seria la ruta principal localhost:4200
        component: HomePageComponent 
    },
    {
        path:'Auth', //mostrar la pagina de autenticacion
        component: AuthPageComponent
    },
    {
        path:'sidebar', 
        component: SidebarPageComponent
    }
];
