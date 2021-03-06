import {Injectable} from '@angular/core';
const Url = 'https://cs5610-server-node-shenglan.herokuapp.com/api/quizzes';
// const Url = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qId: string) =>
    fetch(`${Url}/${qId}/questions`)
      .then(response => response.json())
}
