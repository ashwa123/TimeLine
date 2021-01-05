import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommentserviceService } from '../shared/commentservice.service.js';
import './Navigationbar.js';

declare var navSlide: any;

@Component({
  selector: 'app-famous-personalities',
  templateUrl: './famous-personalities.component.html',
  styleUrls: ['./famous-personalities.component.css']
})
export class FamousPersonalitiesComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';
  commentForm: FormGroup;
  category = 'personalities';
  postComments: any[];
  avatar = '../../assets/logo/avatar.png';

  constructor(private router: Router,
    private Formbuilder: FormBuilder,
    private service: CommentserviceService,
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
