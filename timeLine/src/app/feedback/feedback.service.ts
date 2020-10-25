import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // private api = 'https://mailthis.to/timeline@trends';

  constructor(private http: HttpClient) { }

  // postmessage(data: any){
  //   // return this.http.post(this.api, data,{responseType: 'text'});
  //   return this.http.post(this.api, {
  //     _after : 'https://quiet-brushlands-07311.herokuapp.com',
  //     message : data
  //   } );
  // }

  postmessage(data: any) {
    return this.http.post('sendemail/', data);
  }
}

// .pipe(
//   map(
//     (response) => {
//       if (response) {
//         return response;
//       }
//     },
//     (error : any) => {
//       return error
//     }
//   )
// )
