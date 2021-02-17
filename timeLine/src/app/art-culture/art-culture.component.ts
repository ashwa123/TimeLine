import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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

  medival() {
    this.router.navigate(['medival-architecture'])
  }

}
