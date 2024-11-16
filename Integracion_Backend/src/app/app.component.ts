import { Component, AfterViewInit, viewChild } from '@angular/core';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { FormLicenseComponent } from './components/form-license/form-license.component';
import { ButtonModule } from 'primeng/button';
import { FormBuilder } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // No es necesario HttpClientModule si usas provideHttpClient
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ButtonModule, FormUserComponent, FormManagerComponent,CardModule, FormLicenseComponent,RouterModule, HttpClientModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean = false;

  userFirstName: any;
  userLastName: any;
  userEmail: any;
  userPhone: any;

  managerFirstName: any;
  managerEmail: any;

  licenseFechaInicio: any;
  licenseFechaFinalizacion: any;
  licensetexto: any;
  Usname: any;
  Usemail: any;

  // Obtén referencias a los componentes de formulario
  readonly userComponent = viewChild.required(FormUserComponent);
  readonly managerComponent = viewChild.required(FormManagerComponent);
  readonly licenseComponent = viewChild.required(FormLicenseComponent);
  readonly loginComponent = viewChild.required(LoginComponent);

  

  constructor(
    private userService: UserService
  ) { }

  ngAfterViewInit() {
    // Ahora puedes acceder a los formularios de los componentes hijos
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  }

  /*onSubmit() {

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
  }*/

  onSubmit() {
    const userComponent = this.userComponent();
    const managerComponent = this.managerComponent();
    const licenseComponent = this.licenseComponent();
    if (
      userComponent.userform.valid &&
      managerComponent.managerform.valid &&
      licenseComponent.licenseform.valid
      
    ) {
      // Actualiza los valores al enviar
      this.userFirstName = userComponent.firstName;
      this.userLastName = userComponent.lastName;
      this.userEmail = userComponent.email;
      this.userPhone = userComponent.phone;

      this.managerFirstName = managerComponent.firstName;
      this.managerEmail = managerComponent.email;

      this.licenseFechaInicio = licenseComponent.fechaInicio;
      this.licenseFechaFinalizacion = licenseComponent.fechaFinalizacion;
      this.licensetexto = licenseComponent.texto;
      //--------------------------------------------------------
      this.userService.register(
        this.userFirstName,
        this.userLastName,
        this.userEmail,
        this.userPhone,
        this.managerFirstName,
        this.managerEmail,
        this.licenseFechaInicio,
        this.licenseFechaFinalizacion,
        this.licensetexto
      
      ).subscribe(response => {
        console.log("Registro de licencia exitoso:", response);
      });
  
      
      // Muestra los datos completos
      console.log("Datos del usuario:", this.userFirstName, this.userLastName, this.userEmail, this.userPhone);
      console.log("Datos del manager:", this.managerFirstName, this.managerEmail);
      console.log("Datos de la licencia:", this.licenseFechaInicio, this.licenseFechaFinalizacion, this.licensetexto);
    } else {
      console.log('Algunos formularios son inválidos');
      userComponent.userform.markAllAsTouched();
      managerComponent.managerform.markAllAsTouched();
      licenseComponent.licenseform.markAllAsTouched();
    }
  }
  onSubmit2(){
    const loginComponent = this.loginComponent();
    if (loginComponent.loginform.valid) {
      this.Usname = loginComponent.Usname;
      this.Usemail = loginComponent.Usemail;
      this.userService.loginUser(
        this.Usname,
        this.Usemail
      ).subscribe(response => {
        console.log("Inicio de Sesión exitoso:", response);
      });
    }
    else {
      console.log('Formulario Inicio sesión Invalido');
      loginComponent.loginform.markAllAsTouched();
    }
  
  }
}