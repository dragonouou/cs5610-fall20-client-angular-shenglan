import { Component, OnInit } from '@angular/core';
import {QuestionServiceClient} from '../../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [];
  quizId = '';
  grading = false;
  submitQuiz = () => {
    this.grading = true;
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result));
  }

  constructor(private svc: QuestionServiceClient,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
