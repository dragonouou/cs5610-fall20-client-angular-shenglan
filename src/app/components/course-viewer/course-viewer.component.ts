import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../services/CourseService';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course = {title: ''};
  courseId = '';

  constructor(private activedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
    });
    if (typeof this.courseId !== 'undefined'){
      this.courseService.findCourseById(this.courseId)
        .then(course => this.course = course);
    }
  }
}
