import {Injectable} from '@angular/core';

const courseUrl = 'https://wbdv-generic-server.herokuapp.com/api/shengou/courses';
const moduleUrl = 'https://wbdv-generic-server.herokuapp.com/api/shengou/modules';

@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId: string) =>
    fetch(`${courseUrl}/${courseId}/modules`)
      .then(response => response.json())

  createModuleForCourse = (courseId: string) =>
    fetch(`${courseUrl}/${courseId}/modules`,{
      method: 'POST',
      body: JSON.stringify({title: 'new module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  deleteModule = (moduleId: string) =>
    fetch(`${moduleUrl}/${moduleId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())

  updateModule = (newModule: { _id: string}) =>
    fetch(`${moduleUrl}/${newModule._id}`,{
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}

