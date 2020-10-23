import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentserviceService } from '../shared/commentservice.service.js';

declare var navSlide: any;

@Component({
  selector: 'app-social-reforms',
  templateUrl: './social-reforms.component.html',
  styleUrls: ['./social-reforms.component.css']
})
export class SocialReformsComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';
  commentForm: FormGroup;
  category = 'socialreforms';
  postComments: any[];
  avatar = '../../assets/logo/avatar.png';

  constructor(private Formbuilder: FormBuilder, private service: CommentserviceService, private router: Router) { }

  ngOnInit(): void {
    this.commentform();
    // this.getcomment();
  }

  commentform() {
    this.commentForm = this.Formbuilder.group({
      comment: [''],
      name: [''],
      email: ['']
    });
  }

  home() {
    this.router.navigate(['home']);
  }

  about() {
    this.router.navigate(['about']);
  }

  contact() {
    this.router.navigate(['contact']);
  }

  use() {
    this.router.navigate(['use']);
  }

  imagecourtesy() {
    this.router.navigate(['imagecourtesy']);
  }

  getcomment() {
    this.service.getComment(this.category).subscribe(response => {
      console.log(response['resp']);
      this.postComments = response['resp'];
    });
  }

  comment() {
    this.service.postComment(this.commentForm.value, this.category).subscribe(response => {
      console.log(response);
      this.getcomment();
      this.commentform();
    });
  }

}
