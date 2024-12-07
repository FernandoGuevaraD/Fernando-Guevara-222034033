import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductProcessService } from '../../services/product-process.service';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { MessageBundle } from '@angular/compiler';

@Component({
  selector: 'app-modify-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    MessageModule],
  templateUrl: './modify-products.component.html',
  styleUrl: './modify-products.component.css'
})
export class ModifyProductsComponent {
  updateForm: FormGroup;

  succesMessage: string = ''; // variables usadas en el front.
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private ProductProcessService: ProductProcessService) {
    this.updateForm = this.fb.group({
        productId: ['', Validators.required],
        NameProduct: ['', Validators.required],
        ProductPriceCompra: ['', Validators.required],
        Cantidad: ['', Validators.required],
        ProductPriceVenta: ['', Validators.required],
    });

    console.log(this.updateForm); // Esto debería mostrar el formulario en la consola
}

    onUpdate(): void {
      if (this.updateForm.valid) {
        const { productId, NameProduct, ProductPriceCompra,Cantidad,ProductPriceVenta} = this.updateForm.value;
        this.ProductProcessService.updateProduct(productId,NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta).subscribe({
          next: () => { // se puede trabajar con if anidados.
            this.succesMessage = 'usuario actualizado exitosamente';
            this.errorMessage = '';
            this.updateForm.reset();
          },
          error: () => {
            this.errorMessage = 'error al actualizar al usuario';
            this.succesMessage = '';
          },
          complete: () => console.log('proceso de actualizar completado'),
        });
      }
    };

}
