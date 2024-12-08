import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductProcessService } from '../../services/product-process.service';
import { ActivatedRoute } from '@angular/router'; // Importamos ActivatedRoute
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
  styleUrls: ['./delete-products.component.css'] // Corregimos el nombre del atributo
})
export class DeleteProductsComponent implements OnInit {
  deleteForm: FormGroup;
  successMessage: string = ''; 
  errorMessage: string = '';
  productId: string | null = null; // Para almacenar el ID recibido de la URL

  constructor(
    private fb: FormBuilder, 
    private ProductProcessService: ProductProcessService,
    private route: ActivatedRoute // Inyectamos ActivatedRoute
  ) {
    this.deleteForm = this.fb.group({
      productId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Capturamos el parámetro `id` de la URL y lo asignamos al formulario
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.deleteForm.patchValue({ productId: this.productId });
    }
  }

  onDelete(): void {
    if (this.deleteForm.valid) {
      const { productId } = this.deleteForm.value;
  
      // Limpia los mensajes antes de la solicitud
      this.successMessage = '';
      this.errorMessage = '';
  
      this.ProductProcessService.deleteProduct(productId).subscribe({
        next: () => {
          // Si se elimina correctamente, el backend responde con un código 200
          this.successMessage = 'Producto eliminado exitosamente.';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: (err) => {
          // Manejo del código 404 u otros errores
          if (err.status === 404) {
            this.errorMessage = 'El producto no existe o ya fue eliminado.';
          } else {
            this.errorMessage = 'Hubo un error al intentar eliminar el producto.';
          }
          this.successMessage = '';
        },
        complete: () => {
          console.log('Proceso de eliminación completado');
        },
      });
    } else {
      this.errorMessage = 'Por favor, ingresa un ID válido para eliminar el producto.';
      console.error('Formulario inválido:', this.deleteForm.errors);
    }
  }
}
