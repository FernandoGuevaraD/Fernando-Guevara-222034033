import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormUserComponent } from "./components/form-user/form-user.component";
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { FormLicenseComponent } from './components/form-license/form-license.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormUserComponent, FormManagerComponent, FormLicenseComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaCpt_fernandoguevara';

  loading: boolean = false;

  load() {
      this.loading = true;
      
      setTimeout(() => {
        this.loading = false;
      }, 2000); 
    }
}
