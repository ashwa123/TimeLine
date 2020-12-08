import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentserviceService } from '../shared/commentservice.service.js';
import './Navigationbar.js';

declare var navSlide: any;


@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';
  commentForm: FormGroup;
  category = 'association';
  postComments: any[];
  avatar = '../../assets/logo/avatar.png';

  constructor(private router: Router, private Formbuilder: FormBuilder, private service: CommentserviceService) { }

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
