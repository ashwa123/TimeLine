import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import './imgcor.js';

declare var navSlide: any;

@Component({
  selector: 'app-image-courtsey',
  templateUrl: './image-courtsey.component.html',
  styleUrls: ['./image-courtsey.component.css']
})
export class ImageCourtseyComponent implements OnInit {

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
