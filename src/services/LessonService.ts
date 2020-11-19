import {Injectable} from '@angular/core';

const moduleUrl = 'https://wbdv-generic-server.herokuapp.com/api/shengou/modules';

@Injectable()
export class LessonService {
  findLessonsForModule = (moduleId: string) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
      .then(response => response.json())

  createLessonForModule = (moduleId: string) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify({title: 'new lesson'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
}
