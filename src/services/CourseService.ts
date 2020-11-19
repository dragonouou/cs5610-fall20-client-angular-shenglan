import {Injectable} from '@angular/core';
const url = 'https://wbdv-generic-server.herokuapp.com/api/shengou/courses';

@Injectable()
export class CourseService{
  findAllCourse = () =>
    fetch(url)
      .then(response => response.json())

  findCourseById = (courseId: string) =>
    fetch(`${url}/${courseId}`)
      .then(response => response.json())

  createCourse = () =>
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  deleteCourse = (courseId: string) =>
    fetch(`${url}/${courseId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  updateCourse = (course: { _id: string; }) =>
     fetch(`${url}/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

}

