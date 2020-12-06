import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question : '', answer : '', correct : ''};
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();
  @Input()
  grading = Boolean;

  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  constructor() { }

  ngOnInit(): void {}
}
