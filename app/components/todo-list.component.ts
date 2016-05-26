import { Component, Input } from 'angular2/core';

import { TodoService } from '../services/todo.service';
import { TodoComponent } from './todo.component';
import { Todo } from '../models/todo';

@Component({
  selector: 'my-todo-list',
  template: `
    <ul>
      <li *ngFor="#todo of getTodos()" >
        <my-todo [todo]= "todo" [showType]="showType"> </my-todo>
      </li>
      <span *ngIf="showType == 'checkbox' && getTodos().length == 0">Todo가 없습니다</span>
    </ul>
  `,

  directives: [
    TodoComponent
  ]
})

export class TodoListComponent{
  @Input()
  date:Date;
  @Input()
  showType : string;

  constructor(
    private _todoService: TodoService
  ) {}

  refresh(date:Date, showType:string){
    this.date = date;
    this.showType = showType;
  }

  getTodos(){
    return this._todoService.getTodosByDate(this.date);
  }

}
