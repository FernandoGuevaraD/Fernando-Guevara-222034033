import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-form-manager',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form-manager.component.html',
  styleUrl: './form-manager.component.css'
})
export class FormManagerComponent {
  managerform: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.managerform = this.fb.group({
    
      firstName:['',Validators.required],
      email:['',Validators.required,Validators.email]

    })
   }


}
