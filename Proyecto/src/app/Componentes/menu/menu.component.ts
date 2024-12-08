import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class ProductMenuComponent {
  constructor(private router: Router) {}
  products= ''; 

  onAdd(): void {
    this.router.navigate(['/register']); // Redirige a la página para ingresar un producto
  }

  onEdit(): void {
    this.router.navigate(['/modify', this.products ]); // Redirige a la página para modificar un producto
  }

  onDelete(): void {
    this.router.navigate(['/delete', this.products ]); // Redirige a la página para eliminar un producto
  }

  onSearch(): void {
    this.router.navigate(['/search']); // Redirige a la página para buscar productos
  }

  onValidate(): void {
    this.router.navigate(['/validate']); // Redirige a la página para validar productos
  }

  onList(): void {
    this.router.navigate(['/list-products']); // Redirige a la página para listar productos
  }
}
