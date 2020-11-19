import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = [{title: '', _id: ''}];

  createLessonForModule = (moduleId: string) =>
    this.lessonService.createLessonForModule(moduleId)
      .then(newLesson => this.lessons.push(newLesson))

  constructor(private activeRoute: ActivatedRoute,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.lessonId = params.lessonId;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }
}
