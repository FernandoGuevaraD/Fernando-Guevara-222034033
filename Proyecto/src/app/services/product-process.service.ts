import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ProductProcessService {
  apiUrl= "https://localhost:7078/api/Products";

  constructor(private http:HttpClient) { }

  register(NameProduct: string, ProductPriceCompra: string, Cantidad:string, ProductPriceVenta:string): Observable<any>{ //tipo de dato Observable, observable es un arreglo que va a recibir los datos (username y password)
    const body={NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta}
    return this.http.post(`${this.apiUrl}/register`,{NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta})

  }

  updateProduct (id: string, NameProduct: string, ProductPriceCompra: string,Cantidad:string, ProductPriceVenta:string): Observable<any>{
    const body = { NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta};
    return this.http.put(`${this.apiUrl}/update/${id}`, body);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  validate(NameProduct: string, ProductPriceCompra: string,Cantidad:string, ProductPriceVenta:string): Observable<any>{ 
    const body={NameProduct,ProductPriceCompra,Cantidad,ProductPriceVenta}
    return this.http.post(`${this.apiUrl}/validate`, body)

  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getProducts`);
  }

  getProductsById(productId: String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getProductById/${productId}`);
  }

}
