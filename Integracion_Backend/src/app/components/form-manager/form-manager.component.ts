import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { UserService } from '../../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-manager',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, HttpClientModule],
  templateUrl: './form-manager.component.html',
  styleUrl: './form-manager.component.css'
})
export class FormManagerComponent {
  managerform: FormGroup;
  
  constructor(private fb: FormBuilder, private managerService: UserService){
    this.managerform = this.fb.group({
    
      firstName:['',Validators.required],
      email:['',[Validators.required,Validators.email]]

    })
   }
  get firstName() {
    return this.managerform.get('firstName')?.value;
  }
  get email() {
    return this.managerform.get('email')?.value;
  }
  



}
