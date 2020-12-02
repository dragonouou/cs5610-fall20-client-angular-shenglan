import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/CourseService';
import {ModuleService} from '../services/ModuleService';
import { CourseListComponent } from './course-list/course-list.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './components/topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {LessonService} from '../services/LessonService';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import {QuizServiceClient} from '../services/quiz.service.client';
import {QuestionServiceClient} from '../services/question.service.client';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseListComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseTableComponent,
    CourseViewerComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
