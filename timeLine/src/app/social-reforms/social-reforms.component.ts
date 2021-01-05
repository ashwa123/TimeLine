import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentserviceService } from '../shared/commentservice.service.js';
import { Meta } from '@angular/platform-browser';

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

  constructor(private Formbuilder: FormBuilder,
    private service: CommentserviceService,
    private router: Router,
    private metaTagService: Meta
    ) { }

  ngOnInit(): void {
    this.commentform();
    this.getcomment();
    this.metaTagService.addTags([
      { name: 'description', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'keywords', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { charset: 'UTF-8' }
    ]);
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
