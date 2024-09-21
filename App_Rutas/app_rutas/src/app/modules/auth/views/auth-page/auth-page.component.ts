import { Component } from '@angular/core';
import { SidebarPageComponent } from '../../../sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from '../../../sidetop/views/sidetop-page/sidetop-page.component';
import { ContentPageComponent } from '../../../content/views/content-page/content-page.component';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [SidebarPageComponent, SidetopPageComponent, ContentPageComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
