import { Component, OnInit } from '@angular/core';
import {QuizAttemptServiceClient} from '../../../services/quizAttempt.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  attempt = {score: '', answers: []};
  grading = true;
  questions = this.attempt.answers;
  constructor(private service: QuizAttemptServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.findAttemptById(params.attemptId)
        .then(attempt => this.attempt = attempt);
    });
  }

}
