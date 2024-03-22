import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(public router:Router){

}
  onHome(){
    this.router.navigate(['./portfoli-website/home'])
  }
  onContact(){
    this.router.navigate(['./portfoli-website/contact'])
  }
  onTrip(){
    const tripSelection = document.getElementById('trip-section')
    if(tripSelection){
      tripSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  onAbout(){
    this.router.navigate(['./portfoli-website/about'])
  }
}