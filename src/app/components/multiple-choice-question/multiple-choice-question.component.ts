import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', question : '', answer : '', correct : '', choices : []};
  grading = false;
  answer = '';

  setAnswer = (strr: string) => {
    this.answer = strr;
  }
  grade = () => {
    this.grading = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
