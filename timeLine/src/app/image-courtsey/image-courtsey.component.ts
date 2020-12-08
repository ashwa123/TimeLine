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

}
