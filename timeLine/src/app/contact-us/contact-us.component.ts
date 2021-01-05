import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback/feedback.service';
import { Meta } from '@angular/platform-browser';

declare var navSlide: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  LogoUrl = '../../assets/Logo.png';
  feedbackForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private service: FeedbackService,
    private metaTagService: Meta
    ) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      comments : ['', [Validators.required]]
    });

    this.metaTagService.addTags([
      { name: 'description', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'keywords', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { charset: 'UTF-8' }
    ]);
  }

  submit() {
    this.service.postmessage(this.feedbackForm.value)
      .subscribe(response => {
          alert('Thank you for your feedback');
      },
      err => {
        console.log(err.responseText);
        console.log({ err });
      });
  }


}
