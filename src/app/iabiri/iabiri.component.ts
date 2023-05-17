import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-iabiri',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './iabiri.component.html',
  styleUrls: ['./iabiri.component.css']
})
export class IabiriComponent {

}
