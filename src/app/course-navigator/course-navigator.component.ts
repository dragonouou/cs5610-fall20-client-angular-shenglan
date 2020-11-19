import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/CourseService';
import {ModuleService} from '../../services/ModuleService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})

export class CourseNavigatorComponent implements OnInit {

  courses = [{
    _id: '123',
    title: 'title1',
    editing: false
  }];
  modules: { _id: string; title: string }[] = [{
    _id: '',
    title: '',
  }];
  lessons = [];
  topics = [];
  selectedCourse = {
    _id: '',
    title: ''
  };

  createCourse = () =>
    this.courseService.createCourse()
        .then(newCourse => this.courses.push(newCourse))

  editCourse = (course: { editing: boolean; _id: string}) => {
    course.editing = true;
    this.courseService.updateCourse(course)
      .then(status => course.editing = true);
  }

  saveCourse = (course: { editing: boolean; _id: string}) => {
    course.editing = false;
    this.courseService.updateCourse(course)
      .then(status => course.editing = false);
  }

  selectCourse = (course: { title: string; _id: string}) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course._id)
      .then(modules => this.modules = modules);
  }

  deleteCourse = (course: { _id: string; }) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  createModuleForCourse = (selectedCourse: { _id: string }) =>
    this.moduleService.createModuleForCourse(selectedCourse._id)
      .then(actualModule => this.modules.push(actualModule))

  deleteModule = (module: { _id: string; }) =>
    this.moduleService.deleteModule(module._id)
      .then(status => this.modules = this.modules.filter(c => c._id !== module._id))

  saveModule = (module: { _id: string; title: string }) =>
    this.moduleService.updateModule(module)
      .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))

  constructor(private courseService: CourseService, private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.courseService.findAllCourse()
      .then(courses => this.courses = courses);
  }

}
