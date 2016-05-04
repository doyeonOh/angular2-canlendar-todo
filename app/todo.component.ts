import { Component, Input } from 'angular2/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todo',
  template: `
    <div *ngIf="todo">
      <div *ngIf="showType == 'checkbox'" class="input-group">
        <span class="input-group-addon">
        <input #todo_checkbox id="{{'todo_checkbox' + todo.id }}" type='checkbox' [checked] = "todo.isComplete" (change)="onCheckChange($event)"> </span>
        <label [attr.for]="todo_checkbox.id" class="form-control"
          [ngClass]="{'success': todo_checkbox.checked, 'fail': !todo_checkbox.checked }">{{ todo.todo }}</label>
        <span class="input-group-addon todo_delete" (click)="onDeleteTodo($event)">X</span>
      </div>

      <div *ngIf="showType == 'color'">
        <span *ngIf="todo" class="todo_color" [ngClass]="{'success': todo.isComplete === true,'fail': todo.isComplete === false }">{{ todo.todo }}</span>
      </div>
    </div>
  `,
  styles: [`
    label{
      cursor: pointer;
    }
    .todo_color{
      padding: 0.2em 0.3em 0.2em 0.3em;
      border-radius: 0.2em;
    }
    .todo_delete{
      cursor:pointer;
    }
    .success{
      background-color: #cFFFcF;
      text-decoration : line-through;
    }
    .fail{
      background-color: #FFcFcF;

    }
  `]
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
