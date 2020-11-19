import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses/:courseId/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
