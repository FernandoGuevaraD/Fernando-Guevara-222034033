import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ProductProcessService } from '../../services/product-process.service';

@Component({
  selector: 'app-register-products',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, PasswordModule,CommonModule],
  templateUrl: './register-products.component.html',
  styleUrl: './register-products.component.css'
})
export class RegisterProductsComponent {
  registroForm: FormGroup;

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
      const {NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta} = this.registroForm.value;
      this.ProductProcessService.register(NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta).subscribe({
        next: Response => {
          console.log('Producto registrado exitosamente', Response);
        },
        error: error =>{
          console.error('Error en el registro del Producto', error);
        },
        complete: () =>
        {
            console.log('Proceso de registro completado');
        }          
      })
    } 
  }


}
