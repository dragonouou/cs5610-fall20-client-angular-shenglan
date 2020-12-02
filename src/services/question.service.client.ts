import {Injectable} from '@angular/core';
const Url = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qId: string) =>
    fetch(`${Url}/${qId}/questions`)
      .then(response => response.json())
}
