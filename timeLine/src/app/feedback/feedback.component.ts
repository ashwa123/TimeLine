import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private service: FeedbackService) { }

  ngOnInit(): void {

    this.feedbackForm = this.fb.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      comments : ['', [Validators.required]]
    })
  }

  submit() {
    this.service.postmessage(this.feedbackForm.value)
      .subscribe(response =>{
        // location.href = 'https://mailthis.to/confirm'
        console.log(response);
      },
      err => {
        console.log(err.responseText)
        console.log({ err });
      });
  }

}
