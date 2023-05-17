import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';



interface Companies {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,FooterComponent,MatSelectModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  selectedValue!: string;

  companies: Companies[] = [
    {value: 'iabiri', viewValue: 'iAbiri Solution'},
    {value: 'boss', viewValue: 'BOSS Enterprise System'},
    {value: 'investor', viewValue: 'Investor Query'},
    {value:'customer', viewValue:'Customer Query'},
    {value:'other', viewValue:'Other'}
  ];

  constructor() { }

  ngOnInit() { }

  onSelect(option: any) {
    this.selectedValue= option.value;
  }

}
