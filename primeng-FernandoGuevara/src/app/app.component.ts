import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,FormularioPlantilla1Component,PasswordModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeNG-Fernando_guevara';
}
