import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{CommonModule} from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule,MatButtonModule,MatSlideToggleModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showGrid = false;
  showGrid1 = false;
  tripGrid = false;
  days = 100;


  isChecked(){
    this.showGrid = !this.showGrid;
  }
  isChecked1(){
    this.showGrid1 = !this.showGrid1;
  }

  trips = [
    {name:'Singapore',days:'5'},
    {name:'Malyasia',days:'5'},
    {name:'Dubai',days:'8'}
  ]

  isTrips(){
    this.tripGrid = !this.tripGrid;
  }
}
