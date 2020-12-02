import {Injectable} from '@angular/core';

const Url = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`${Url}`)
      .then(response => response.json())

  findQuizById = (qId: any) =>
    fetch(`${Url}/${qId}`)
      .then(response => response.json())
}
