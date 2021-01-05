import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import './how.js';

declare var navSlide: any;

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css']
})
export class HowToUseComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png'

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


}
