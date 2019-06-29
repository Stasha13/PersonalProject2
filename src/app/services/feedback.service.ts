import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable, of } from 'rxjs'

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getFeedback(){
  return this.http.get('/server/api/v1/feedback');
  }

  getFeedbackWith(id: number){
  	return this.http.get('/server/api/v1/feedback/' + id);
  }

  createFeedbackEntry(feedback){
    let body = JSON.stringify(feedback);
  	return this.http.post('/server/api/v1/feedback',body,httpOptions);
  }

  deleteFeedbackWith(id: number){
  	return this.http.delete('/server/api/v1/feedback/' + id);
  }
}
