import {Injectable} from '@angular/core';

const Url = 'https://cs5610-server-node-shenglan.herokuapp.com/api/quizzes';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`${Url}`)
      .then(response => response.json())

  findQuizById = (qId: any) =>
    fetch(`${Url}/${qId}`)
      .then(response => response.json())
}
