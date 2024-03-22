import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  youtubeLink = 'https://material.angular.io/components/card/examples'
  mailID = 'Gocodtrip@gmail.com'
  constructor(public router:Router){

  }
    onHome(){
      window.scrollTo({top:0,behavior:'smooth'})
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
