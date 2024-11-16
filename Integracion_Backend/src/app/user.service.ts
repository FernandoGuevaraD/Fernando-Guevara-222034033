import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //La url es la url base y esa se la puede extender dependiendo de lo que se quiera utilizar
  //El constructor se le dice que es lo que va a utilizar, en este caso se va utilizar una variable
  //de tipo privado de tipo HttpClient
  // Url del Api almacenada de forma privada
  //defino esta url que va recibir usuario y contraseña

  apiUrl = "https://localhost:7083/Cpt/Usuario"
  
  constructor(private http: HttpClient) { }


  register(
    username: string, 
    userlastname:string, 
    useremail:string,
    userphone:string, 
    managername: string, 
    manageremail:string,
    fechaInicio: string, 
    fechaFinalizacion:string, 
    texto:string 
    
    ):Observable<any>{
    return this.http.post( `${this.apiUrl}/register`, {
      username, 
      userlastname, 
      useremail,
      userphone, 
      managername,
      manageremail,
      fechaInicio,
      fechaFinalizacion,
      texto})
  }

  loginUser (Usname: string, Usemail:string):Observable<any>{
    
    return this.http.post( `${this.apiUrl}/loginUser`, {Usname, Usemail})
  }



}
