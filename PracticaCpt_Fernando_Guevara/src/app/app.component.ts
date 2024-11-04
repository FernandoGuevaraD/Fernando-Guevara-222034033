import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { FormLicenseComponent } from './components/form-license/form-license.component';
import { ButtonModule } from 'primeng/button';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, FormUserComponent, FormManagerComponent, FormLicenseComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean = false;

  // Obtén referencias a los componentes de formulario
  @ViewChild(FormUserComponent) userComponent!: FormUserComponent;
  @ViewChild(FormManagerComponent) managerComponent!: FormManagerComponent;
  @ViewChild(FormLicenseComponent) licenseComponent!: FormLicenseComponent;

  constructor() {}

  ngAfterViewInit() {
    // Ahora puedes acceder a los formularios de los componentes hijos
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  }

  onSubmit() {

    if (this.userComponent.userform.valid && 
        this.managerComponent.managerform.valid && 
        this.licenseComponent.licenseform.valid) {
      console.log('Datos del formulario de usuario:', this.userComponent.userform.value);
      console.log('Datos del formulario de manager:', this.managerComponent.managerform.value);
      console.log('Datos del formulario de licencia:', this.licenseComponent.licenseform.value);
    } else {
      console.log('Algunos formularios son inválidos');
      this.userComponent.userform.markAllAsTouched();
      this.managerComponent.managerform.markAllAsTouched();
      this.licenseComponent.licenseform.markAllAsTouched();
    }
  }
  
}
