import {Component, Input, OnInit} from 'angular2/core';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-list',
  template: `
    <ul style="padding:0;">
      <li *ngFor="#todo of todos" >
        <my-todo [todo]= "todo" [showColor]="showColor" > </my-todo>
      </li>
    </ul>
  `,

  directives: [
    TodoComponent
  ]
})

export class TodoListComponent implements OnInit{
  @Input()
  date:Date;
  @Input()
  showColor : boolean;

  constructor(
    private _todoService: TodoService
  ) {}

  todos : Todo[];

  ngOnInit(){
    this.todos = this._todoService.getTodosByDate(this.date);
  }


}
