import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' 
})
export class LoginComponent {

  loginForm= this.fb.group(
    {
      usuario: ['', [Validators.required , Validators.name]],
      Password: ['', [Validators.required, Validators.name]]
    }
  );

constructor(private fb: FormBuilder){} 
//fb hereda los elementos de formbuilder

}
