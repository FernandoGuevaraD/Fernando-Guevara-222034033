import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProductProcessService } from '../../services/product-process.service';
import { MessagesModule } from 'primeng/messages';
import { MessageBundle } from '@angular/compiler';

import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-validate-products',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule, HttpClientModule, MessagesModule, MessageModule],
  templateUrl: './validate-products.component.html',
  styleUrl: './validate-products.component.css'
})
export class ValidateProductsComponent {
  userForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder ,private ProductProcessService: ProductProcessService){ 
    this.userForm = this.fb.group({ 
      NameProduct: ['', Validators.required],
      ProductPriceCompra: ['', Validators.required],
      Cantidad: ['', Validators.required],
      ProductPriceVenta : ['',Validators.required]
    });
  }

 

  onSubmit() {
    if (this.userForm.valid) {
      const { NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta } = this.userForm.value;
  
      // Validar si los campos son de tipo string
      if (
        typeof NameProduct === 'string' &&
        typeof ProductPriceCompra === 'string' &&
        typeof Cantidad === 'string' &&
        typeof ProductPriceVenta === 'string'
      ) {
        this.successMessage = 'Los datos son correctos.';
        this.errorMessage = null;
  
        // Llamada al servicio (si es necesario)
        this.ProductProcessService
          .validate(NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta)
          .subscribe(
            (response) => console.log('Validación exitosa', response),
            (error) => console.error('Error en la validación', error)
          );
  
        console.log('Formulario válido:', this.userForm.value);
      } else {
        this.errorMessage = 'Algunos campos no son de tipo string.';
        this.successMessage = null;
      }
    } else {
      this.errorMessage = 'Datos inválidos. Revisa el formulario.';
      this.successMessage = null;
    }
  }
  
  

  }

