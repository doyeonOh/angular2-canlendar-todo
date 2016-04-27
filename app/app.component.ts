import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { CalendarComponent } from './calendar.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-calendar></my-calendar>
  `,
  directives: [ROUTER_DIRECTIVES, CalendarComponent],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})

@RouteConfig([

])

export class AppComponent implements OnInit {
  title =  'angular2-calendar-todo';
  sampleTodos : Todo[];

  constructor(
    private _todoService: TodoService
  ) {}
  ngOnInit(){
    this.sampleTodos = this._todoService.getTodos();
  }
}
