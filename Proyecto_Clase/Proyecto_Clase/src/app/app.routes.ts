import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { Component } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComponentsComponent } from './shared/shared/components/components.component';

export const routes: Routes = [
    {
        path:'',
        component: MytestcomponentComponent  
    },
    {
        path: 'Auth',
        component: MytestcomponentComponent
    },
    {
        path: 'Servicios',
        component: ServiciosComponent
    },
    {
        path:'Components',
        component: ComponentsComponent
    }

];
