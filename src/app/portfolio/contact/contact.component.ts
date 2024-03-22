import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule,NavbarComponent,MatCardModule,MatSelectModule,MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
