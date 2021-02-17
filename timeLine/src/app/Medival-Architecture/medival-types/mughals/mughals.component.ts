import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import './mughal.js';
import './shershah.js';

@Component({
  selector: 'app-mughals',
  templateUrl: './mughals.component.html',
  styleUrls: ['./mughals.component.css']
})
export class MughalsComponent implements OnInit {

  style: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.style = params['style']
      }
    )
    if(this.style == 'mughal') {
      this.style = 'mughal';
    } else if (this.style == 'shershah') {
      this.style = 'shershah';
    } else if (this.style == 'sikhRajput') {
      this.style = 'sikhRajput';
    } 
  }

}
