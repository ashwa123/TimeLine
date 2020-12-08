import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import './env.js';

declare var navSlide: any;

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
