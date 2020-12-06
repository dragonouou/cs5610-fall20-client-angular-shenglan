import {Component, Input, OnInit} from '@angular/core';
import {QuizServiceClient} from '../../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizAttemptServiceClient} from '../../../services/quizAttempt.service.client';

@Component({
  selector: 'app-quiz-attempts',
  templateUrl: './quiz-attempts.component.html',
  styleUrls: ['./quiz-attempts.component.css']
})
export class QuizAttemptsComponent implements OnInit {
  courseId = '';
  @Input()
  quizId = '';
  attempts = [];
  constructor(private service: QuizAttemptServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAttemptsForQuiz(this.quizId)
        .then(attempts => this.attempts = attempts);
    });
  }
}
