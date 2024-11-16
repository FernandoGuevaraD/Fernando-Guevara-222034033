import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { UserService } from '../../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, HttpClientModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  userform: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService){
    this.userform = this.fb.group({
    
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required, Validators.pattern]]

    })
  }
  get firstName() {
    return this.userform.get('firstName')?.value;
  }
  get lastName() {
    return this.userform.get('lastName')?.value;
  }
  get email() {
    return this.userform.get('email')?.value;
  }
  get phone() {
    return this.userform.get('phone')?.value;
  }


}
