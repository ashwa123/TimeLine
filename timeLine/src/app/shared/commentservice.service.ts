import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {

  constructor(private http: HttpClient) { }

  postComment(data, category) {
    // const url = 'comment' + '/' + category;
    return this.http.post('comment/' + category, data);
  }

  getComment(category) {
    // const url = 'comment' + '/' + category;
    return this.http.get('comment/' + category);
  }
}
