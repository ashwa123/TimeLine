import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


}
