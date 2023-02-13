import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  data:any;
  // Getting the Values from app component on routing and taking in a variable to display in html
    constructor(private router: Router, private route:ActivatedRoute){
      this.data = this.router.getCurrentNavigation()?.extras.state?.['person'];
      console.log(this.data)
      // this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
      console.log(this.router.getCurrentNavigation());
    
    }
}
