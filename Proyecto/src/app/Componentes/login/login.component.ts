import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, PasswordModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = null!;

  constructor(private fb: FormBuilder){

  }
  ngOnInit()  { 
    this.loginform = this.fb.group({
      name: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],


    });
  
  }
  /* estas variable solo estan para que corra el servidor aqui ya toa meterles los servicios*/
  username: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    
  }

}
