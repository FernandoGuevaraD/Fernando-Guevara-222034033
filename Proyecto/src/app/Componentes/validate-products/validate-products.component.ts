import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProductProcessService } from '../../services/product-process.service';

@Component({
  selector: 'app-validate-products',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule, HttpClientModule],
  templateUrl: './validate-products.component.html',
  styleUrl: './validate-products.component.css'
})
export class ValidateProductsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder ,private ProductProcessService: ProductProcessService){ 
    this.userForm = this.fb.group({ 
      NameProduct: ['', Validators.required],
      ProductPriceCompra: ['', Validators.required],
      Cantidad: ['', Validators.required],
      ProductPriceVenta : ['',Validators.required]
    });
  }

    onSubmit(){
      if(this.userForm.valid){
        const {NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta}= this.userForm.value;
        this.ProductProcessService.validate(NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta).subscribe(Response => {console.log("validación exitosa", Response)})
        console.log(this.userForm.value);
      }else{
        console.log('Datos invalido');
      }
    }

  }

