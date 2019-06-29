import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {

  public feedbackEntry;

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFeedbackEntry(this.route.snapshot.params.id);
  }

  getFeedbackEntry(id:number) {
    this.feedbackService.getFeedbackWith(id).subscribe(
      data => {
        this.feedbackEntry = data;
      },
      err => console.error(err),
      () => console.log ('Feedback loaded!')
    );
  }

}
