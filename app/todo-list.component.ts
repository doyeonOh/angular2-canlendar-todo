import {Component, Input} from 'angular2/core';

import {TodoComponent} from './todo.component';
import {Todo} from './todo';

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

export class TodoListComponent {
  @Input()
  todos : Todo[];
  @Input()
  showColor : boolean;
}
