import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-form-license',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule,CalendarModule],
  templateUrl: './form-license.component.html',
  styleUrl: './form-license.component.css'
})
export class FormLicenseComponent {
  licenseform: FormGroup;

  constructor(private fb: FormBuilder ,private router: Router){
    this.licenseform = this.fb.group({
    
      fechaInicio:['',Validators.required],
      fechaFinalizacion: [null],
      textoDeNotas: ['',Validators.required]

    })
   }

   onSubmit() {
    if (this.licenseform.valid) {
      console.log('Formulario Enviado', this.licenseform.value);
      this.router.navigate(['/logintest']);
    } else {
      this.licenseform.markAllAsTouched();
    }
  }
}
