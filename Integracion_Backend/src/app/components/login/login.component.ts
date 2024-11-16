import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { UserService } from '../../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ InputTextModule, CommonModule, HttpClientModule,CardModule, ReactiveFormsModule, ButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform: FormGroup = null!;

  constructor(private fb: FormBuilder, private userService: UserService){
    this.loginform = this.fb.group({
    
      Usname:['',Validators.required],
      Usemail:['',[Validators.required, Validators.email]],

    })
  }

  get Usname() {
    return this.loginform.get('Usname')?.value;
  }

  get Usemail() {
    return this.loginform.get('Usemail')?.value;
  }

  /*onSubmit(){
    if(this.loginform.valid){
      const{Usname, Usemail}= this.loginform.value;
      this.userService.loginUser(Usname, Usemail).subscribe(Response => {console.log("Exitoso",Response)})
      //el suscribe lo que hace es retornar un error de http
      console.log(this.loginform.value);
    }else{
      console.log('Formulario invalido');
    }
  }*/

}
