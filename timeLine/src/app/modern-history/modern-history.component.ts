import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
    private router: Router,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'description', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'keywords', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { charset: 'UTF-8' }
    ]);
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
