import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import './art.js';

declare var navSlide: any;

@Component({
  selector: 'app-art-culture',
  templateUrl: './art-culture.component.html',
  styleUrls: ['./art-culture.component.css']
})
export class ArtCultureComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['home']);
  }

  about(){
    this.router.navigate(['about']);
  }

  contact(){
    this.router.navigate(['contact'])
  }

  use(){
    this.router.navigate(['use']);
  }

  imagecourtesy(){
    this.router.navigate(['imagecourtesy']);
  }

}
