import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


declare var navSlide: any;


@Component({
  selector: 'app-modern-history',
  templateUrl: './modern-history.component.html',
  styleUrls: ['./modern-history.component.css']
})
export class ModernHistoryComponent implements OnInit {

  @ViewChild('swipercontainer') swipercontainer: ElementRef;

  LogoUrl = '../../assets/Logo.png';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  ngAfterViewInit(){
    console.log(this.swipercontainer);
  }

  association(){
    this.router.navigate(['associationinhistory']);
  }

  personalities(){
    this.router.navigate(['famouspersonalities'])
  }

  socialreforms(){
    this.router.navigate(['socialreforms'])
  }

  comingsoon(){}


  modernhistorytimeline() {
    this.router.navigate(['modernhistorytimeline']);
  }
}
