import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductProcessService } from '../../services/product-process.service';
import { ActivatedRoute } from '@angular/router'; // Importamos ActivatedRoute
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';

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
    MessageModule
  ],
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.css'] // Corregido: styleUrl a styleUrls
})
export class ModifyProductsComponent implements OnInit {
  updateForm: FormGroup;
  successMessage: string = ''; 
  errorMessage: string = '';
  productId: string | null = null; // Para capturar el parámetro `id` de la URL

  constructor(
    private fb: FormBuilder,
    private ProductProcessService: ProductProcessService,
    private route: ActivatedRoute // Inyectamos ActivatedRoute
  ) {
    this.updateForm = this.fb.group({
      productId: ['', Validators.required],
      NameProduct: ['', Validators.required],
      ProductPriceCompra: ['', Validators.required],
      Cantidad: ['', Validators.required],
      ProductPriceVenta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Capturamos el parámetro `id` de la URL
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.updateForm.patchValue({ productId: this.productId });
      this.loadProductDetails(this.productId); // Llamamos a una función para cargar los detalles del producto
    }
  }

  // Método para cargar detalles del producto desde el backend
  private loadProductDetails(productId: string): void {
    this.ProductProcessService.getProductsById(productId).subscribe({
      next: (product) => {
        // Rellenamos el formulario con los datos del producto
        this.updateForm.patchValue({
          NameProduct: product.name,
          ProductPriceCompra: product.purchasePrice,
          Cantidad: product.quantity,
          ProductPriceVenta: product.salePrice
        });
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los detalles del producto.';
        console.error('Error al obtener el producto:', err);
      }
    });
  }

  onUpdate(): void {
    if (this.updateForm.valid) {
      const { productId, NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta } = this.updateForm.value;

      // Reiniciamos los mensajes antes de hacer la solicitud
      this.successMessage = '';
      this.errorMessage = '';

      this.ProductProcessService.updateProduct(productId, NameProduct, ProductPriceCompra, Cantidad, ProductPriceVenta).subscribe({
        next: () => {
          this.successMessage = 'Producto actualizado exitosamente.';
          this.errorMessage = '';
          this.updateForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Error al actualizar el producto.';
          console.error('Error al actualizar el producto:', err);
          this.successMessage = '';
        },
        complete: () => {
          console.log('Proceso de actualización completado.');
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      console.error('Formulario inválido:', this.updateForm.errors);
    }
  }
}
