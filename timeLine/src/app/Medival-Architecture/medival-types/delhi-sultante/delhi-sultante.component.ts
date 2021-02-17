import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import './delhi-sultante';

@Component({
  selector: 'app-delhi-sultante',
  templateUrl: './delhi-sultante.component.html',
  styleUrls: ['./delhi-sultante.component.css']
})
export class DelhiSultanteComponent implements OnInit {


  style: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.style = params['style']
      }
    )
    if(this.style == 'imperial') {
      this.style = 'imperial';
    } else if (this.style == 'provincial') {
      this.style = 'provincial';
    }
  }

}
