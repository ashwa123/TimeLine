import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import './home.js';

declare var navSlide: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('dgcontainer') dgcontainer: ElementRef
  // @ViewChild('navbarTogglerDemo02') navbarTogglerDemo02: ElementRef

  LogoUrl = '../../assets/Logo.png';


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // new navSlide();
  }

  ngAfterViewInit() {
    console.log(this.dgcontainer);
  }

  modernhistory() {
    this.router.navigate(['modern-history']);
  }

  artculture() {
    this.router.navigate(['art&culture']);
  }

  environment() {
    this.router.navigate(['environment']);
  }

  gallery() {
    this.router.navigate(['gallery']);
  }

}
