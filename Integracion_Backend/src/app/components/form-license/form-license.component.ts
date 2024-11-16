import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { UserService } from '../../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-license',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule,CalendarModule, HttpClientModule],
  templateUrl: './form-license.component.html',
  styleUrl: './form-license.component.css'
})
export class FormLicenseComponent {
  licenseform: FormGroup;

  constructor(private fb: FormBuilder ,private router: Router, private fechaService: UserService){
    this.licenseform = this.fb.group({
    
      fechaInicio:['',Validators.required],
      fechaFinalizacion: ['',Validators.required],
      texto: ['',Validators.required]

    })
   }
    get fechaInicio() {
      return this.licenseform.get('fechaInicio')?.value;
    }
    get fechaFinalizacion() {
      return this.licenseform.get('fechaFinalizacion')?.value;
    }
    get texto() {
      return this.licenseform.get('texto')?.value;
    }
  
}
