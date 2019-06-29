import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public feedback;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  	this.getFeedback();
  }

  getFeedback(){
  	this.feedbackService.getFeedback().subscribe(
  		data => {this.feedback = data},
  		err => console.error(err),
  		() => console.log('feedback loaded')
  		);
  }

  deleteRow(id:number){
    this.feedbackService.deleteFeedbackWith(id).subscribe(
      data => {;
        this.getFeedback();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    )
    // for(let i =0; i< this.feedback.length; i++){
    //   if (this.feedback[i].id === id){
    //     this.feedback.splice(i,1);
    //   }
    // }
  }

}
