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
