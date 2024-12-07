import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ProductProcessService } from '../../services/product-process.service';
import { MessageModule } from 'primeng/message';
import { MessageBundle } from '@angular/compiler';

@Component({
  selector: 'app-register-products',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, PasswordModule,CommonModule, MessageModule],
  templateUrl: './register-products.component.html',
  styleUrl: './register-products.component.css'
})
export class RegisterProductsComponent {
  registroForm: FormGroup;
  successMessage: string = ''; 
  errorMessage: string = '';
  constructor(private fb: FormBuilder , private ProductProcessService: ProductProcessService){
    this.registroForm = this.fb.group({
      NameProduct: ['', Validators.required],
      ProductPriceCompra: ['', Validators.required],
      Cantidad: ['', Validators.required],
      ProductPriceVenta : ['',Validators.required]
    });
  }

  // no se porque hiciste esto si esto va en el constructor.
  /*
  ngOnInit()  { 
    this.register_productform = this.fb.group({
      productName: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      quantity: ['', Validators.required],
      salePrice : ['',Validators.required]
    });
  } */

    /* estas variable solo estan para que corra el servidor aqui ya toa meterles los servicios*/
    registerProduct() {
      if (this.registroForm.valid) {
        const { NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta } = this.registroForm.value;
    
        // Limpia los mensajes antes de la solicitud
        this.successMessage = '';
        this.errorMessage = '';
    
        this.ProductProcessService.register(NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta).subscribe({
          next: (response) => {
            // Si el registro es exitoso
            this.successMessage = 'Producto registrado exitosamente.';
            this.errorMessage = '';
            console.log('Producto registrado exitosamente', response);
            this.registroForm.reset(); // Limpia el formulario tras un registro exitoso
          },
          error: (error) => {
            // Si ocurre un error en el registro
            this.errorMessage = 'Hubo un error al registrar el producto. Por favor, inténtalo de nuevo.';
            this.successMessage = '';
            console.error('Error en el registro del producto', error);
          },
          complete: () => {
            console.log('Proceso de registro completado');
          }
        });
      } else {
        // Manejo de formulario inválido
        this.errorMessage = 'Por favor, completa todos los campos correctamente antes de enviar.';
        console.error('Formulario inválido:', this.registroForm.errors);
      }
    }
    


}
