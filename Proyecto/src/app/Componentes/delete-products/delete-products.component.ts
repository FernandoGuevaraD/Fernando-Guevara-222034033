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
  selector: 'app-delete-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    MessageModule
  ],
  templateUrl: './delete-products.component.html',
  styleUrl: './delete-products.component.css'
})
export class DeleteProductsComponent {
  deleteForm: FormGroup;

  succesMessage: string = ''; 
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private ProductProcessService: ProductProcessService){
    this.deleteForm = this.fb.group({
      productId: ['', Validators.required]
    });
  }

  onDelete(): void {
    if (this.deleteForm.valid) {
      const { productId } = this.deleteForm.value;
      this.ProductProcessService.deleteProduct(productId).subscribe({
        next: () => {
          this.succesMessage = 'Usuario eliminado exitosamente.';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: () => {
          this.errorMessage = 'Error al eliminar el usuario.';
          this.succesMessage = '';
        },
        complete: () => console.log('Proceso de eliminación completado'),
      });
    }
  } 
}
