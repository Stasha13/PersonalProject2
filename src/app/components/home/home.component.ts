import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feedbackform: FormGroup;
  validMessage: string = "";

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackform = new FormGroup({
      name: new FormControl('', Validators.required),
      solveProblem: new FormControl('', Validators.required),
      explainConcept: new FormControl('', Validators.required),
      presentIdeas: new FormControl('', Validators.required),
      timeManagement: new FormControl('', Validators.required),
      strengths: new FormControl('', Validators.required),
      weaknesses: new FormControl('', Validators.required),
      improvements: new FormControl('', Validators.required)
    });
  }

    submitEntry(){
      
      if (this.feedbackform.valid){
        this.validMessage = "Your feedback has been submitted!"
        this.feedbackService.createFeedbackEntry(this.feedbackform.value).subscribe(
          data => {
            this.feedbackform.reset();
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        )
      } else {
        this.validMessage = "Please fill out the form before submitting!"
      }
    }

}
