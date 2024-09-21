import { Component } from '@angular/core';
import { AuthPageComponent } from '../../../auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from '../../../sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from '../../../sidetop/views/sidetop-page/sidetop-page.component';
import { PrimePageComponent } from '../../../UI/views/prime-page/prime-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AuthPageComponent, SidebarPageComponent, SidetopPageComponent, PrimePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
