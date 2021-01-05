import { Component, OnInit } from '@angular/core';
import { Image } from '@fnxone/ngx-photoswipe';
import { Router } from '@angular/router';
import './gallery.js';
import { Meta } from '@angular/platform-browser';

declare var navSlide: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [
    {
      img: '../../assets/gallery/ig1.jpg',
      thumb: '../../assets/gallery/ig1.jpg',
      description: 'this is working',
      width: 3000,
      height: 3000,
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg',
      description: 'You may dynamically define slide object properties directly before PhotoSwipe reads them, use gettingData event (more info in API section of docs). For example, this technique can be used to serve different images for different screen sizes.',
      width: 1000,
      height: 1000,
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg',
      description: 'Image 3',
      width: 500,
      height: 500,
    }
];


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
