import { Routes } from '@angular/router';
import { RegisterProductsComponent } from './Componentes/register-products/register-products.component';
import { SeacrhProductsComponent } from './Componentes/seacrh-products/seacrh-products.component';
import { ModifyProductsComponent } from './Componentes/modify-products/modify-products.component';
import { DeleteProductsComponent } from './Componentes/delete-products/delete-products.component';
import { ValidateProductsComponent } from './Componentes/validate-products/validate-products.component';
import { ListProductsComponent } from './Componentes/list-products/list-products.component';
import { ProductMenuComponent } from './Componentes/menu/menu.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'menu', pathMatch: 'full' // Redirige al menú por defecto
    },
    {
        path: 'menu',
        component: ProductMenuComponent // Ruta al menú principal
    },
    {
        path: 'register',
        component: RegisterProductsComponent // Ruta para registrar productos
    },
    {
        path: 'modify/:id',
        component: ModifyProductsComponent // Ruta para modificar productos
    },
    {
        path: 'delete/:id',
        component: DeleteProductsComponent // Ruta para eliminar productos
    },
    {
        path: 'validate',
        component: ValidateProductsComponent // Ruta para validar productos
    },
    {
        path: 'list-products',
        component: ListProductsComponent // Ruta para listar productos
    },
    {
        path: 'search',
        component: SeacrhProductsComponent // Ruta para buscar productos
    },
    {
        path: '**',
        redirectTo: 'menu', pathMatch: 'full' // Redirige al menú si la ruta no existe
    }
];
