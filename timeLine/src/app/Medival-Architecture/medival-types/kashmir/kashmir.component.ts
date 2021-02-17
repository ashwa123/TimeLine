import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import './kashmir'

@Component({
  selector: 'app-kashmir',
  templateUrl: './kashmir.component.html',
  styleUrls: ['./kashmir.component.css']
})
export class KashmirComponent implements OnInit {

  style: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.style = params['style']
      }
    )
    if(this.style == 'temples') {
      this.style = 'temples';
    } else if (this.style == 'islamic') {
      this.style = 'islamic';
    } else if (this.style == 'gardens') {
      this.style = 'gardens';
    }
  }

}
