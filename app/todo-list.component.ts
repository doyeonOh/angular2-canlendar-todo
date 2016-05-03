import {Component, Input, OnInit} from 'angular2/core';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-list',
  template: `
    <ul>
      <li *ngFor="#todo of _todos" >
        <my-todo [todo]= "todo" [showType]="showType" (todoDeleted)="todoDeletedCallback()"> </my-todo>
      </li>
      <span *ngIf="showType == 'checkbox' && _todos.length == 0">Todo가 없습니다</span>
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
  showType : string;

  _todos : Todo[];
  
  constructor(
    private _todoService: TodoService
  ) {}

  todoDeletedCallback(){
    this.refresh(this.date, this.showType);
  }

  refresh(date:Date, showType:string){
    this.date = date;
    this.showType = showType;
    this._todos = this.getTodos();
  }

  getTodos(){
    return this._todoService.getTodosByDate(this.date);
  }

  ngOnInit(){
    this._todos = this.getTodos();
  }
}
