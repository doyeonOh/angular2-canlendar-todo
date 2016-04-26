import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Todo } from './todo';

@Component({
  selector: 'my-todo',
  template: `
  <div *ngIf="showColor != true">
    <input type='checkbox' [checked] = "todo.isComplete" >
    {{ todo.todo }}
  </div>
  <div *ngIf="showColor == true">
    <span *ngIf="todo.isComplete == true" style="background-color:green;color:white;">{{ todo.todo }}</span>
    <span *ngIf="todo.isComplete != true" style="background-color:red;color:white;">{{ todo.todo }}</span>
  </div>
  `
})

export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;
  @Input()
  showColor: boolean;

  // constructor(
  //   private _routeParams: RouteParams
  // ) {}


  ngOnInit() {
    console.log(this.showColor);
  }
}
