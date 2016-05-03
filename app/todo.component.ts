import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Todo } from './todo';

@Component({
  selector: 'my-todo',
  template: `
  <div *ngIf="_isCheckbox" class="input-group">
    <span class="input-group-addon">
    <input #todo_checkbox id="todo_checkbox" type='checkbox' [checked] = "todo.isComplete"> </span>
    <label for="todo_checkbox" class="form-control" [class.todo_complete]="todo_checkbox.checked">{{ todo.todo }}</label>

    <span class="input-group-addon">X</span>
  </div>
  <div *ngIf="_isColor">
    <span *ngIf="todo" [ngClass]="{'alert-success': todo.isComplete === true,'alert-danger': todo.isComplete === false }">{{ todo.todo }}</span>
  </div>
  `,
  styles: [`
    .todo_complete{
      text-decoration : line-through;
    }
    label{
      cursor: pointer;
    }
  `]
})

export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;
  @Input()
  showType: string;

  _isColor : boolean = false;
  _isCheckbox : boolean = false;

  ngOnInit() {
    if(this.showType == "color"){
      this._isColor = true;
    }else if(this.showType == "checkbox"){
      this._isCheckbox = true;
    }
  }
}
