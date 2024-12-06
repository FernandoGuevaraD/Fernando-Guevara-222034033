import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';

import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CalendarModule,InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, PasswordModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup = null!;
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  birthDate: Date | null = null;
  

  constructor(private fb: FormBuilder){

  }
  ngOnInit()  { 
    this.registerform = this.fb.group({
      username: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6)]],
      birthDate : ['',Validators.required]
    });
  }



    /* estas variable solo estan para que corra el servidor aqui ya toa meterles los servicios*/
    register() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      console.log('Usuario registrado:', {
        username: this.username,
        email: this.email,
        birthDate: this.birthDate,
      });
    }

      // Método para verificar si las contraseñas coinciden
      passwordsMatch(): boolean {
        const password = this.registerform.get('password')?.value;
        const confirmPassword = this.registerform.get('confirmPassword')?.value;
        return password === confirmPassword;
      }
  }



