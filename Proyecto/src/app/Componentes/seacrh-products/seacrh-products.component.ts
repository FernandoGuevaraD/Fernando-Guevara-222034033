import { Component } from '@angular/core';
import { ProductProcessService } from '../../services/product-process.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seacrh-products',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './seacrh-products.component.html',
  styleUrl: './seacrh-products.component.css'
})
export class SeacrhProductsComponent {
  products: any[] = []; 
  productId: string = ''; 
  errorMessage: string = ''; 
  isLoading: boolean = false; 

  constructor(private ProductProcessService: ProductProcessService) {}

  searchProductById(): void {
    if (!this.productId) {
      this.errorMessage = 'Por favor, ingresa un ID válido.';
      return;
    }
    
    this.isLoading=true;
    this.ProductProcessService.getProductsById(this.productId).subscribe({
      next: (product) => {
        this.products = product ? [product] : [];
        this.errorMessage = this.products.length ? '' : 'no se encontro ningún Producto con este ID.';
      },
      error: () => {
        this.errorMessage = 'Error al buscar el producto';
        this.products = [];
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
