import { Component, Input, OnInit } from 'angular2/core';

import { TodoListComponent } from './todo-list.component';
import { Todo } from './todo';

@Component({
  selector: 'my-day-box',
  template: `
    <div>
      <my-todo-list [todos]="todos" [showColor]="showColor"></my-todo-list>
    </div>
  `,
  directives: [TodoListComponent]
})

export class DayBoxComponent implements OnInit{
  @Input()
  todos : Todo[];
  @Input()
  showColor : boolean;
  @Input()
  date: Date;

  ngOnInit(){
    console.log(this.date);
  }
}
