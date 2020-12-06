import {Injectable} from '@angular/core';

// const Url = 'https://cs5610-server-node-shenglan.herokuapp.com/api/quizzes';
const Url = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuizAttemptServiceClient {
  findAttemptsForQuiz = (quizId: string) =>
    fetch(`${Url}/${quizId}/attempts`)
      .then(response => response.json())

  findAttemptById = (attemptId: string) =>
    fetch(`http://localhost:3000/api/attempts/${attemptId}`)
      .then(response => response.json())
}
