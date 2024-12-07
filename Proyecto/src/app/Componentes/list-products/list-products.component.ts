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
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    MessageModule,
    TableModule
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  products: any[] = []; 
  errorMessage: String = '';

  constructor(private ProductProcessService: ProductProcessService, private router: Router){

    this.loadUsers();
  }

  loadUsers(): void {
    this.ProductProcessService.getProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.products = products;
      },
      error: () => {
        this.errorMessage = 'Error al cargar los usuarios.';
      }
    });
  }

  onEdit(productId: number): void {
    this.router.navigate(['/modify', productId]); // Redirige al componente de edición
  }
  
  onDelete(productId: number): void {
    this.router.navigate(['/delete', productId]); // Redirige al componente de eliminación
  }
  

}
