import {Component, Input, OnInit} from 'angular2/core';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-list',
  template: `
    <ul style="padding:0;">
      <li *ngFor="#todo of _todos" >
        <my-todo [todo]= "todo" [showColor]="showColor" > </my-todo>
      </li>
      <span *ngIf="showColor == false && _todos.length == 0">Todo가 없습니다</span>
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

  _todos : Todo[];;

  constructor(
    private _todoService: TodoService
  ) {}


  refresh(date:Date, showColor:boolean){
    this.date = date;
    this.showColor = showColor;
    this._todos = this._todoService.getTodosByDate(this.date);
  }

  getTodos(){
    return this._todoService.getTodosByDate(this.date);
  }
  ngOnInit(){
    this._todos = this.getTodos();
  }


}
