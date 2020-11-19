import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  moduleId = '';
  lessonId = '';
  topics = [];

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
