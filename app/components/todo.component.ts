import { Component, Input } from 'angular2/core';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl : 'app/templates/todo.component.html',
  styleUrls: ['app/css/todo.component.css']
})

export class TodoComponent{
  @Input()
  todo: Todo;
  @Input()
  showType: string;

  constructor(
    private _todoService: TodoService
  ) { }

  onCheckChange(event){
    this.todo.isComplete = event.srcElement.checked;
    this._todoService.updateTodo(this.todo);
  }

  onDeleteTodo(event){
    this._todoService.deleteTodo(this.todo);
  }
}
