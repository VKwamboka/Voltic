import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-social-impact',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.css']
})
export class SocialImpactComponent {

}
