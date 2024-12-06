import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { RegisterProductsComponent } from './Componentes/register-products/register-products.component';
import { SeacrhProductsComponent } from './Componentes/seacrh-products/seacrh-products.component';

export const routes: Routes = [
 
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'register', 
        component: RegisterComponent
    },
    {
        path: 'register_products', 
        component: RegisterProductsComponent
    },
    {
        path: 'search', 
        component: SeacrhProductsComponent
    }

];
