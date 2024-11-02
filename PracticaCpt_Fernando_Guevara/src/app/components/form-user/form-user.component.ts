import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  userform: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.userform = this.fb.group({
    
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phone:['',Validators.required,Validators.pattern]

    })
  }

  onsubmit (){
    if(this.userform.valid){
      console.log(this.userform.value);
    }
    else{
      console.log("formulario invalido")
    }
  }
}
