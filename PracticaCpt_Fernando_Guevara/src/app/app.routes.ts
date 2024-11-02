import { Routes } from '@angular/router';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { FormLicenseComponent } from './components/form-license/form-license.component';

export const routes: Routes = [
    {

        path: 'form-user',
        component: FormUserComponent
    
    },
    {
        path: 'form-manager',
        component: FormManagerComponent
    },
    {
        path: 'form-license',
        component: FormLicenseComponent
    },

    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }

];
