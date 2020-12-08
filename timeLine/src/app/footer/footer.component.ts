import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home']);
  }

  about() {
    this.router.navigate(['about']);
  }

  contact() {
    this.router.navigate(['contact'])
  }

  use() {
    this.router.navigate(['use']);
  }

  imagecourtsey() {
    this.router.navigate(['imagecourtesy']);
  }

}
