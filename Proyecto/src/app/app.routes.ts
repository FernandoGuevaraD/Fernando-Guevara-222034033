import { Routes } from '@angular/router';
import { RegisterProductsComponent } from './Componentes/register-products/register-products.component';
import { SeacrhProductsComponent } from './Componentes/seacrh-products/seacrh-products.component';
import { ModifyProductsComponent } from './Componentes/modify-products/modify-products.component';
import { DeleteProductsComponent } from './Componentes/delete-products/delete-products.component';
import { ValidateProductsComponent } from './Componentes/validate-products/validate-products.component';
import { ListProductsComponent } from './Componentes/list-products/list-products.component';

export const routes: Routes = [
 
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'register', 
        component: RegisterProductsComponent
    },
    {
        path: 'modify', 
        component: ModifyProductsComponent
    },
    {
        path: 'delete', 
        component: DeleteProductsComponent
    },
    {
        path: 'validate', 
        component: ValidateProductsComponent
    },
    {
        path: 'list-products', 
        component: ListProductsComponent
    },
    {
        path: 'search', 
        component: SeacrhProductsComponent
    }

];
