import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import './mugal-forts'

@Component({
  selector: 'app-mughal-forts',
  templateUrl: './mughal-forts.component.html',
  styleUrls: ['./mughal-forts.component.css']
})
export class MughalFortsComponent implements OnInit {

  style: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.style = params['style']
      }
    )
    if(this.style == 'agra') {
      this.style = 'agra';
    } else if (this.style == 'fatehpur') {
      this.style = 'fatehpur';
    } 
  }
}
