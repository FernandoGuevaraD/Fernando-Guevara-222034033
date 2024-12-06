import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register-products',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, PasswordModule,CommonModule],
  templateUrl: './register-products.component.html',
  styleUrl: './register-products.component.css'
})
export class RegisterProductsComponent implements OnInit{
  register_productform: FormGroup = null!;
  productName: string = '';
  purchasePrice: number | null = null;
  quantity: number | null = null;
  salePrice: number | null = null;

  constructor(private fb: FormBuilder){

  }

  ngOnInit()  { 
    this.register_productform = this.fb.group({
      productName: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      quantity: ['', Validators.required],
      salePrice : ['',Validators.required]
    });
  }


    
    /* estas variable solo estan para que corra el servidor aqui ya toa meterles los servicios*/
  registerProduct() {
    console.log('Producto registrado:', {
      nombre: this.productName,
      precioCompra: this.purchasePrice,
      cantidad: this.quantity,
      precioVenta: this.salePrice,
    });

    if (!this.productName || !this.purchasePrice || !this.quantity || !this.salePrice) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    alert('Producto registrado exitosamente.');
  }
}
