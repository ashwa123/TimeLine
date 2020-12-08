import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import './aboutus.js';

declare var navSlide: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
